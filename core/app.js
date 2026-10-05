// ==========================================================================
// 物理學習中心 - 核心互動邏輯與多單元切換控制器 (Application Controller)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. 取得科目與單元設定
  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject') || LEARNING_CENTER_CONFIG.defaultSubject || 'physics';
  const unitParam = urlParams.get('unit');
  const qParam = parseInt(urlParams.get('q'), 10);

  // 尋找科目與單元設定
  let subjectConfig = LEARNING_CENTER_CONFIG.subjects.find(s => s.id === subjectParam) || LEARNING_CENTER_CONFIG.subjects[0];
  let unitConfig = subjectConfig.units.find(u => u.id === unitParam) || subjectConfig.units[0];

  const state = {
    currentSubjectId: subjectConfig.id,
    currentUnitId: unitConfig.id,
    currentId: 1,
    mode: 'focus', // 'focus' | 'list'
    fontScale: parseFloat(localStorage.getItem('phy_font_scale')) || 1.15,
    theme: localStorage.getItem('phy_theme') || 'light',
    activeFilter: 'all',
    searchQuery: '',
    reveals: {}, // { [unit_qId]: { hint: false, sol: false, ans: false } }
    bookmarked: new Set(JSON.parse(localStorage.getItem(`phy_bookmarked_${unitConfig.id}`) || '[]')),
    mastered: new Set(JSON.parse(localStorage.getItem(`phy_mastered_${unitConfig.id}`) || '[]')),
  };

  // 2. DOM 節點快取
  const appLogo = document.getElementById('app-logo');
  const appContainer = document.getElementById('app-container');
  const mainContent = document.getElementById('main-content');
  const questionGrid = document.getElementById('question-grid');
  const searchInput = document.getElementById('search-input');
  const filterTabsNav = document.getElementById('filter-tabs-nav');
  const modeFocusBtn = document.getElementById('mode-focus-btn');
  const modeListBtn = document.getElementById('mode-list-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const fontDecBtn = document.getElementById('font-dec-btn');
  const fontIncBtn = document.getElementById('font-inc-btn');
  const fontIndicator = document.getElementById('font-indicator');
  const focusBottomNav = document.getElementById('focus-bottom-nav');
  const prevBtn = document.getElementById('prev-question-btn');
  const nextBtn = document.getElementById('next-question-btn');
  const currentNavIndicator = document.getElementById('current-nav-indicator');
  const subjectSelect = document.getElementById('subject-select');
  const unitSelect = document.getElementById('unit-select');
  const appSubtitle = document.getElementById('app-subtitle');
  
  // 寶典、自學講義與列印連結
  const headerGuideLink = document.getElementById('header-guide-link');
  const headerTutorialLink = document.getElementById('header-tutorial-link');
  const headerPrintLink = document.getElementById('header-print-link');
  const sidebarGuideLink = document.getElementById('sidebar-guide-link');
  const sidebarTutorialLink = document.getElementById('sidebar-tutorial-link');
  const sidebarPrintLink = document.getElementById('sidebar-print-link');

  // 動態更新單元下拉選單選項
  function updateUnitSelectOptions() {
    if (!unitSelect) return;
    unitSelect.innerHTML = '';
    subjectConfig.units.forEach(u => {
      const opt = document.createElement('option');
      opt.value = u.id;
      opt.textContent = `🎯 ${u.name}`;
      unitSelect.appendChild(opt);
    });
  }

  // 取得目前單元的題庫清單
  function getCurrentQuestions() {
    if (unitConfig.dataVar && typeof window[unitConfig.dataVar] !== 'undefined') {
      return window[unitConfig.dataVar];
    }
    // 後備支援各單元全域變數
    if (unitConfig.id === '01_projectile' && typeof PHYSICS_QUESTIONS !== 'undefined') {
      return PHYSICS_QUESTIONS;
    }
    if (unitConfig.id === '02_linear_motion' && typeof LINEAR_MOTION_QUESTIONS !== 'undefined') {
      return LINEAR_MOTION_QUESTIONS;
    }
    if (unitConfig.id === '09_advanced_trig' && typeof ADVANCED_TRIG_QUESTIONS !== 'undefined') {
      return ADVANCED_TRIG_QUESTIONS;
    }
    return [];
  }

  // 3. 設定主題與字體大小
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggleBtn.title = theme === 'dark' ? '切換淺色模式' : '切換深色模式';
    localStorage.setItem('phy_theme', theme);
  }

  function applyFontScale(scale) {
    state.fontScale = Math.min(Math.max(scale, 0.9), 1.6);
    document.documentElement.style.setProperty('--font-scale', state.fontScale);
    fontIndicator.textContent = Math.round(state.fontScale * 100) + '%';
    localStorage.setItem('phy_font_scale', state.fontScale);
  }

  // 數學公式後備純文字/Unicode 轉換器
  function fallbackMathRender(latex, isBlock) {
    let clean = latex
      .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
      .replace(/\\sqrt\[(\d+)\]\{([^}]+)\}/g, '$1√($2)')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\implies/g, ' ⇒ ')
      .replace(/\\to/g, ' → ')
      .replace(/\\times/g, ' × ')
      .replace(/\\cdot/g, ' · ')
      .replace(/\\circ/g, '°')
      .replace(/\\theta/g, 'θ')
      .replace(/\\phi/g, 'ϕ')
      .replace(/\\alpha/g, 'α')
      .replace(/\\beta/g, 'β')
      .replace(/\\Delta/g, 'Δ')
      .replace(/\\rho/g, 'ρ')
      .replace(/\\sin/g, 'sin')
      .replace(/\\cos/g, 'cos')
      .replace(/\\tan/g, 'tan')
      .replace(/\\cot/g, 'cot')
      .replace(/\\vec\{([^}]+)\}/g, '⃗$1')
      .replace(/\\([a-zA-Z]+)/g, '$1');
    if (isBlock) {
      return `<div class="katex-display font-mono" style="padding:0.75rem 1rem; font-size:1.1em; overflow-x:auto;">${clean}</div>`;
    }
    return `<span class="katex-fallback" style="font-family: 'JetBrains Mono', Consolas, monospace; font-size:1.05em; font-weight:600;">${clean}</span>`;
  }

  // 4. 文字與 Markdown + KaTeX 解析函式 (採 Tokenization 隔離技術)
  function renderMarkdownWithKaTeX(rawText) {
    if (!rawText) return '';

    const mathTokens = [];

    // 先抓雙錢字號區塊公式 $$...$$
    let text = rawText.replace(/\$\$([\s\S]+?)\$\$/g, (match, formula) => {
      const tokenId = `___MATH_BLOCK_${mathTokens.length}___`;
      mathTokens.push({ id: tokenId, formula: formula.trim(), isBlock: true });
      return tokenId;
    });

    // 再抓單錢字號行內公式 $...$
    text = text.replace(/\$([^\$\n\r]+?)\$/g, (match, formula) => {
      const tokenId = `___MATH_INLINE_${mathTokens.length}___`;
      mathTokens.push({ id: tokenId, formula: formula.trim(), isBlock: false });
      return tokenId;
    });

    // 對純文本進行安全的 HTML 轉義
    text = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Markdown 基本語法解析
    text = text
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/^[\s]*[-*]\s+(.*)$/gm, '<li>$1</li>')
      .replace(/^[\s]*\d+\.\s+(.*)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
      .replace(/\n\n+/g, '</p><p>')
      .replace(/\n/g, '<br>');

    // 還原 Math Token
    mathTokens.forEach(({ id, formula, isBlock }) => {
      let renderedHtml = '';
      if (window.katex) {
        try {
          renderedHtml = katex.renderToString(formula, {
            displayMode: isBlock,
            throwOnError: false,
            strict: false,
            trust: true
          });
        } catch (e) {
          console.warn('KaTeX render error on:', formula, e);
          renderedHtml = fallbackMathRender(formula, isBlock);
        }
      } else {
        renderedHtml = fallbackMathRender(formula, isBlock);
      }
      text = text.split(id).join(renderedHtml);
    });

    return `<p>${text}</p>`;
  }

  // 5. 取得目前篩選後的題目清單
  function getFilteredQuestions() {
    const questions = getCurrentQuestions();
    return questions.filter(q => {
      // 分類篩選
      if (state.activeFilter === 'bookmarked') {
        if (!state.bookmarked.has(q.id)) return false;
      } else if (state.activeFilter !== 'all') {
        const cat = unitConfig.categories && unitConfig.categories.find(c => c.id === state.activeFilter);
        if (cat && cat.range) {
          if (q.id < cat.range[0] || q.id > cat.range[1]) return false;
        }
      }

      // 關鍵字搜尋
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        const idMatch = String(q.id).includes(query);
        const textMatch = q.raw ? q.raw.toLowerCase().includes(query) : (q.question + q.solution).toLowerCase().includes(query);
        if (!idMatch && !textMatch) return false;
      }
      return true;
    });
  }

  // 6. 動態渲染分類導覽標籤 (Filter Tabs)
  function renderFilterTabs() {
    if (!filterTabsNav) return;
    const questions = getCurrentQuestions();
    let html = `
      <button class="filter-tab ${state.activeFilter === 'all' ? 'active' : ''}" data-filter="all">
        <span>全部習題</span>
        <span class="filter-count" id="count-all">${questions.length}</span>
      </button>
    `;

    if (unitConfig.categories) {
      unitConfig.categories.forEach(cat => {
        const count = questions.filter(q => q.id >= cat.range[0] && q.id <= cat.range[1]).length;
        html += `
          <button class="filter-tab ${state.activeFilter === cat.id ? 'active' : ''}" data-filter="${cat.id}">
            <span>${cat.name}</span>
            <span class="filter-count">${count}</span>
          </button>
        `;
      });
    }

    html += `
      <button class="filter-tab ${state.activeFilter === 'bookmarked' ? 'active' : ''}" data-filter="bookmarked">
        <span>⭐ 我的複習標記</span>
        <span class="filter-count" id="count-bookmarked">${state.bookmarked.size}</span>
      </button>
    `;

    filterTabsNav.innerHTML = html;

    // 重新綁定分類 Tab 點擊事件
    filterTabsNav.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabsNav.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeFilter = tab.dataset.filter;
        if (state.mode === 'focus') {
          const filtered = getFilteredQuestions();
          if (filtered.length > 0 && !filtered.some(q => q.id === state.currentId)) {
            state.currentId = filtered[0].id;
          }
          renderFocusView();
        } else {
          renderListView();
        }
      });
    });
  }

  // 7. 渲染題號側邊欄矩陣 (Sidebar Grid)
  function renderSidebarGrid() {
    const questions = getCurrentQuestions();
    const filtered = getFilteredQuestions();
    const filteredIds = new Set(filtered.map(q => q.id));

    questionGrid.innerHTML = '';
    questions.forEach(q => {
      const isVisible = filteredIds.has(q.id);
      const isCurrent = state.mode === 'focus' && state.currentId === q.id;
      const isBookmarked = state.bookmarked.has(q.id);
      const isMastered = state.mastered.has(q.id);

      const btn = document.createElement('button');
      btn.className = `q-badge ${isCurrent ? 'current' : ''} ${isBookmarked ? 'bookmarked' : ''} ${isMastered ? 'mastered' : ''}`;
      btn.textContent = q.id;
      btn.title = `第 ${q.id} 題：${q.category || q.title || ''}`;
      if (!isVisible) {
        btn.style.opacity = '0.25';
      }

      btn.addEventListener('click', () => {
        state.currentId = q.id;
        if (state.mode === 'focus') {
          renderFocusView();
        } else {
          const targetEl = document.getElementById(`q-card-${q.id}`);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetEl.classList.add('flash-glow');
            setTimeout(() => targetEl.classList.remove('flash-glow'), 1200);
          }
        }
        renderSidebarGrid();
      });

      questionGrid.appendChild(btn);
    });

    // 更新書籤數量
    const bmCountEl = document.getElementById('count-bookmarked');
    if (bmCountEl) bmCountEl.textContent = state.bookmarked.size;
  }

  // 8. 渲染單張題目卡片 HTML
  function createQuestionCardElement(q) {
    const card = document.createElement('article');
    card.className = 'question-card';
    card.id = `q-card-${q.id}`;

    // 取得該題展開狀態
    const revealKey = `${unitConfig.id}_${q.id}`;
    if (!state.reveals[revealKey]) {
      state.reveals[revealKey] = { hint: false, sol: false, ans: false };
    }
    const r = state.reveals[revealKey];
    const isBookmarked = state.bookmarked.has(q.id);
    const isMastered = state.mastered.has(q.id);

    const questionHtml = renderMarkdownWithKaTeX(q.question);
    const hintHtml = q.hint ? renderMarkdownWithKaTeX(q.hint) : '';
    const solutionHtml = q.solution ? renderMarkdownWithKaTeX(q.solution) : '';
    const answerDisplay = q.answer || q.summary || '詳見算式';

    card.innerHTML = `
      <div class="card-header">
        <div class="card-title-group">
          <span class="q-number-pill">第 ${q.id} 題</span>
          <span class="q-category-tag">${q.unit || q.category}</span>
        </div>
        <div class="card-quick-actions">
          <button class="icon-action-btn ${isBookmarked ? 'active-star' : ''}" id="star-btn-${q.id}" title="${isBookmarked ? '取消標記' : '標記複習'}">
            ★
          </button>
          <button class="icon-action-btn ${isMastered ? 'active-mastered' : ''}" id="master-btn-${q.id}" title="${isMastered ? '已掌握' : '標記已掌握'}">
            ✓
          </button>
        </div>
      </div>

      <div class="question-body">
        ${questionHtml}
      </div>

      <div class="solution-controls">
        ${q.hint ? `
          <button class="reveal-btn reveal-btn-amber ${r.hint ? 'active' : ''}" id="toggle-hint-${q.id}">
            💡 ${r.hint ? '隱藏破題思維' : '查看破題思維'}
          </button>
        ` : ''}
        ${q.solution ? `
          <button class="reveal-btn ${r.sol ? 'active' : ''}" id="toggle-sol-${q.id}">
            📝 ${r.sol ? '隱藏詳細推導' : '查看詳細推導與算式'}
          </button>
        ` : ''}
        <button class="reveal-btn reveal-btn-emerald ${r.ans ? 'active' : ''}" id="toggle-ans-${q.id}">
          🎯 ${r.ans ? '隱藏答案' : '查看參考答案'}
        </button>
      </div>

      <div class="solution-sections">
        ${r.hint ? `
          <div class="hint-box">
            <div class="section-label">💡【破題思維 / 關鍵切入點】</div>
            <div>${hintHtml}</div>
          </div>
        ` : ''}

        ${r.sol ? `
          <div class="detailed-solution-box">
            <div class="section-label">📝【詳細算式與解析】</div>
            <div>${solutionHtml}</div>
          </div>
        ` : ''}

        ${r.ans ? `
          <div class="answer-box">
            <div class="section-label">🎯【參考正解】</div>
            <div class="answer-value">${renderMarkdownWithKaTeX(answerDisplay)}</div>
          </div>
        ` : ''}
      </div>
    `;

    // 綁定事件
    const starBtn = card.querySelector(`#star-btn-${q.id}`);
    starBtn.addEventListener('click', () => {
      if (state.bookmarked.has(q.id)) {
        state.bookmarked.delete(q.id);
        starBtn.classList.remove('active-star');
      } else {
        state.bookmarked.add(q.id);
        starBtn.classList.add('active-star');
      }
      localStorage.setItem(`phy_bookmarked_${unitConfig.id}`, JSON.stringify([...state.bookmarked]));
      renderSidebarGrid();
    });

    const masterBtn = card.querySelector(`#master-btn-${q.id}`);
    masterBtn.addEventListener('click', () => {
      if (state.mastered.has(q.id)) {
        state.mastered.delete(q.id);
        masterBtn.classList.remove('active-mastered');
      } else {
        state.mastered.add(q.id);
        masterBtn.classList.add('active-mastered');
      }
      localStorage.setItem(`phy_mastered_${unitConfig.id}`, JSON.stringify([...state.mastered]));
      renderSidebarGrid();
    });

    const toggleHintBtn = card.querySelector(`#toggle-hint-${q.id}`);
    if (toggleHintBtn) {
      toggleHintBtn.addEventListener('click', () => {
        state.reveals[revealKey].hint = !state.reveals[revealKey].hint;
        updateCardSolutions(card, q);
      });
    }

    const toggleSolBtn = card.querySelector(`#toggle-sol-${q.id}`);
    if (toggleSolBtn) {
      toggleSolBtn.addEventListener('click', () => {
        state.reveals[revealKey].sol = !state.reveals[revealKey].sol;
        updateCardSolutions(card, q);
      });
    }

    const toggleAnsBtn = card.querySelector(`#toggle-ans-${q.id}`);
    if (toggleAnsBtn) {
      toggleAnsBtn.addEventListener('click', () => {
        state.reveals[revealKey].ans = !state.reveals[revealKey].ans;
        updateCardSolutions(card, q);
      });
    }

    return card;
  }

  // 9. 局部更新卡片的解析展開區
  function updateCardSolutions(card, q) {
    const revealKey = `${unitConfig.id}_${q.id}`;
    const r = state.reveals[revealKey];
    const hintBtn = card.querySelector(`#toggle-hint-${q.id}`);
    const solBtn = card.querySelector(`#toggle-sol-${q.id}`);
    const ansBtn = card.querySelector(`#toggle-ans-${q.id}`);

    if (hintBtn) {
      hintBtn.className = `reveal-btn reveal-btn-amber ${r.hint ? 'active' : ''}`;
      hintBtn.innerHTML = `💡 ${r.hint ? '隱藏破題思維' : '查看破題思維'}`;
    }
    if (solBtn) {
      solBtn.className = `reveal-btn ${r.sol ? 'active' : ''}`;
      solBtn.innerHTML = `📝 ${r.sol ? '隱藏詳細推導' : '查看詳細推導與算式'}`;
    }
    if (ansBtn) {
      ansBtn.className = `reveal-btn reveal-btn-emerald ${r.ans ? 'active' : ''}`;
      ansBtn.innerHTML = `🎯 ${r.ans ? '隱藏答案' : '查看參考答案'}`;
    }

    const sectionsContainer = card.querySelector('.solution-sections');
    const hintHtml = q.hint ? renderMarkdownWithKaTeX(q.hint) : '';
    const solutionHtml = q.solution ? renderMarkdownWithKaTeX(q.solution) : '';
    const answerDisplay = q.answer || q.summary || '詳見算式';

    sectionsContainer.innerHTML = `
      ${r.hint ? `
        <div class="hint-box">
          <div class="section-label">💡【破題思維 / 關鍵切入點】</div>
          <div>${hintHtml}</div>
        </div>
      ` : ''}

      ${r.sol ? `
        <div class="detailed-solution-box">
          <div class="section-label">📝【詳細算式與解析】</div>
          <div>${solutionHtml}</div>
        </div>
      ` : ''}

      ${r.ans ? `
        <div class="answer-box">
          <div class="section-label">🎯【參考正解】</div>
          <div class="answer-value">${renderMarkdownWithKaTeX(answerDisplay)}</div>
        </div>
      ` : ''}
    `;
  }

  // 10. 渲染「單題專注模式」
  function renderFocusView() {
    mainContent.innerHTML = '';
    const questions = getCurrentQuestions();
    if (questions.length === 0) {
      renderEmptyState();
      return;
    }

    const q = questions.find(item => item.id === state.currentId) || questions[0];
    state.currentId = q.id;

    const card = createQuestionCardElement(q);
    mainContent.appendChild(card);

    // 更新底部導航
    focusBottomNav.style.display = 'flex';
    currentNavIndicator.textContent = `第 ${q.id} / ${questions.length} 題`;
    prevBtn.disabled = q.id <= 1;
    nextBtn.disabled = q.id >= questions.length;

    renderSidebarGrid();
  }

  // 11. 渲染「清單瀏覽模式」
  function renderListView() {
    mainContent.innerHTML = '';
    focusBottomNav.style.display = 'none';

    const filtered = getFilteredQuestions();

    const listActionBar = document.createElement('div');
    listActionBar.className = 'list-actions-bar';
    listActionBar.innerHTML = `
      <span class="status-summary">符合條件共 ${filtered.length} 題</span>
      <div style="display:flex; gap:0.5rem;">
        <button class="btn-secondary" id="expand-all-btn">📖 全部展開解析</button>
        <button class="btn-secondary" id="collapse-all-btn">📁 全部收合</button>
      </div>
    `;
    mainContent.appendChild(listActionBar);

    listActionBar.querySelector('#expand-all-btn').addEventListener('click', () => {
      filtered.forEach(q => {
        state.reveals[`${unitConfig.id}_${q.id}`] = { hint: true, sol: true, ans: true };
      });
      renderListView();
    });

    listActionBar.querySelector('#collapse-all-btn').addEventListener('click', () => {
      filtered.forEach(q => {
        state.reveals[`${unitConfig.id}_${q.id}`] = { hint: false, sol: false, ans: false };
      });
      renderListView();
    });

    if (filtered.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.style.textAlign = 'center';
      emptyDiv.style.padding = '4rem 1rem';
      emptyDiv.style.color = 'var(--text-muted)';
      emptyDiv.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <p style="font-size: 1.15rem; font-weight: 600;">沒有符合條件的題目</p>
        <p style="font-size: 0.9rem;">請調整搜尋關鍵字或分類標籤</p>
      `;
      mainContent.appendChild(emptyDiv);
      return;
    }

    filtered.forEach(q => {
      const card = createQuestionCardElement(q);
      mainContent.appendChild(card);
    });

    renderSidebarGrid();
  }

  function renderEmptyState() {
    mainContent.innerHTML = `
      <div style="text-align:center; padding:4rem 1rem; color:var(--text-muted);">
        <div style="font-size:3rem; margin-bottom:1rem;">⚠️</div>
        <h2>題庫資料載入中或發生異常</h2>
        <p>請重新整理瀏覽器頁面 (F5)。</p>
      </div>
    `;
  }

  // 12. 切換模式
  function setMode(mode) {
    state.mode = mode;
    if (mode === 'focus') {
      modeFocusBtn.classList.add('active');
      modeListBtn.classList.remove('active');
      renderFocusView();
    } else {
      modeListBtn.classList.add('active');
      modeFocusBtn.classList.remove('active');
      renderListView();
    }
  }

  // 13. 切換單元 (Switch Unit)
  function switchUnit(newUnitId, targetQId = 1) {
    const found = subjectConfig.units.find(u => u.id === newUnitId);
    if (!found) return;

    unitConfig = found;
    state.currentUnitId = unitConfig.id;
    state.activeFilter = 'all';
    state.searchQuery = '';
    if (searchInput) searchInput.value = '';

    // 讀取該單元的書籤與掌握紀錄
    state.bookmarked = new Set(JSON.parse(localStorage.getItem(`phy_bookmarked_${unitConfig.id}`) || '[]'));
    state.mastered = new Set(JSON.parse(localStorage.getItem(`phy_mastered_${unitConfig.id}`) || '[]'));

    // 更新網址 Query
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('subject', state.currentSubjectId);
    newUrl.searchParams.set('unit', unitConfig.id);
    newUrl.searchParams.set('q', targetQId);
    window.history.replaceState({}, '', newUrl);

    // 更新副標題與寶典按鈕連結
    if (appSubtitle) {
      appSubtitle.textContent = `${unitConfig.name} · 全功能互動精解指南`;
    }
    if (headerGuideLink) {
      headerGuideLink.href = unitConfig.guideUrl || 'guide.html';
      headerGuideLink.title = `查看 ${unitConfig.name} 公式變形、題型矩陣與解題思考導航`;
    }
    if (headerTutorialLink) {
      if (unitConfig.tutorialUrl) {
        headerTutorialLink.href = unitConfig.tutorialUrl;
        headerTutorialLink.style.display = 'inline-flex';
      } else {
        headerTutorialLink.style.display = 'none';
      }
    }
    if (headerPrintLink) {
      headerPrintLink.href = unitConfig.printUrl || 'guide_print.html';
    }
    if (sidebarGuideLink) {
      sidebarGuideLink.href = unitConfig.guideUrl || 'guide.html';
    }
    if (sidebarTutorialLink) {
      if (unitConfig.tutorialUrl) {
        sidebarTutorialLink.href = unitConfig.tutorialUrl;
        sidebarTutorialLink.style.display = 'flex';
      } else {
        sidebarTutorialLink.style.display = 'none';
      }
    }
    if (sidebarPrintLink) {
      sidebarPrintLink.href = unitConfig.printUrl || 'guide_print.html';
    }

    if (unitSelect) {
      unitSelect.value = unitConfig.id;
    }

    // 題號校驗
    const questions = getCurrentQuestions();
    state.currentId = (targetQId && targetQId >= 1 && targetQId <= questions.length) ? targetQId : 1;

    renderFilterTabs();
    if (state.mode === 'focus') {
      renderFocusView();
    } else {
      renderListView();
    }
  }

  // 14. 切換科目 (Switch Subject)
  function switchSubject(newSubjectId) {
    const found = LEARNING_CENTER_CONFIG.subjects.find(s => s.id === newSubjectId);
    if (!found) return;

    subjectConfig = found;
    state.currentSubjectId = subjectConfig.id;
    if (appLogo) appLogo.textContent = subjectConfig.icon || '📚';
    if (subjectSelect) subjectSelect.value = subjectConfig.id;

    updateUnitSelectOptions();
    if (subjectConfig.units.length > 0) {
      switchUnit(subjectConfig.units[0].id, 1);
    }
  }

  // 15. 事件監聽設定
  // 科目選單切換
  if (subjectSelect) {
    subjectSelect.addEventListener('change', (e) => {
      switchSubject(e.target.value);
    });
  }

  // 單元選單切換
  if (unitSelect) {
    unitSelect.addEventListener('change', (e) => {
      switchUnit(e.target.value, 1);
    });
  }

  // 模式切換按鈕
  modeFocusBtn.addEventListener('click', () => setMode('focus'));
  modeListBtn.addEventListener('click', () => setMode('list'));

  // 主題切換
  themeToggleBtn.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  // 字體放大縮小
  fontIncBtn.addEventListener('click', () => applyFontScale(state.fontScale + 0.1));
  fontDecBtn.addEventListener('click', () => applyFontScale(state.fontScale - 0.1));

  // 搜尋輸入
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    if (state.mode === 'focus') {
      renderSidebarGrid();
    } else {
      renderListView();
    }
  });

  // 底部換題導航 (專注模式)
  prevBtn.addEventListener('click', () => {
    const questions = getCurrentQuestions();
    if (state.currentId > 1) {
      state.currentId--;
      renderFocusView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  nextBtn.addEventListener('click', () => {
    const questions = getCurrentQuestions();
    if (state.currentId < questions.length) {
      state.currentId++;
      renderFocusView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // 鍵盤快捷鍵支援 (支援 Left/Right 翻頁，空白鍵掀開解析)
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const questions = getCurrentQuestions();
    const total = questions.length;

    if (e.key === 'ArrowLeft' || e.key === 'k') {
      if (state.mode === 'focus' && state.currentId > 1) {
        state.currentId--;
        renderFocusView();
      }
    } else if (e.key === 'ArrowRight' || e.key === 'j') {
      if (state.mode === 'focus' && state.currentId < total) {
        state.currentId++;
        renderFocusView();
      }
    } else if (e.code === 'Space') {
      if (state.mode === 'focus') {
        e.preventDefault();
        const revealKey = `${unitConfig.id}_${state.currentId}`;
        if (!state.reveals[revealKey]) {
          state.reveals[revealKey] = { hint: false, sol: false, ans: false };
        }
        const curQ = state.reveals[revealKey];
        if (!curQ.sol) {
          curQ.hint = true;
          curQ.sol = true;
          curQ.ans = true;
        } else {
          curQ.hint = false;
          curQ.sol = false;
          curQ.ans = false;
        }
        renderFocusView();
      }
    }
  });

  // 16. 初始化執行
  applyTheme(state.theme);
  applyFontScale(state.fontScale);

  // 初始化選取當前科目與單元
  if (subjectSelect) subjectSelect.value = subjectConfig.id;
  if (appLogo) appLogo.textContent = subjectConfig.icon || '📚';
  updateUnitSelectOptions();

  const initialTargetQ = (qParam && qParam >= 1) ? qParam : 1;
  switchUnit(unitConfig.id, initialTargetQ);
  setMode('focus');

  // KaTeX 重繪計時器
  let attempts = 0;
  const katexTimer = setInterval(() => {
    attempts++;
    if (window.katex) {
      clearInterval(katexTimer);
      if (state.mode === 'focus') {
        renderFocusView();
      } else {
        renderListView();
      }
    } else if (attempts > 30) {
      clearInterval(katexTimer);
    }
  }, 100);
});
