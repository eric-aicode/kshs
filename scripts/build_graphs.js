const fs = require('fs');
const path = require('path');

// 顏色常數 (高對比、教科書專業風)
const C = {
  bg: '#ffffff',
  border: '#cbd5e1',
  axis: '#334155',
  grid: '#f1f5f9',
  line: '#2563eb', // 主運動曲線
  line2: '#dc2626', // 第二條曲線
  line3: '#16a34a', // 第三條曲線
  posArea: 'rgba(14, 165, 233, 0.18)',
  negArea: 'rgba(239, 68, 68, 0.18)',
  dot: '#2563eb',
  dash: '#94a3b8',
  text: '#334155',
  muted: '#64748b'
};

const DIAGRAMS = {
  // -------------------------------------------------------------
  // Q4: 【例題 4】a-t 圖轉換位移與平均速度
  // Prompt: Line graph of a(m/s^2) vs t(s). (0,6) down to (3,0) and (6,-9).
  // -------------------------------------------------------------
  4: `<svg viewBox="0 0 540 280" width="540" height="280" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
    <pattern id="grid-q4" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid-q4)" rx="10"/>

  <!-- 面積著色: 0~3s 正面積 (速度增加 +9 m/s) -->
  <path d="M 70 120 L 70 60 L 220 120 Z" fill="rgba(14, 165, 233, 0.18)"/>
  <text x="120" y="100" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="700" fill="#0284c7">+9 m/s (Δv₁)</text>

  <!-- 面積著色: 3~6s 負面積 -->
  <path d="M 220 120 L 370 210 L 370 120 Z" fill="rgba(239, 68, 68, 0.18)"/>
  <text x="320" y="150" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="700" fill="#ef4444">-13.5 m/s (Δv₂)</text>

  <!-- 投影輔助虛線 -->
  <line x1="70" y1="60" x2="70" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="70" y1="210" x2="370" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="370" y1="120" x2="370" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- 坐標軸 -->
  <line x1="50" y1="120" x2="480" y2="120" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q4)"/>
  <text x="490" y="124" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>

  <line x1="70" y1="240" x2="70" y2="30" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q4)"/>
  <text x="70" y="20" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">a (m/s²)</text>

  <!-- 刻度與標籤 -->
  <text x="60" y="135" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">0</text>
  <text x="62" y="64" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">6</text>
  <text x="62" y="214" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#ef4444">-9</text>

  <text x="220" y="138" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">3</text>
  <text x="370" y="112" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">6</text>

  <!-- a-t 運動直線 -->
  <line x1="70" y1="60" x2="370" y2="210" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/>

  <!-- 節點圓點 -->
  <circle cx="70" cy="60" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="220" cy="120" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="370" cy="210" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
</svg>`,

  // -------------------------------------------------------------
  // Q5: 【例題 5】打點計時器數據分析 [97指考]
  // Prompt: Paper tape timing dots illustration. Dots 10-15 total 4cm, dots 60-65 total 9cm.
  // -------------------------------------------------------------
  5: `<svg viewBox="0 0 540 180" width="540" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <!-- 紙帶底色 -->
  <rect x="20" y="45" width="500" height="60" fill="#fefce8" stroke="#cbd5e1" stroke-width="1.5" rx="4"/>
  <text x="35" y="32" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#475569">運動方向 ➔ (頻率 f = 50 Hz, 點間隔 Δt = 0.02 s)</text>

  <!-- 點 10 ~ 15 -->
  <circle cx="50" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="68" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="88" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="110" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="134" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="160" cy="75" r="3.5" fill="#1e293b"/>

  <text x="50" y="62" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64748b">10</text>
  <text x="160" y="62" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64748b">15</text>

  <!-- 標註 4 cm -->
  <line x1="50" y1="115" x2="160" y2="115" stroke="#0284c7" stroke-width="2"/>
  <line x1="50" y1="108" x2="50" y2="122" stroke="#0284c7" stroke-width="2"/>
  <line x1="160" y1="108" x2="160" y2="122" stroke="#0284c7" stroke-width="2"/>
  <text x="105" y="132" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#0284c7">4 cm (5間隔 = 0.1s)</text>

  <!-- 中間省略線 -->
  <path d="M 230 45 L 240 75 L 230 105" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3,3"/>
  <text x="250" y="80" font-family="'JetBrains Mono', sans-serif" font-size="13" font-weight="700" fill="#94a3b8">⋯⋯</text>
  <path d="M 280 45 L 290 75 L 280 105" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3,3"/>

  <!-- 點 60 ~ 65 -->
  <circle cx="330" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="358" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="388" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="420" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="454" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="490" cy="75" r="3.5" fill="#1e293b"/>

  <text x="330" y="62" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64748b">60</text>
  <text x="490" y="62" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64748b">65</text>

  <!-- 標註 9 cm -->
  <line x1="330" y1="115" x2="490" y2="115" stroke="#059669" stroke-width="2"/>
  <line x1="330" y1="108" x2="330" y2="122" stroke="#059669" stroke-width="2"/>
  <line x1="490" y1="108" x2="490" y2="122" stroke="#059669" stroke-width="2"/>
  <text x="410" y="132" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#059669">9 cm (5間隔 = 0.1s)</text>

  <!-- 時間間隔說明 -->
  <text x="270" y="165" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="11" fill="#64748b">兩段中央點 (第 12.5 點 與 第 62.5 點) 相隔 50 格 = 1.0 秒</text>
</svg>`,

  // -------------------------------------------------------------
  // Q7: 【例題 7】v-t 梯形圖平均速度 [105指考]
  // Prompt: Trapezoidal v-t graph. (0,0)->(T/4, V)->(T/2, V)->(T,0)
  // -------------------------------------------------------------
  7: `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q7" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
    <pattern id="grid-q7" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid-q7)" rx="10"/>

  <!-- 梯形面積著色 -->
  <path d="M 70 190 L 160 80 L 250 80 L 430 190 Z" fill="rgba(14, 165, 233, 0.18)"/>
  <text x="235" y="145" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="13" font-weight="700" fill="#0284c7">位移 Δx = 5/8 VT</text>

  <!-- 投影輔助虛線 -->
  <line x1="70" y1="80" x2="250" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="160" y1="80" x2="160" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="250" y1="80" x2="250" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- 坐標軸 -->
  <line x1="50" y1="190" x2="480" y2="190" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q7)"/>
  <text x="490" y="194" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t</text>

  <line x1="70" y1="210" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q7)"/>
  <text x="70" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v</text>

  <!-- 刻度與標籤 -->
  <text x="58" y="205" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">0</text>
  <text x="60" y="84" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" fill="#0284c7">V</text>

  <text x="160" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">T/4</text>
  <text x="250" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">T/2</text>
  <text x="430" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">T</text>

  <!-- 上底標註 -->
  <line x1="160" y1="65" x2="250" y2="65" stroke="#64748b" stroke-width="1.5"/>
  <text x="205" y="58" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#64748b">上底 = T/4</text>

  <!-- 梯形主折線 -->
  <path d="M 70 190 L 160 80 L 250 80 L 430 190" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- 節點圓點 -->
  <circle cx="70" cy="190" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="160" cy="80" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="250" cy="80" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="430" cy="190" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
</svg>`,

  // -------------------------------------------------------------
  // Q14: 【補充習題（一）第 1 題】太極圖位移與路徑長
  // Prompt: Diagram of circle R with inner semicircles.
  // -------------------------------------------------------------
  14: `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q14" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7"/>
    </marker>
  </defs>

  <!-- 大圓 R = 90 (直徑 180, 中心 270, 130) -->
  <circle cx="270" cy="130" r="90" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>

  <!-- 坐標軸或直徑線 AC -->
  <line x1="270" y1="40" x2="270" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- 內半圓弧 (太極S曲線) -->
  <!-- 上半內圓: 圓心 (270, 85), r=45, 從 (270,40) 到 (270,130) -->
  <path d="M 270 40 A 45 45 0 0 1 270 130" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <!-- 下半內圓: 圓心 (270, 175), r=45, 從 (270,130) 到 (270,220) -->
  <path d="M 270 130 A 45 45 0 0 0 270 220" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>

  <!-- 外圓弧路徑 (A-B-C) -->
  <path d="M 270 40 A 90 90 0 0 1 270 220" fill="none" stroke="#0284c7" stroke-width="3" marker-mid="url(#arrow-q14)"/>

  <!-- 關鍵點標記 -->
  <!-- A (270, 40) -->
  <circle cx="270" cy="40" r="5" fill="#ef4444"/>
  <text x="270" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#ef4444">A (起點)</text>

  <!-- C (270, 220) -->
  <circle cx="270" cy="220" r="5" fill="#ef4444"/>
  <text x="270" y="240" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#ef4444">C (終點)</text>

  <!-- O (270, 130) -->
  <circle cx="270" cy="130" r="4" fill="#334155"/>
  <text x="255" y="134" text-anchor="end" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#334155">O</text>

  <!-- B (右側圓弧中點 360, 130) -->
  <text x="375" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#0284c7">B</text>

  <!-- 半徑標註 -->
  <line x1="270" y1="130" x2="180" y2="130" stroke="#64748b" stroke-width="1.5"/>
  <text x="225" y="122" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">R</text>

  <!-- 說明 -->
  <text x="80" y="110" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="700" fill="#334155">軌跡：A ➔ B ➔ C ➔ O ➔ A ➔ D ➔ C</text>
  <text x="80" y="135" font-family="'Noto Sans TC', sans-serif" font-size="12" fill="#0284c7">總路徑長 = 3πR</text>
  <text x="80" y="155" font-family="'Noto Sans TC', sans-serif" font-size="12" fill="#ef4444">位移向量 AC = 2R (向下)</text>
</svg>`,

  // -------------------------------------------------------------
  // Q20: 【補充習題（一）第 7 題】x-t 圖分段綜合計算
  // Prompt: x-t piecewise graph: (0,5)->(5,15)->(7,15)->(9,-15)->(10,0)
  // -------------------------------------------------------------
  20: `<svg viewBox="0 0 540 280" width="540" height="280" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q20" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
    <pattern id="grid-q20" width="25" height="25" patternUnits="userSpaceOnUse">
      <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#f1f5f9" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid-q20)" rx="10"/>

  <!-- 坐標軸: 原點 (60, 150), x 軸從 -20 到 +20 -->
  <!-- y刻度: x=15 -> y=75, x=5 -> y=125, x=0 -> y=150, x=-15 -> y=225 -->
  <!-- x刻度: t=0 -> 60, t=5 -> 210, t=7 -> 270, t=9 -> 350, t=10 -> 400 -->

  <!-- 輔助虛線 -->
  <line x1="60" y1="75" x2="270" y2="75" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="210" y1="75" x2="210" y2="150" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="270" y1="75" x2="270" y2="150" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="60" y1="225" x2="350" y2="225" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="350" y1="150" x2="350" y2="225" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- 坐標軸 -->
  <line x1="40" y1="150" x2="470" y2="150" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q20)"/>
  <text x="480" y="154" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>

  <line x1="60" y1="255" x2="60" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q20)"/>
  <text x="60" y="24" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">x (m)</text>

  <!-- 刻度與標籤 -->
  <text x="50" y="165" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">0</text>
  <text x="52" y="79" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">15</text>
  <text x="52" y="129" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">5</text>
  <text x="52" y="229" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#ef4444">-15</text>

  <text x="210" y="168" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">5</text>
  <text x="270" y="168" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">7</text>
  <text x="350" y="140" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">9</text>
  <text x="400" y="168" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">10</text>

  <!-- 折線 -->
  <path d="M 60 125 L 210 75 L 270 75 L 350 225 L 400 150" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- 圓點 -->
  <circle cx="60" cy="125" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="210" cy="75" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="270" cy="75" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="350" cy="225" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="400" cy="150" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
</svg>`,

  // -------------------------------------------------------------
  // Q21: 【補充習題（一）第 8 題】x-t 圖經過 A 點之速度比較
  // Prompt: x-t graph showing three intersecting curves at point A.
  // -------------------------------------------------------------
  21: `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q21" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- 坐標軸 -->
  <line x1="50" y1="210" x2="480" y2="210" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q21)"/>
  <text x="490" y="214" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t</text>

  <line x1="70" y1="230" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q21)"/>
  <text x="70" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">x</text>

  <!-- 交點 A (260, 110) -->
  <!-- 甲: 凹向上加速曲線 (斜率越來越大，在A點最陡) -->
  <path d="M 120 210 Q 200 190 260 110 T 320 30" fill="none" stroke="#2563eb" stroke-width="3"/>
  <text x="330" y="40" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#2563eb">甲 (斜率最陡 ➔ 速度最大)</text>

  <!-- 乙: 等速直線 (斜率中等) -->
  <line x1="90" y1="210" x2="380" y2="35" stroke="#16a34a" stroke-width="3"/>
  <text x="390" y="45" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#16a34a">乙 (等速直線)</text>

  <!-- 丙: 凹向下減速曲線 (在A點斜率最小) -->
  <path d="M 70 170 Q 170 110 260 110 T 420 85" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="430" y="90" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#dc2626">丙 (斜率最平)</text>

  <!-- 交點 A 圓點 -->
  <circle cx="260" cy="110" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
  <text x="245" y="100" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="850" fill="#d97706">A 點 (同位置 x_A)</text>
</svg>`,

  // -------------------------------------------------------------
  // Q25: 【補充習題（一）第 12 題】v-t 圖轉折與位置判斷
  // Prompt: v-t graph passing through (0,-5), (2,0), (4,5).
  // -------------------------------------------------------------
  25: `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q25" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
    <pattern id="grid-q25" width="25" height="25" patternUnits="userSpaceOnUse">
      <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#f1f5f9" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid-q25)" rx="10"/>

  <!-- 負面積 0~2s: 三角形 (70,140) -> (70,210) -> (210,140) -->
  <path d="M 70 140 L 70 210 L 210 140 Z" fill="rgba(239, 68, 68, 0.18)"/>
  <text x="120" y="175" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="700" fill="#ef4444">-5 m (折返點前)</text>

  <!-- 正面積 2~4s: 三角形 (210,140) -> (350,70) -> (350,140) -->
  <path d="M 210 140 L 350 70 L 350 140 Z" fill="rgba(14, 165, 233, 0.18)"/>
  <text x="280" y="115" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="700" fill="#0284c7">+5 m</text>

  <!-- 坐標軸: 原點 (70, 140) -->
  <line x1="50" y1="140" x2="480" y2="140" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q25)"/>
  <text x="490" y="144" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>

  <line x1="70" y1="240" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q25)"/>
  <text x="70" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s)</text>

  <!-- 輔助虛線 -->
  <line x1="70" y1="70" x2="350" y2="70" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="350" y1="70" x2="350" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- 刻度與標籤 -->
  <text x="60" y="155" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">0</text>
  <text x="62" y="74" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">5</text>
  <text x="62" y="214" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#ef4444">-5</text>

  <text x="210" y="158" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">2 (折返點)</text>
  <text x="350" y="158" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">4</text>

  <!-- 運動直線 -->
  <line x1="70" y1="210" x2="420" y2="35" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/>

  <!-- 節點圓點 -->
  <circle cx="70" cy="210" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="210" cy="140" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="350" cy="70" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
</svg>`,

  // -------------------------------------------------------------
  // Q108: 【歷屆學測第 4 題】101學測：v-t 圖求 6 秒內行程
  // Prompt: v-t graph with trapezoid.
  // -------------------------------------------------------------
  108: `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q108" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- 面積著色 -->
  <path d="M 70 190 L 170 80 L 330 80 L 430 190 Z" fill="rgba(14, 165, 233, 0.18)"/>

  <!-- 投影輔助虛線 -->
  <line x1="70" y1="80" x2="330" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="170" y1="80" x2="170" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="330" y1="80" x2="330" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- 坐標軸 -->
  <line x1="50" y1="190" x2="480" y2="190" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q108)"/>
  <text x="490" y="194" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>

  <line x1="70" y1="220" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q108)"/>
  <text x="70" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s)</text>

  <!-- 刻度與標籤 -->
  <text x="58" y="205" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">0</text>
  <text x="60" y="84" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#0284c7">4</text>

  <text x="170" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">2</text>
  <text x="330" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">4</text>
  <text x="430" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">6</text>

  <!-- 折線 -->
  <path d="M 70 190 L 170 80 L 330 80 L 430 190" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="70" cy="190" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="170" cy="80" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="330" cy="80" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="430" cy="190" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>

  <!-- 標註位移路徑 -->
  <text x="250" y="140" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#0284c7">梯形面積 = 1/2 × (2 + 6) × 4 = 16 m</text>
</svg>`,

  // -------------------------------------------------------------
  // Q120: 【歷屆指考/分科第 3 題】106指考：兩車 v-t 圖相遇與距離
  // Prompt: Two lines on v-t graph.
  // -------------------------------------------------------------
  120: `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q120" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>

  <!-- 兩線包夾面積 (兩車距離差) -->
  <path d="M 70 90 L 270 140 L 70 190 Z" fill="rgba(245, 158, 11, 0.15)"/>
  <text x="140" y="145" font-family="'Noto Sans TC', sans-serif" font-size="11" font-weight="700" fill="#d97706">相對距離最大 (t = t₀)</text>

  <!-- 坐標軸 -->
  <line x1="50" y1="190" x2="480" y2="190" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q120)"/>
  <text x="490" y="194" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t</text>

  <line x1="70" y1="210" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q120)"/>
  <text x="70" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v</text>

  <!-- 車 A: 初速較高但等減速 (紅線) -->
  <line x1="70" y1="90" x2="430" y2="180" stroke="#dc2626" stroke-width="3"/>
  <text x="440" y="180" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#dc2626">車 A</text>

  <!-- 車 B: 初速為 0 等加速 (藍線) -->
  <line x1="70" y1="190" x2="430" y2="100" stroke="#2563eb" stroke-width="3"/>
  <text x="440" y="100" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#2563eb">車 B</text>

  <!-- 相交點: 速度相同 t = t₀ -->
  <circle cx="270" cy="140" r="4.5" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
  <line x1="270" y1="140" x2="270" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="270" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">t₀ (同速)</text>
</svg>`
};

// 執行更新
console.log('Injecting diagrams into data.js and markdown...');

// 1. 更新 data.js
const dataPath = 'subjects/physics/02_直線運動/data.js';
let dataCode = fs.readFileSync(dataPath, 'utf8');

Object.keys(DIAGRAMS).forEach(id => {
  const numId = parseInt(id);
  const svg = DIAGRAMS[numId];
  // 檢查是否已存在 diagramSvg
  const qRegex = new RegExp(`({\\s*"id":\\s*${numId},[\\s\\S]*?"hint":\\s*"[^"]*",)`);
  if (dataCode.match(qRegex)) {
    // 檢查是否有舊的 diagramSvg
    const existingSvgRegex = new RegExp(`({\\s*"id":\\s*${numId},[\\s\\S]*?"diagramSvg":\\s*\`[\\s\\S]*?\`,)`);
    if (existingSvgRegex.test(dataCode)) {
      dataCode = dataCode.replace(existingSvgRegex, (match, prefix) => {
        return prefix.replace(/"diagramSvg":\s*`[\s\S]*?`,/, `"diagramSvg": \`${svg}\`,`);
      });
    } else {
      dataCode = dataCode.replace(qRegex, `$1\n    "diagramSvg": \`${svg}\`,`);
    }
    console.log(`Updated data.js for Q${numId}`);
  }
});

fs.writeFileSync(dataPath, dataCode, 'utf8');

// 2. 更新 markdown linear-motion-questions-v2.md
const mdPath = 'subjects/physics/02_直線運動/linear-motion-questions-v2.md';
let mdText = fs.readFileSync(mdPath, 'utf8');

// 遍歷所有包含 SVG 的題目，插入到 markdown 中
Object.keys(DIAGRAMS).forEach(id => {
  const numId = parseInt(id);
  const svg = DIAGRAMS[numId];
  // 尋找題目標題或 Prompt
  // 例如 【例題 4】 或 【補充習題（一）第 1 題】
  const targetRegex = new RegExp(`(###\\s*【[^】]*?(?:例題\\s*${numId}|第\\s*${numId}\\s*題)[^】]*?】[\\s\\S]*?>\\s*\\*Prompt\\*:[^\\n\\r]+)`);
  const match = mdText.match(targetRegex);
  if (match) {
    // 檢查下方是否已有 <svg
    const afterPrompt = mdText.slice(match.index + match[0].length, match.index + match[0].length + 120);
    if (!afterPrompt.includes('<svg')) {
      const wrappedSvg = `\n\n<div align="center" style="margin: 1.25rem 0;">\n${svg}\n</div>`;
      mdText = mdText.replace(match[0], match[0] + wrappedSvg);
      console.log(`Updated markdown for Q${numId}`);
    }
  }
});

fs.writeFileSync(mdPath, mdText, 'utf8');
console.log('Successfully completed diagram injection!');
