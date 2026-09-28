const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'subjects', 'math', '09_進階三角函數');

function parseFile(content, unitName, categoryName, startId) {
  // 分割 ### 題目
  const rawSections = content.split(/\n(?=### 題目\s*\d+：)/);
  const questions = [];
  let currentId = startId;
  
  for (const sec of rawSections) {
    if (!sec.trim().startsWith('### 題目')) continue;
    
    const lines = sec.trim().split('\n');
    const headerMatch = lines[0].match(/### 題目\s*\d+：(.*)/);
    const title = headerMatch ? headerMatch[1].trim() : '三角函數練習題';
    
    // 萃取各欄位
    const qMatch = sec.match(/- \*\*題目\*\*：([\s\S]*?)(?=\n- \*\*(?:\(圖片敘述\)|圖片敘述)\*\*：|\n- \*\*答案\*\*：)/);
    const imgMatch = sec.match(/- \*\*(?:\(圖片敘述\)|圖片敘述)\*\*：([\s\S]*?)(?=\n- \*\*答案\*\*：)/);
    const ansMatch = sec.match(/- \*\*答案\*\*：([\s\S]*?)(?=\n- \*\*解題關鍵\*\*：)/);
    const hintMatch = sec.match(/- \*\*解題關鍵\*\*：([\s\S]*?)(?=\n- \*\*解析\*\*：)/);
    const solMatch = sec.match(/- \*\*解析\*\*：([\s\S]*?)$/);
    
    let questionText = qMatch ? qMatch[1].trim() : '';
    const imgText = imgMatch ? imgMatch[1].trim() : '';
    if (imgText && !imgText.includes('無（本題無圖片）') && !imgText.includes('無') && imgText.length > 5) {
      questionText += '\n\n> 🖼️ **【試題幾何圖形描述與特徵】**：\n> ' + imgText.replace(/\n/g, '\n> ');
    }
    
    const answerText = ansMatch ? ansMatch[1].trim() : '';
    const hintText = hintMatch ? hintMatch[1].trim() : '';
    const solText = solMatch ? solMatch[1].trim().replace(/\n---$/, '') : '';
    
    questions.push({
      id: currentId++,
      title: title,
      category: categoryName,
      unit: unitName,
      question: questionText,
      hint: hintText,
      solution: solText,
      answer: answerText,
      raw: sec.trim()
    });
  }
  return questions;
}

const f1 = fs.readFileSync(path.join(dir, 'unit1_difference_formulas.md'), 'utf-8');
const f2 = fs.readFileSync(path.join(dir, 'unit2_trigonometric_graphs.md'), 'utf-8');
const f3 = fs.readFileSync(path.join(dir, 'unit3_harmonic_addition.md'), 'utf-8');

const q1 = parseFile(f1, '單元一：§9-1 差角公式', '§9-1 和差角公式 (1~4)', 1);
const q2 = parseFile(f2, '單元二：§9-2 三角函數的圖形', '§9-2 三角函數圖形 (5~34)', q1.length + 1);
const q3 = parseFile(f3, '單元三：§9-3 正餘弦的疊合', '§9-3 正餘弦疊合 (35~65)', q1.length + q2.length + 1);

const all = [...q1, ...q2, ...q3];
console.log(`單元一題數: ${q1.length}`);
console.log(`單元二題數: ${q2.length}`);
console.log(`單元三題數: ${q3.length}`);
console.log(`總題數: ${all.length}`);

// 檢查是否有空題目或欄位缺失
let emptyCount = 0;
all.forEach((q, i) => {
  if (!q.question || !q.solution || !q.answer) {
    console.warn(`[警告] 題號 ${q.id} (${q.title}) 欄位不完整:`, {
      hasQ: !!q.question,
      hasSol: !!q.solution,
      hasAns: !!q.answer,
      hasHint: !!q.hint
    });
    emptyCount++;
  }
});

console.log(`完整性檢查完畢，缺漏題數: ${emptyCount}`);

const dataJsContent = `// 高中數學 09_進階三角函數 1~65 題精選試題資料集
const ADVANCED_TRIG_QUESTIONS = ${JSON.stringify(all, null, 2)};

// 全域掛載兼容
if (typeof window !== 'undefined') {
  window.ADVANCED_TRIG_QUESTIONS = ADVANCED_TRIG_QUESTIONS;
}
`;

const outputPath = path.join(dir, 'data.js');
fs.writeFileSync(outputPath, dataJsContent, 'utf-8');
console.log(`成功輸出至 ${outputPath}，檔案大小: ${fs.statSync(outputPath).size} bytes`);
