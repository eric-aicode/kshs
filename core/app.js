// ==========================================================================
// 物理拋體運動互動學習中心 - 核心互動邏輯 (Application Controller)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. 狀態初始化
  const state = {
    currentId: 1,
    mode: 'focus', // 'focus' | 'list'
    fontScale: parseFloat(localStorage.getItem('phy_font_scale')) || 1.15,
    theme: localStorage.getItem('phy_theme') || 'light',
    activeFilter: 'all', // 'all' | '1-27' | '28-60' | '61-72' | 'bookmarked'
    searchQuery: '',
    reveals: {}, // { [qId]: { hint: false, sol: false, ans: false } }
    bookmarked: new Set(JSON.parse(localStorage.getItem('phy_bookmarked') || '[]')),
    mastered: new Set(JSON.parse(localStorage.getItem('phy_mastered') || '[]')),
  };

  // 2. DOM 節點快取
  const appContainer = document.getElementById('app-container');
  const mainContent = document.getElementById('main-content');
  const questionGrid = document.getElementById('question-grid');
  const searchInput = document.getElementById('search-input');
  const filterTabs = document.querySelectorAll('.filter-tab');
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

  // 題庫資料集檢查（支援新舊架構）
  const activeQuestions = (typeof PHYSICS_QUESTIONS !== 'undefined' && Array.isArray(PHYSICS_QUESTIONS))
    ? PHYSICS_QUESTIONS
    : (typeof UNIT_QUESTIONS !== 'undefined' && Array.isArray(UNIT_QUESTIONS) ? UNIT_QUESTIONS : []);

  if (typeof PHYSICS_QUESTIONS === 'undefined' && activeQuestions.length > 0) {
    window.PHYSICS_QUESTIONS = activeQuestions;
  }

  if (activeQuestions.length === 0) {
    console.error('題庫資料未成功載入');
    mainContent.innerHTML = `
      <div style="text-align:center; padding:4rem 1rem; color:var(--text-muted);">
        <div style="font-size:3rem; margin-bottom:1rem;">⚠️</div>
        <h2>題庫資料載入中或發生異常</h2>
        <p>請重新整理瀏覽器頁面 (F5)。</p>
      </div>
    `;
    return;
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

  // 數學公式後備純文字/Unicode 轉換器 (若離線或CDN延遲時保證符號清晰)
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

    // Step 1: 預處理所有數學公式，用專屬 Token 替換，防止其符號受到 HTML/Markdown 破壞
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

    // Step 2: 對公式外的純文本進行安全的 HTML 轉義
    text = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Step 3: Markdown 基本語法解析
    text = text
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/^[\s]*[-*]\s+(.*)$/gm, '<li>$1</li>')
      .replace(/^[\s]*\d+\.\s+(.*)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
      .replace(/\n\n+/g, '</p><p>')
      .replace(/\n/g, '<br>');

    // Step 4: 將 Math Token 還原為 KaTeX 完美渲染的 HTML (無注入破壞)
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
    return PHYSICS_QUESTIONS.filter(q => {
      // 分類篩選
      if (state.activeFilter === '1-27' && (q.id < 1 || q.id > 27)) return false;
      if (state.activeFilter === '28-60' && (q.id < 28 || q.id > 60)) return false;
      if (state.activeFilter === '61-72' && (q.id < 61 || q.id > 72)) return false;
      if (state.activeFilter === 'bookmarked' && !state.bookmarked.has(q.id)) return false;

      // 關鍵字搜尋 (支援題號與題目內容)
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        const idMatch = String(q.id).includes(query);
        const textMatch = q.raw.toLowerCase().includes(query);
        if (!idMatch && !textMatch) return false;
      }
      return true;
    });
  }

  // 6. 渲染題號側邊欄矩陣 (Sidebar Grid)
  function renderSidebarGrid() {
    const filtered = getFilteredQuestions();
    const filteredIds = new Set(filtered.map(q => q.id));

    questionGrid.innerHTML = '';
    PHYSICS_QUESTIONS.forEach(q => {
      const isVisible = filteredIds.has(q.id);
      const isCurrent = state.mode === 'focus' && state.currentId === q.id;
      const isBookmarked = state.bookmarked.has(q.id);
      const isMastered = state.mastered.has(q.id);

      const btn = document.createElement('button');
      btn.className = `q-badge ${isCurrent ? 'current' : ''} ${isBookmarked ? 'bookmarked' : ''} ${isMastered ? 'mastered' : ''}`;
      btn.textContent = q.id;
      btn.title = `第 ${q.id} 題：${q.category}`;
      if (!isVisible) {
        btn.style.opacity = '0.25';
      }

      btn.addEventListener('click', () => {
        state.currentId = q.id;
        if (state.mode === 'focus') {
          renderFocusView();
        } else {
          // 清單模式滾動至該題
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

    // 更新篩選器統計數字
    updateFilterCounts();
  }

  function updateFilterCounts() {
    const countAll = PHYSICS_QUESTIONS.length;
    const count1 = PHYSICS_QUESTIONS.filter(q => q.id >= 1 && q.id <= 27).length;
    const count2 = PHYSICS_QUESTIONS.filter(q => q.id >= 28 && q.id <= 60).length;
    const count3 = PHYSICS_QUESTIONS.filter(q => q.id >= 61 && q.id <= 72).length;
    const countBookmarked = state.bookmarked.size;

    document.getElementById('count-all').textContent = countAll;
    document.getElementById('count-1-27').textContent = count1;
    document.getElementById('count-28-60').textContent = count2;
    document.getElementById('count-61-72').textContent = count3;
    document.getElementById('count-bookmarked').textContent = countBookmarked;
  }

  // 7. 渲染單張題目卡片 HTML
  function createQuestionCardElement(q) {
    const card = document.createElement('article');
    card.className = 'question-card';
    card.id = `q-card-${q.id}`;

    // 取得該題的展開狀態
    if (!state.reveals[q.id]) {
      state.reveals[q.id] = { hint: false, sol: false, ans: false };
    }
    const r = state.reveals[q.id];
    const isBookmarked = state.bookmarked.has(q.id);
    const isMastered = state.mastered.has(q.id);

    // 格式化內容
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
    // 1. 收藏星號
    const starBtn = card.querySelector(`#star-btn-${q.id}`);
    starBtn.addEventListener('click', () => {
      if (state.bookmarked.has(q.id)) {
        state.bookmarked.delete(q.id);
        starBtn.classList.remove('active-star');
      } else {
        state.bookmarked.add(q.id);
        starBtn.classList.add('active-star');
      }
      localStorage.setItem('phy_bookmarked', JSON.stringify([...state.bookmarked]));
      renderSidebarGrid();
    });

    // 2. 掌握勾選
    const masterBtn = card.querySelector(`#master-btn-${q.id}`);
    masterBtn.addEventListener('click', () => {
      if (state.mastered.has(q.id)) {
        state.mastered.delete(q.id);
        masterBtn.classList.remove('active-mastered');
      } else {
        state.mastered.add(q.id);
        masterBtn.classList.add('active-mastered');
      }
      localStorage.setItem('phy_mastered', JSON.stringify([...state.mastered]));
      renderSidebarGrid();
    });

    // 3. 提示切換
    const toggleHintBtn = card.querySelector(`#toggle-hint-${q.id}`);
    if (toggleHintBtn) {
      toggleHintBtn.addEventListener('click', () => {
        state.reveals[q.id].hint = !state.reveals[q.id].hint;
        updateCardSolutions(card, q);
      });
    }

    // 4. 詳細解析切換
    const toggleSolBtn = card.querySelector(`#toggle-sol-${q.id}`);
    if (toggleSolBtn) {
      toggleSolBtn.addEventListener('click', () => {
        state.reveals[q.id].sol = !state.reveals[q.id].sol;
        updateCardSolutions(card, q);
      });
    }

    // 5. 答案切換
    const toggleAnsBtn = card.querySelector(`#toggle-ans-${q.id}`);
    if (toggleAnsBtn) {
      toggleAnsBtn.addEventListener('click', () => {
        state.reveals[q.id].ans = !state.reveals[q.id].ans;
        updateCardSolutions(card, q);
      });
    }

    return card;
  }

  // 8. 局部更新卡片的解析展開區
  function updateCardSolutions(card, q) {
    const r = state.reveals[q.id];
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

  // 9. 渲染「單題專注模式 (Focus Mode)」
  function renderFocusView() {
    mainContent.innerHTML = '';
    const q = PHYSICS_QUESTIONS.find(item => item.id === state.currentId);
    if (!q) return;

    const card = createQuestionCardElement(q);
    mainContent.appendChild(card);

    // 更新底部導航
    focusBottomNav.style.display = 'flex';
    currentNavIndicator.textContent = `第 ${q.id} / 72 題`;
    prevBtn.disabled = q.id <= 1;
    nextBtn.disabled = q.id >= 72;

    renderSidebarGrid();
  }

  // 10. 渲染「清單瀏覽模式 (List Mode)」
  function renderListView() {
    mainContent.innerHTML = '';
    focusBottomNav.style.display = 'none';

    const filtered = getFilteredQuestions();

    // 頂部小操作列 (全部展開 / 全部收合)
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
        state.reveals[q.id] = { hint: true, sol: true, ans: true };
      });
      renderListView();
    });

    listActionBar.querySelector('#collapse-all-btn').addEventListener('click', () => {
      filtered.forEach(q => {
        state.reveals[q.id] = { hint: false, sol: false, ans: false };
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

  // 11. 切換模式
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

  // 12. 事件監聽設定
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

  // 篩選器分頁點擊
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeFilter = tab.dataset.filter;
      if (state.mode === 'focus') {
        // 如果目前選中的題目不在篩選範圍內，切換到符合條件的第一題
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
    if (state.currentId > 1) {
      state.currentId--;
      renderFocusView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  nextBtn.addEventListener('click', () => {
    if (state.currentId < 72) {
      state.currentId++;
      renderFocusView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // 鍵盤快捷鍵支援 (支援 Left/Right 翻頁，空白鍵掀開解析)
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowLeft' || e.key === 'k') {
      if (state.mode === 'focus' && state.currentId > 1) {
        state.currentId--;
        renderFocusView();
      }
    } else if (e.key === 'ArrowRight' || e.key === 'j') {
      if (state.mode === 'focus' && state.currentId < 72) {
        state.currentId++;
        renderFocusView();
      }
    } else if (e.code === 'Space') {
      if (state.mode === 'focus') {
        e.preventDefault(); // 防止滾動
        const curQ = state.reveals[state.currentId];
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

  // 13. 初始化執行
  applyTheme(state.theme);
  applyFontScale(state.fontScale);
  setMode('focus');

  // 若 KaTeX 稍微延遲加載完成，自動再重繪一次以確保所有根號與公式清晰展開
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
