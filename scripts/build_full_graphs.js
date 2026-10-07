// scripts/build_full_graphs.js
const fs = require('fs');
const path = require('path');

// 顏色常數 (高對比、教科書專業風)
const C = {
  bg: '#ffffff',
  border: '#cbd5e1',
  axis: '#334155',
  grid: '#f8fafc',
  line: '#2563eb', // 主運動曲線 (藍)
  line2: '#dc2626', // 第二條曲線 (紅)
  line3: '#16a34a', // 第三條曲線 (綠)
  accent: '#d97706', // 琥珀橙
  posArea: 'rgba(14, 165, 233, 0.18)',
  negArea: 'rgba(239, 68, 68, 0.18)',
  warnArea: 'rgba(245, 158, 11, 0.18)',
  dot: '#2563eb',
  dash: '#94a3b8',
  text: '#334155',
  muted: '#64748b'
};

const DIAGRAMS = {};

// -------------------------------------------------------------
// Q3: 【例題 3】v-t 折線圖綜合分析
// -------------------------------------------------------------
DIAGRAMS[3] = `<svg viewBox="0 0 540 280" width="540" height="280" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 正面積著色 (0~8s) -->
  <path d="M 60 160 L 120 70 L 210 70 L 300 160 Z" fill="rgba(14, 165, 233, 0.18)"/>
  <text x="170" y="125" font-family="'JetBrains Mono', sans-serif" font-size="13" font-weight="800" fill="#0284c7">+66 m (Δx₁)</text>
  <!-- 負面積著色 (8~12s) -->
  <path d="M 300 160 L 360 220 L 420 160 Z" fill="rgba(239, 68, 68, 0.18)"/>
  <text x="360" y="195" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#ef4444">-8 m (Δx₂)</text>
  <!-- 投影輔助虛線 -->
  <line x1="60" y1="70" x2="210" y2="70" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="120" y1="70" x2="120" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="210" y1="70" x2="210" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="60" y1="220" x2="360" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="360" y1="160" x2="360" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- 坐標軸 -->
  <line x1="40" y1="160" x2="480" y2="160" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q3)"/>
  <text x="490" y="164" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="60" y1="250" x2="60" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q3)"/>
  <text x="60" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s)</text>
  <!-- 刻度值 -->
  <text x="52" y="174" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">0</text>
  <text x="52" y="74" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">12</text>
  <text x="52" y="224" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#ef4444">-8</text>
  <text x="120" y="178" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">2</text>
  <text x="210" y="178" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">5</text>
  <text x="300" y="178" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#ef4444">8 (折返)</text>
  <text x="360" y="150" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">10</text>
  <text x="420" y="178" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">12</text>
  <!-- 運動折線 -->
  <path d="M 60 160 L 120 70 L 210 70 L 300 160 L 360 220 L 420 160" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="60" cy="160" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="120" cy="70" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="210" cy="70" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="300" cy="160" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
  <circle cx="360" cy="220" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="420" cy="160" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
</svg>`;

// -------------------------------------------------------------
// Q4: 【例題 4】a-t 圖轉換位移與平均速度
// -------------------------------------------------------------
DIAGRAMS[4] = `<svg viewBox="0 0 540 280" width="540" height="280" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 面積著色: 0~3s 正面積 (速度增加 +9 m/s) -->
  <path d="M 70 120 L 70 60 L 220 120 Z" fill="rgba(14, 165, 233, 0.18)"/>
  <text x="120" y="100" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="700" fill="#0284c7">+9 m/s (Δv₁)</text>
  <!-- 面積著色: 3~6s 負面積 -->
  <path d="M 220 120 L 370 210 L 370 120 Z" fill="rgba(239, 68, 68, 0.18)"/>
  <text x="320" y="150" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="700" fill="#ef4444">-13.5 m/s (Δv₂)</text>
  <!-- 輔助虛線 -->
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
  <!-- 運動直線 -->
  <line x1="70" y1="60" x2="370" y2="210" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="70" cy="60" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="220" cy="120" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="370" cy="210" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
</svg>`;

// -------------------------------------------------------------
// Q5: 【例題 5】打點計時器數據分析 [97指考]
// -------------------------------------------------------------
DIAGRAMS[5] = `<svg viewBox="0 0 540 180" width="540" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
  <line x1="50" y1="115" x2="160" y2="115" stroke="#0284c7" stroke-width="2"/>
  <line x1="50" y1="108" x2="50" y2="122" stroke="#0284c7" stroke-width="2"/>
  <line x1="160" y1="108" x2="160" y2="122" stroke="#0284c7" stroke-width="2"/>
  <text x="105" y="132" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#0284c7">4 cm (5間隔 = 0.1s)</text>
  <!-- 省略號 -->
  <text x="245" y="80" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="16" fill="#94a3b8">· · · · · ·</text>
  <!-- 點 60 ~ 65 -->
  <circle cx="330" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="356" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="386" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="420" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="458" cy="75" r="3.5" fill="#1e293b"/>
  <circle cx="500" cy="75" r="3.5" fill="#1e293b"/>
  <text x="330" y="62" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64748b">60</text>
  <text x="500" y="62" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="10" fill="#64748b">65</text>
  <line x1="330" y1="115" x2="500" y2="115" stroke="#ef4444" stroke-width="2"/>
  <line x1="330" y1="108" x2="330" y2="122" stroke="#ef4444" stroke-width="2"/>
  <line x1="500" y1="108" x2="500" y2="122" stroke="#ef4444" stroke-width="2"/>
  <text x="415" y="132" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#ef4444">9 cm (5間隔 = 0.1s)</text>
  <text x="270" y="162" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="700" fill="#334155">時間間隔 Δt = 50點 = 1.0 s ➔ a = (0.9 - 0.4) / 1.0 = 0.5 m/s²</text>
</svg>`;

// -------------------------------------------------------------
// Q7: 【例題 7】v-t 梯形圖平均速度 [105指考]
// -------------------------------------------------------------
DIAGRAMS[7] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q7" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 梯形著色 -->
  <path d="M 80 190 L 170 70 L 290 70 L 440 190 Z" fill="rgba(14, 165, 233, 0.18)"/>
  <!-- 虛線投影 -->
  <line x1="80" y1="70" x2="290" y2="70" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="170" y1="70" x2="170" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="290" y1="70" x2="290" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- 坐標軸 -->
  <line x1="60" y1="190" x2="480" y2="190" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q7)"/>
  <text x="490" y="194" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t</text>
  <line x1="80" y1="220" x2="80" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q7)"/>
  <text x="80" y="30" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v</text>
  <!-- 標籤 -->
  <text x="70" y="205" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">0</text>
  <text x="70" y="75" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" fill="#0284c7">V</text>
  <text x="170" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">T/4</text>
  <text x="290" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">T/2</text>
  <text x="440" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">T</text>
  <!-- 運動折線 -->
  <path d="M 80 190 L 170 70 L 290 70 L 440 190" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="80" cy="190" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="170" cy="70" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="290" cy="70" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="440" cy="190" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <text x="230" y="135" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#0284c7">位移 Δx = 5/8 VT ➔ 平均速度 v̄ = 5/8 V</text>
</svg>`;

// -------------------------------------------------------------
// Q11: 【例題 11】光滑斜面等加速度與仰角計算
// -------------------------------------------------------------
DIAGRAMS[11] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q11" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444"/>
    </marker>
  </defs>
  <!-- 斜面三角 -->
  <polygon points="60,210 440,210 440,60" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
  <!-- 仰角 θ 弧線 -->
  <path d="M 120 210 A 60 60 0 0 0 110 185" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="130" y="195" font-family="'JetBrains Mono', sans-serif" font-size="14" font-weight="800" fill="#2563eb">θ = 37°</text>
  <!-- 斜面上滑物體 -->
  <g transform="translate(250, 135) rotate(-21.5)">
    <rect x="-18" y="-28" width="36" height="28" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2" rx="3"/>
    <!-- 速度箭頭 (向上) -->
    <line x1="25" y1="-14" x2="65" y2="-14" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow-q3)"/>
    <text x="45" y="-22" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="700" fill="#0284c7">v₀</text>
    <!-- 重力分量 a = g sin θ (向下) -->
    <line x1="-25" y1="-14" x2="-65" y2="-14" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-q11)"/>
    <text x="-65" y="-22" font-family="'Noto Sans TC', sans-serif" font-size="11" font-weight="700" fill="#ef4444">a = g sin θ</text>
  </g>
  <!-- 往返標註 -->
  <text x="250" y="50" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">往返 t = 8s ➔ 上滑 t₁ = 4s</text>
  <text x="250" y="75" font-family="'Noto Sans TC', sans-serif" font-size="12" fill="#0284c7">最大位移 s = 48 m = 1/2 a (4)² ➔ a = 6 m/s²</text>
  <text x="250" y="98" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="700" fill="#ef4444">6 = 10 sin θ ➔ sin θ = 0.6 ➔ θ = 37°</text>
</svg>`;

// -------------------------------------------------------------
// Q12: 【例題 12】相對運動與煞車安全距離問題
// -------------------------------------------------------------
DIAGRAMS[12] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q12" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 左半: 車輛物理示意 -->
  <line x1="30" y1="80" x2="510" y2="80" stroke="#cbd5e1" stroke-width="3"/>
  <!-- 甲車 (紅) -->
  <rect x="50" y="55" width="40" height="22" rx="4" fill="#ef4444"/>
  <text x="70" y="45" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="11" font-weight="800" fill="#ef4444">甲 (10 m/s)</text>
  <text x="70" y="100" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="10" fill="#ef4444">a = -2</text>
  <!-- 乙車 (藍) -->
  <rect x="180" y="55" width="40" height="22" rx="4" fill="#2563eb"/>
  <text x="200" y="45" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="11" font-weight="800" fill="#2563eb">乙 (4 m/s)</text>
  <text x="200" y="100" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="10" fill="#2563eb">等速</text>
  <!-- 初始車距 d -->
  <line x1="90" y1="65" x2="180" y2="65" stroke="#d97706" stroke-width="2" stroke-dasharray="3,3"/>
  <text x="135" y="60" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#d97706">d_min</text>
  <!-- 右半: 相對速度 v_rel - t 圖 (三角面積) -->
  <line x1="270" y1="210" x2="500" y2="210" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q12)"/>
  <text x="505" y="214" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#334155">t</text>
  <line x1="290" y1="230" x2="290" y2="120" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q12)"/>
  <text x="290" y="112" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="#334155">v_相</text>
  <!-- 面積三角形 (初速差 10 - 4 = 6, 耗時 3s) -->
  <polygon points="290,210 290,140 430,210" fill="rgba(245, 158, 11, 0.2)"/>
  <line x1="290" y1="140" x2="430" y2="210" stroke="#d97706" stroke-width="3"/>
  <text x="280" y="145" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#d97706">6</text>
  <text x="430" y="225" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#334155">3 s</text>
  <text x="350" y="180" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#d97706">接近距離 = 1/2 × 6 × 3 = 9 m</text>
  <text x="270" y="250" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="700" fill="#334155">避撞安全距離條件：d > 9 米</text>
</svg>`;

// -------------------------------------------------------------
// Q14: 【補充習題（一）第 1 題】太極圖位移與路徑長
// -------------------------------------------------------------
DIAGRAMS[14] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <circle cx="270" cy="130" r="90" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
  <line x1="270" y1="40" x2="270" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <path d="M 270 40 A 45 45 0 0 1 270 130" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <path d="M 270 130 A 45 45 0 0 0 270 220" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <path d="M 270 40 A 90 90 0 0 1 270 220" fill="none" stroke="#0284c7" stroke-width="3"/>
  <circle cx="270" cy="40" r="5" fill="#ef4444"/>
  <text x="270" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#ef4444">A (起點)</text>
  <circle cx="270" cy="220" r="5" fill="#ef4444"/>
  <text x="270" y="240" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#ef4444">C (終點)</text>
  <circle cx="270" cy="130" r="4" fill="#334155"/>
  <text x="255" y="134" text-anchor="end" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#334155">O</text>
  <text x="375" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#0284c7">B</text>
  <line x1="270" y1="130" x2="180" y2="130" stroke="#64748b" stroke-width="1.5"/>
  <text x="225" y="122" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">R</text>
  <text x="80" y="110" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="700" fill="#334155">軌跡：A ➔ B ➔ C ➔ O ➔ A ➔ D ➔ C</text>
  <text x="80" y="135" font-family="'Noto Sans TC', sans-serif" font-size="12" fill="#0284c7">總路徑長 = 3πR</text>
  <text x="80" y="155" font-family="'Noto Sans TC', sans-serif" font-size="12" fill="#ef4444">位移向量 AC = 2R (向下)</text>
</svg>`;

// -------------------------------------------------------------
// Q20: 【補充習題（一）第 7 題】x-t 圖分段綜合計算
// -------------------------------------------------------------
DIAGRAMS[20] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q20" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 輔助虛線 -->
  <line x1="60" y1="60" x2="280" y2="60" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="200" y1="60" x2="200" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="280" y1="60" x2="280" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="60" y1="210" x2="360" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="360" y1="130" x2="360" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <!-- 坐標軸 -->
  <line x1="40" y1="130" x2="470" y2="130" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q20)"/>
  <text x="480" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="60" y1="230" x2="60" y2="30" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q20)"/>
  <text x="60" y="22" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">x (m)</text>
  <!-- 刻度與標籤 -->
  <text x="52" y="142" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">0</text>
  <text x="52" y="105" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">5</text>
  <text x="52" y="65" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">15</text>
  <text x="52" y="215" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#ef4444">-15</text>
  <text x="200" y="148" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">5</text>
  <text x="280" y="148" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">7</text>
  <text x="360" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">9</text>
  <text x="400" y="148" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">10</text>
  <!-- 折線 -->
  <path d="M 60 102 L 200 60 L 280 60 L 360 210 L 400 130" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="60" cy="102" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="200" cy="60" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="280" cy="60" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="360" cy="210" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="400" cy="130" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
</svg>`;

// -------------------------------------------------------------
// Q21: 【補充習題（一）第 8 題】x-t 圖經過 A 點之速度比較
// -------------------------------------------------------------
DIAGRAMS[21] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q21" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <line x1="50" y1="210" x2="480" y2="210" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q21)"/>
  <text x="490" y="214" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t</text>
  <line x1="70" y1="230" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q21)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">x</text>
  <!-- 甲: 凹向上陡峭曲線 (紅) -->
  <path d="M 70 210 Q 210 200 270 120 T 360 40" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="370" y="45" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#dc2626">甲 (切線最陡)</text>
  <!-- 乙: 等速直線 (藍) -->
  <line x1="70" y1="210" x2="410" y2="60" stroke="#2563eb" stroke-width="3"/>
  <text x="420" y="65" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#2563eb">乙 (等速直線)</text>
  <!-- 丙: 凹向下平緩曲線 (綠) -->
  <path d="M 70 210 Q 150 120 270 120 T 430 95" fill="none" stroke="#16a34a" stroke-width="3"/>
  <text x="440" y="100" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#16a34a">丙 (切線最緩)</text>
  <!-- A 點交點 (270, 120) -->
  <circle cx="270" cy="120" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
  <text x="255" y="112" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="800" fill="#d97706">A</text>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="700" fill="#334155">在 A 點處切線斜率（瞬時速度）：v_甲 > v_乙 > v_丙</text>
</svg>`;

// -------------------------------------------------------------
// Q22: 【補充習題（一）第 9 題】x-t 圖曲線特性判讀
// -------------------------------------------------------------
DIAGRAMS[22] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q22" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <line x1="50" y1="210" x2="480" y2="210" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q22)"/>
  <text x="490" y="214" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t</text>
  <line x1="70" y1="230" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q22)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">x</text>
  <!-- 甲: 凹向上 (加速, a>0) -->
  <path d="M 70 210 Q 230 205 340 50" fill="none" stroke="#2563eb" stroke-width="3"/>
  <text x="350" y="55" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#2563eb">甲 (凹向上, a>0 與 v 同向)</text>
  <!-- 乙: 直線 (等速, a=0) -->
  <line x1="70" y1="210" x2="380" y2="90" stroke="#16a34a" stroke-width="3"/>
  <text x="390" y="95" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#16a34a">乙 (等速直線, a=0)</text>
  <!-- 丙: 凹向下 (減速, a<0) -->
  <path d="M 70 210 Q 150 125 400 135" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="410" y="140" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#dc2626">丙 (凹向下, a<0 與 v 反向)</text>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="700" fill="#334155">判讀法則：切線斜率為 v，凹向決定加速度 a 正負</text>
</svg>`;

// -------------------------------------------------------------
// Q23: 【補充習題（一）第 10 題】拋物線 x-t 圖判讀
// -------------------------------------------------------------
DIAGRAMS[23] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q23" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 坐標軸 -->
  <line x1="50" y1="210" x2="480" y2="210" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q23)"/>
  <text x="490" y="214" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="230" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q23)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">x (m)</text>
  <!-- 拋物線: x(t) = -(t-2)^2 + 3 -->
  <!-- 頂點 t=2, x=3 -> SVG (270, 70) -->
  <!-- t=1, x=2 -> SVG (180, 120); t=3, x=2 -> SVG (360, 120) -->
  <path d="M 120 180 Q 270 -40 420 180" fill="none" stroke="#2563eb" stroke-width="3.5"/>
  <!-- 水平割線 t=1~3s -->
  <line x1="180" y1="120" x2="360" y2="120" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="270" y="135" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="11" font-weight="700" fill="#047857">割線斜率 = 0 ➔ 1~3s 平均速度 = 0</text>
  <!-- 頂點水平切線 v=0 -->
  <line x1="210" y1="70" x2="330" y2="70" stroke="#ef4444" stroke-width="2"/>
  <circle cx="270" cy="70" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
  <text x="270" y="55" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#ef4444">頂點 (2, 3) ➔ v = 0 (折返點)</text>
  <!-- 投影點 -->
  <circle cx="180" cy="120" r="4" fill="#2563eb"/>
  <circle cx="360" cy="120" r="4" fill="#2563eb"/>
  <line x1="180" y1="120" x2="180" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="270" y1="70" x2="270" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="360" y1="120" x2="360" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="180" y="225" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" fill="#334155">1</text>
  <text x="270" y="225" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#ef4444">2</text>
  <text x="360" y="225" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" fill="#334155">3</text>
</svg>`;

// -------------------------------------------------------------
// Q24: 【補充習題（一）第 11 題】x-t 圖加速度正負判斷
// -------------------------------------------------------------
DIAGRAMS[24] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q24" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <line x1="50" y1="210" x2="480" y2="210" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q24)"/>
  <text x="490" y="214" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t</text>
  <line x1="70" y1="230" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q24)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">x</text>
  <!-- S 形分段曲線: A -> B -> C -> D -> E -> F -->
  <!-- A(90, 180), B(160, 100), C(240, 130), D(320, 70), E(400, 50), F(450, 70) -->
  <path d="M 90 180 C 130 110, 180 80, 230 120 C 270 150, 310 110, 350 70 C 390 40, 420 50, 450 80" fill="none" stroke="#2563eb" stroke-width="3"/>
  <!-- CD 區間加粗反白亮色 (凹向上 a > 0) -->
  <path d="M 230 120 C 270 150, 310 110, 350 70" fill="none" stroke="#16a34a" stroke-width="4.5"/>
  <!-- 節點標註 -->
  <circle cx="90" cy="180" r="4.5" fill="#334155"/><text x="90" y="200" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800">A</text>
  <circle cx="160" cy="95" r="4.5" fill="#334155"/><text x="160" y="85" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800">B</text>
  <circle cx="230" cy="120" r="5" fill="#16a34a"/><text x="220" y="140" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#16a34a">C</text>
  <circle cx="350" cy="70" r="5" fill="#16a34a"/><text x="350" y="55" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#16a34a">D</text>
  <circle cx="410" cy="50" r="4.5" fill="#334155"/><text x="410" y="40" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800">E</text>
  <text x="290" y="160" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#16a34a">★ CD 區間：曲線下凹（凹向上）➔ 加速度 a > 0</text>
</svg>`;

// -------------------------------------------------------------
// Q25: 【補充習題（一）第 12 題】v-t 圖轉折與位置判斷
// -------------------------------------------------------------
DIAGRAMS[25] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q25" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 面積著色: 0~2s 負面積 (負向移動 -5 m) -->
  <polygon points="70,140 70,210 210,140" fill="rgba(239, 68, 68, 0.18)"/>
  <text x="120" y="175" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="700" fill="#ef4444">-5 m</text>
  <!-- 面積著色: 2~4s 正面積 (正向移動 +5 m) -->
  <polygon points="210,140 350,70 350,140" fill="rgba(14, 165, 233, 0.18)"/>
  <text x="280" y="125" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="700" fill="#0284c7">+5 m</text>
  <!-- 坐標軸 -->
  <line x1="50" y1="140" x2="480" y2="140" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q25)"/>
  <text x="490" y="144" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="230" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q25)"/>
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
  <circle cx="70" cy="210" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="210" cy="140" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="350" cy="70" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
</svg>`;

// -------------------------------------------------------------
// Q27: 【補充習題（一）第 14 題】v-t 梯形全程位移與路徑長
// -------------------------------------------------------------
DIAGRAMS[27] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q27" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 正向梯形面積 (0~4s): 面積 = 20 -->
  <polygon points="60,150 110,70 190,70 240,150" fill="rgba(14, 165, 233, 0.2)"/>
  <text x="150" y="115" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#0284c7">+20 m (正向)</text>
  <!-- 負向梯形面積 (4~10s): 面積 = -12 -->
  <polygon points="240,150 290,210 390,210 440,150" fill="rgba(239, 68, 68, 0.2)"/>
  <text x="340" y="185" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#ef4444">-12 m (負向)</text>
  <!-- 坐標軸 -->
  <line x1="40" y1="150" x2="490" y2="150" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q27)"/>
  <text x="500" y="154" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="60" y1="240" x2="60" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q27)"/>
  <text x="60" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s)</text>
  <!-- 標籤 -->
  <text x="52" y="165" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="11" fill="#64748b">0</text>
  <text x="52" y="75" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#0284c7">8</text>
  <text x="52" y="215" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#ef4444">-4</text>
  <text x="240" y="142" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#ef4444">4 (折返)</text>
  <text x="440" y="168" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#334155">10</text>
  <!-- 運動線條 -->
  <path d="M 60 150 L 110 70 L 190 70 L 240 150 L 290 210 L 390 210 L 440 150" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">總位移 = 20 - 12 = 8 m ｜ 總路徑長 = 20 + 12 = 32 m</text>
</svg>`;

// -------------------------------------------------------------
// Q31: 【補充習題（一）第 18 題】v-t 切線斜率求加速度
// -------------------------------------------------------------
DIAGRAMS[31] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q31" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 坐標軸 -->
  <line x1="50" y1="200" x2="480" y2="200" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q31)"/>
  <text x="490" y="204" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="220" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q31)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s)</text>
  <!-- 凹向上曲線 v(t) -->
  <path d="M 70 200 Q 220 190 310 80 T 430 40" fill="none" stroke="#2563eb" stroke-width="3"/>
  <!-- P 點切線 (通過 (4,0) -> SVG (230,200) 與 P(6,10) -> SVG (310,80)) -->
  <line x1="200" y1="245" x2="350" y2="20" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="5,5"/>
  <!-- P 點投影與圓點 -->
  <circle cx="310" cy="80" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
  <text x="325" y="80" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" fill="#ef4444">P (6, 10)</text>
  <line x1="70" y1="80" x2="310" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="310" y1="80" x2="310" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="60" y="85" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">10</text>
  <text x="230" y="215" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">4</text>
  <text x="310" y="215" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">6</text>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">切線斜率 m = (10 - 0) / (6 - 4) = 5 m/s² ➔ 瞬時加速度 a = 5 m/s²</text>
</svg>`;

// -------------------------------------------------------------
// Q32: 【補充習題（一）第 19 題】原點出發 v-t 圖判讀
// -------------------------------------------------------------
DIAGRAMS[32] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q32" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 0~6s 正向三角形 (面積 = 30m) -->
  <polygon points="70,160 210,60 310,160" fill="rgba(14, 165, 233, 0.2)"/>
  <text x="200" y="120" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#0284c7">+30 m (正向最遠)</text>
  <!-- 6~8s 負向三角形 -->
  <polygon points="310,160 390,210 390,160" fill="rgba(239, 68, 68, 0.2)"/>
  <!-- 坐標軸 -->
  <line x1="50" y1="160" x2="480" y2="160" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q32)"/>
  <text x="490" y="164" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="230" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q32)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s)</text>
  <text x="60" y="65" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">10</text>
  <text x="310" y="148" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#ef4444">6 (折返)</text>
  <!-- 折線 -->
  <path d="M 70 160 L 210 60 L 310 160 L 390 210" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="310" cy="160" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">t = 6s 時速度由正轉負，正向位移達最大值 30 m</text>
</svg>`;

// -------------------------------------------------------------
// Q33: 【補充習題（一）第 20 題】三車 v-t 圖比較
// -------------------------------------------------------------
DIAGRAMS[33] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q33" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <line x1="50" y1="200" x2="480" y2="200" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q33)"/>
  <text x="490" y="204" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t</text>
  <line x1="70" y1="220" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q33)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v</text>
  <!-- 甲: 上凸 -->
  <path d="M 70 200 Q 150 70 330 70" fill="none" stroke="#2563eb" stroke-width="3"/>
  <text x="340" y="70" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#2563eb">甲 (先快後慢)</text>
  <!-- 乙: 直線 -->
  <line x1="70" y1="200" x2="330" y2="70" stroke="#16a34a" stroke-width="3"/>
  <text x="340" y="90" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#16a34a">乙 (等加速直線)</text>
  <!-- 丙: 下凹 -->
  <path d="M 70 200 Q 250 200 330 70" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="340" y="110" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#dc2626">丙 (先慢後快)</text>
  <!-- t1 投影 -->
  <line x1="330" y1="70" x2="330" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="330" y="215" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800">t₁</text>
  <circle cx="330" cy="70" r="5" fill="#334155"/>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="700" fill="#334155">甲、乙、丙三線在 t₁ 末同速；若面積相同，則平均速度相等</text>
</svg>`;

// -------------------------------------------------------------
// Q34: 【補充習題（一）第 21 題】兩車 v-t 圖相遇分析
// -------------------------------------------------------------
DIAGRAMS[34] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q34" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 兩線夾角面積 (t=10s 差距最大 100m) -->
  <polygon points="70,120 230,120 70,190" fill="rgba(245, 158, 11, 0.2)"/>
  <text x="140" y="150" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="700" fill="#d97706">Δx最大 = 100m</text>
  <line x1="50" y1="190" x2="480" y2="190" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q34)"/>
  <text x="490" y="194" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="210" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q34)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s)</text>
  <!-- 乙: 等速 20 m/s 水平線 (藍) -->
  <line x1="70" y1="120" x2="430" y2="120" stroke="#2563eb" stroke-width="3"/>
  <text x="440" y="125" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#2563eb">乙 (等速 20)</text>
  <!-- 甲: 靜止等加速 斜直線 (紅) -->
  <line x1="70" y1="190" x2="430" y2="50" stroke="#dc2626" stroke-width="3"/>
  <text x="440" y="55" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#dc2626">甲 (初速 0 加速)</text>
  <!-- 交叉點 t=10s 同速 -->
  <circle cx="230" cy="120" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
  <line x1="230" y1="120" x2="230" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="230" y="208" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800">10 (同速最遠)</text>
  <!-- t=20s 相遇 -->
  <line x1="390" y1="65" x2="390" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="390" y="208" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#16a34a">20 (面積相等相遇)</text>
</svg>`;

// -------------------------------------------------------------
// Q35: 【補充習題（一）第 22 題】a-t 圖求最大位移
// -------------------------------------------------------------
DIAGRAMS[35] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q35" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 負面積著色 -->
  <polygon points="70,130 70,180 340,180 340,130" fill="rgba(239, 68, 68, 0.18)"/>
  <text x="200" y="160" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#ef4444">a-t 面積 Δv = -10 m/s</text>
  <line x1="50" y1="130" x2="480" y2="130" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q35)"/>
  <text x="490" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="210" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q35)"/>
  <text x="70" y="30" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">a (m/s²)</text>
  <text x="340" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#ef4444">9 (v=0)</text>
  <line x1="70" y1="180" x2="340" y2="180" stroke="#2563eb" stroke-width="3"/>
  <text x="270" y="240" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">初速 v₀ = 10 m/s，9 秒末速度 v(9) = 10 - 10 = 0，此時離原點最遠！</text>
</svg>`;

// -------------------------------------------------------------
// Q36: 【補充習題（一）第 23 題】a-t 圖求 4 秒內位移
// -------------------------------------------------------------
DIAGRAMS[36] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q36" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 0~2s 加速度 a=2 -->
  <rect x="70" y="70" width="140" height="70" fill="rgba(14, 165, 233, 0.2)"/>
  <text x="140" y="110" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#0284c7">+4 m/s (Δv₁)</text>
  <!-- 2~4s 加速度 a=-0.5 -->
  <rect x="210" y="140" width="140" height="30" fill="rgba(239, 68, 68, 0.2)"/>
  <text x="280" y="160" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#ef4444">-1 m/s (Δv₂)</text>
  <line x1="50" y1="140" x2="480" y2="140" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q36)"/>
  <text x="490" y="144" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="210" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q36)"/>
  <text x="70" y="30" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">a (m/s²)</text>
  <text x="60" y="75" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">2</text>
  <text x="60" y="175" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#ef4444">-0.5</text>
  <text x="210" y="130" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">2</text>
  <text x="350" y="130" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">4</text>
  <line x1="70" y1="70" x2="210" y2="70" stroke="#2563eb" stroke-width="3"/>
  <line x1="210" y1="170" x2="350" y2="170" stroke="#2563eb" stroke-width="3"/>
  <text x="270" y="240" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">換算 v-t 圖：v(0)=4, v(2)=8, v(4)=7 ➔ 梯形面積得 4s 內位移</text>
</svg>`;

// -------------------------------------------------------------
// Q37: 【補充習題（一）第 24 題】原點靜止 a-t 圖求最遠座標
// -------------------------------------------------------------
DIAGRAMS[37] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q37" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <rect x="70" y="60" width="140" height="70" fill="rgba(14, 165, 233, 0.2)"/>
  <text x="140" y="100" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#0284c7">+12 m/s</text>
  <rect x="210" y="130" width="140" height="70" fill="rgba(239, 68, 68, 0.2)"/>
  <text x="280" y="170" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#ef4444">-12 m/s</text>
  <line x1="50" y1="130" x2="480" y2="130" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q37)"/>
  <text x="490" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="220" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q37)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">a (m/s²)</text>
  <text x="60" y="65" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">3</text>
  <text x="60" y="205" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#ef4444">-3</text>
  <text x="210" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">4</text>
  <text x="350" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#ef4444">8 (折返)</text>
  <line x1="70" y1="60" x2="210" y2="60" stroke="#2563eb" stroke-width="3"/>
  <line x1="210" y1="200" x2="350" y2="200" stroke="#2563eb" stroke-width="3"/>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">v-t 圖為底 8s、高 15m/s 之三角形 ➔ 最遠距離 = 1/2 × 8 × 15 = 60 m</text>
</svg>`;

// -------------------------------------------------------------
// Q38: 【補充習題（一）第 25 題】v-t 折線運動判讀
// -------------------------------------------------------------
DIAGRAMS[38] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q38" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <line x1="50" y1="130" x2="480" y2="130" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q38)"/>
  <text x="490" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="220" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q38)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s)</text>
  <!-- 波浪折線 (在 t=2, 4, 6 處穿過時間軸) -->
  <path d="M 70 70 L 150 70 L 210 190 L 290 190 L 350 70 L 410 70 L 450 130" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- 變號轉折點 (v=0) -->
  <circle cx="180" cy="130" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
  <text x="180" y="115" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#ef4444">t = 2s</text>
  <circle cx="320" cy="130" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
  <text x="320" y="148" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#ef4444">t = 4s</text>
  <circle cx="450" cy="130" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
  <text x="450" y="115" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#ef4444">t = 6s</text>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">在 t = 2, 4, 6 秒時速度變號（穿過 t 軸），運動方向改變！</text>
</svg>`;

// -------------------------------------------------------------
// Q44: 【補充習題（二）第 1 題】打點計時器求加速度
// -------------------------------------------------------------
DIAGRAMS[44] = `<svg viewBox="0 0 540 180" width="540" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <rect x="20" y="45" width="500" height="60" fill="#fefce8" stroke="#cbd5e1" stroke-width="1.5" rx="4"/>
  <text x="35" y="32" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#475569">打點計時器紙帶（各段位移差 Δx = a T²）</text>
  <!-- 點間隔漸增 -->
  <circle cx="50" cy="75" r="4" fill="#1e293b"/>
  <circle cx="110" cy="75" r="4" fill="#1e293b"/>
  <circle cx="190" cy="75" r="4" fill="#1e293b"/>
  <circle cx="290" cy="75" r="4" fill="#1e293b"/>
  <circle cx="410" cy="75" r="4" fill="#1e293b"/>
  <!-- 區間標註 -->
  <line x1="50" y1="115" x2="110" y2="115" stroke="#0284c7" stroke-width="2"/>
  <text x="80" y="132" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="800" fill="#0284c7">x₁=2cm</text>
  <line x1="110" y1="115" x2="190" y2="115" stroke="#0284c7" stroke-width="2"/>
  <text x="150" y="132" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="800" fill="#0284c7">x₂=3cm</text>
  <line x1="190" y1="115" x2="290" y2="115" stroke="#0284c7" stroke-width="2"/>
  <text x="240" y="132" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="800" fill="#0284c7">x₃=4cm</text>
  <line x1="290" y1="115" x2="410" y2="115" stroke="#0284c7" stroke-width="2"/>
  <text x="350" y="132" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="800" fill="#0284c7">x₄=5cm</text>
  <text x="270" y="162" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="700" fill="#334155">位移公差 Δx = 1.0 cm = a T² ➔ 加速度 a = Δx / T²</text>
</svg>`;

// -------------------------------------------------------------
// Q112: 【歷屆學測第 3 題】100學測：沿 x 軸運動位移與路徑長
// -------------------------------------------------------------
DIAGRAMS[112] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q112" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 0~2s 正面積 -->
  <polygon points="70,140 70,70 230,140" fill="rgba(14, 165, 233, 0.2)"/>
  <text x="130" y="115" font-family="'JetBrains Mono', sans-serif" font-size="12" font-weight="800" fill="#0284c7">+位移 (向正)</text>
  <!-- 2~3s 負面積 (折返) -->
  <polygon points="230,140 310,210 310,140" fill="rgba(239, 68, 68, 0.2)"/>
  <text x="270" y="165" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="800" fill="#ef4444">-位移 (向負)</text>
  <line x1="50" y1="140" x2="480" y2="140" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q112)"/>
  <text x="490" y="144" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="230" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q112)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s)</text>
  <text x="230" y="130" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#ef4444">2 (折返點)</text>
  <text x="310" y="130" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">3</text>
  <line x1="70" y1="70" x2="310" y2="210" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="230" cy="140" r="5" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">0~3s 發生折返 ➔ 位移量值 |Δx| &lt; 總路徑長 Δs</text>
</svg>`;

// -------------------------------------------------------------
// Q113: 【歷屆學測第 4 題】101學測：v-t 圖求 6 秒內行程
// -------------------------------------------------------------
DIAGRAMS[113] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q113" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <polygon points="70,190 170,80 330,80 430,190" fill="rgba(14, 165, 233, 0.18)"/>
  <line x1="70" y1="80" x2="330" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="170" y1="80" x2="170" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="330" y1="80" x2="330" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="50" y1="190" x2="480" y2="190" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q113)"/>
  <text x="490" y="194" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="220" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q113)"/>
  <text x="70" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s)</text>
  <text x="58" y="205" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b">0</text>
  <text x="60" y="84" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#0284c7">4</text>
  <text x="170" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">2</text>
  <text x="330" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">4</text>
  <text x="430" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#334155">6</text>
  <path d="M 70 190 L 170 80 L 330 80 L 430 190" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="70" cy="190" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="170" cy="80" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="330" cy="80" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <circle cx="430" cy="190" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2"/>
  <text x="250" y="140" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#0284c7">梯形面積 = 1/2 × (2 + 6) × 4 = 16 m</text>
</svg>`;

// -------------------------------------------------------------
// Q114: 【歷屆學測第 5 題】101學測：週期性運動 x-t 圖判讀
// -------------------------------------------------------------
DIAGRAMS[114] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q114" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <line x1="50" y1="130" x2="480" y2="130" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q114)"/>
  <text x="490" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="230" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q114)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">x (m)</text>
  <!-- 週期波 (三角波/梯形波) 振幅 ±2 -->
  <line x1="70" y1="70" x2="450" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="70" y1="190" x2="450" y2="190" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="60" y="75" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#0284c7">+2</text>
  <text x="60" y="195" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#ef4444">-2</text>
  <!-- 週期性軌跡 -->
  <path d="M 70 130 L 120 70 L 180 70 L 240 190 L 300 190 L 360 70 L 420 70" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">一完整週期內位移為 0（平均速度=0）；斜線段斜率固定（等速）</text>
</svg>`;

// -------------------------------------------------------------
// Q115: 【歷屆學測第 6 題】101學測：甲乙丙三圖加速度比較
// -------------------------------------------------------------
DIAGRAMS[115] = `<svg viewBox="0 0 540 220" width="540" height="220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <!-- 甲: x-t 直線 (a=0) -->
  <g transform="translate(20, 20)">
    <rect width="150" height="150" fill="#f8fafc" stroke="#cbd5e1" rx="6"/>
    <text x="75" y="25" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#334155">甲：x - t 圖</text>
    <line x1="20" y1="120" x2="135" y2="120" stroke="#334155" stroke-width="1.5"/>
    <line x1="30" y1="130" x2="30" y2="35" stroke="#334155" stroke-width="1.5"/>
    <line x1="30" y1="120" x2="120" y2="50" stroke="#2563eb" stroke-width="2.5"/>
    <text x="75" y="142" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#0284c7">a_甲 = 0</text>
  </g>
  <!-- 乙: v-t 直線 (a=0.2) -->
  <g transform="translate(195, 20)">
    <rect width="150" height="150" fill="#f8fafc" stroke="#cbd5e1" rx="6"/>
    <text x="75" y="25" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#334155">乙：v - t 圖</text>
    <line x1="20" y1="120" x2="135" y2="120" stroke="#334155" stroke-width="1.5"/>
    <line x1="30" y1="130" x2="30" y2="35" stroke="#334155" stroke-width="1.5"/>
    <line x1="30" y1="100" x2="120" y2="60" stroke="#16a34a" stroke-width="2.5"/>
    <text x="75" y="142" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#16a34a">a_乙 = 0.2 m/s²</text>
  </g>
  <!-- 丙: a-t 水平線 (a=0.3) -->
  <g transform="translate(370, 20)">
    <rect width="150" height="150" fill="#f8fafc" stroke="#cbd5e1" rx="6"/>
    <text x="75" y="25" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#334155">丙：a - t 圖</text>
    <line x1="20" y1="120" x2="135" y2="120" stroke="#334155" stroke-width="1.5"/>
    <line x1="30" y1="130" x2="30" y2="35" stroke="#334155" stroke-width="1.5"/>
    <line x1="30" y1="65" x2="120" y2="65" stroke="#ef4444" stroke-width="2.5"/>
    <text x="75" y="142" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" fill="#ef4444">a_丙 = 0.3 m/s²</text>
  </g>
  <text x="270" y="200" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">加速度量值比較：a_丙 (0.3) > a_乙 (0.2) > a_甲 (0)</text>
</svg>`;

// -------------------------------------------------------------
// Q116: 【歷屆學測第 7 題】103學測：電梯下降 v-t 圖分析
// -------------------------------------------------------------
DIAGRAMS[116] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q116" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 下降梯形面積 = 12m -->
  <polygon points="70,70 140,170 340,170 430,70" fill="rgba(14, 165, 233, 0.2)"/>
  <line x1="50" y1="70" x2="480" y2="70" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q116)"/>
  <text x="490" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="50" x2="70" y2="220" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q116)"/>
  <text x="70" y="235" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v (m/s 下降)</text>
  <line x1="70" y1="170" x2="340" y2="170" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="60" y="175" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800" fill="#0284c7">2.0</text>
  <text x="430" y="60" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800">10 s</text>
  <path d="M 70 70 L 140 170 L 340 170 L 430 70" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="250" y="125" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#0284c7">面積 = 1/2 × (10 + t₀) × 2.0 = 12 m</text>
  <text x="250" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">解得等速時間 t₀ = 2.0 s（圖中標記對應為 3.0）</text>
</svg>`;

// -------------------------------------------------------------
// Q119: 【歷屆學測第 10 題】105學測：汽車行駛 a-t 圖判讀
// -------------------------------------------------------------
DIAGRAMS[119] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q119" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 0~20s a=0.5 (面積 +10 m/s) -->
  <rect x="70" y="60" width="90" height="70" fill="rgba(14, 165, 233, 0.2)"/>
  <text x="115" y="95" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="800" fill="#0284c7">+10 m/s</text>
  <!-- 60~85s a=-0.4 (面積 -10 m/s) -->
  <rect x="250" y="130" width="112" height="55" fill="rgba(239, 68, 68, 0.2)"/>
  <text x="306" y="165" text-anchor="middle" font-family="'JetBrains Mono', sans-serif" font-size="11" font-weight="800" fill="#ef4444">-10 m/s</text>
  <line x1="50" y1="130" x2="480" y2="130" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q119)"/>
  <text x="490" y="134" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t (s)</text>
  <line x1="70" y1="220" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q119)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">a (m/s²)</text>
  <text x="60" y="65" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#0284c7">0.5</text>
  <text x="60" y="190" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#ef4444">-0.4</text>
  <text x="160" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11">20</text>
  <text x="250" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11">60</text>
  <text x="362" y="120" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11">85</text>
  <!-- a-t 階梯 -->
  <line x1="70" y1="60" x2="160" y2="60" stroke="#2563eb" stroke-width="3"/>
  <line x1="160" y1="130" x2="250" y2="130" stroke="#2563eb" stroke-width="3"/>
  <line x1="250" y1="185" x2="362" y2="185" stroke="#2563eb" stroke-width="3"/>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">85s 內 v-t 梯形上底 40s、下底 85s、高 10m/s ➔ 距離 = 625 m</text>
</svg>`;

// -------------------------------------------------------------
// Q124: 【歷屆指考/分科第 2 題】105指考：火車 v-t 梯形全程平均速度
// -------------------------------------------------------------
DIAGRAMS[124] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q124" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <polygon points="70,190 160,70 340,70 430,190" fill="rgba(14, 165, 233, 0.2)"/>
  <line x1="70" y1="70" x2="340" y2="70" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="160" y1="70" x2="160" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="340" y1="70" x2="340" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="50" y1="190" x2="480" y2="190" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q124)"/>
  <text x="490" y="194" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t</text>
  <line x1="70" y1="220" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q124)"/>
  <text x="70" y="30" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">v</text>
  <text x="60" y="75" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" fill="#0284c7">V</text>
  <text x="160" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">T/4</text>
  <text x="340" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700">3T/4</text>
  <text x="430" y="210" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="800">T</text>
  <path d="M 70 190 L 160 70 L 340 70 L 430 190" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="250" y="130" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#0284c7">梯形面積 Δx = 1/2 × (T/2 + T) × V = 5/8 VT</text>
  <text x="250" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">全程平均速度 v̄ = Δx / T = 5/8 V</text>
</svg>`;

// -------------------------------------------------------------
// Q125: 【歷屆指考/分科第 3 題】106指考：兩車 v-t 圖相遇與距離
// -------------------------------------------------------------
DIAGRAMS[125] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q125" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 兩線包夾面積 (兩車距離差) -->
  <polygon points="70,90 270,140 70,190" fill="rgba(245, 158, 11, 0.2)"/>
  <text x="140" y="145" font-family="'Noto Sans TC', sans-serif" font-size="11" font-weight="700" fill="#d97706">相對距離最大 (t = t₀)</text>
  <line x1="50" y1="190" x2="480" y2="190" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q125)"/>
  <text x="490" y="194" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">t</text>
  <line x1="70" y1="210" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q125)"/>
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
</svg>`;

// -------------------------------------------------------------
// Q126: 【歷屆指考/分科第 4 題】108指考：汽車過路口加速度區間
// -------------------------------------------------------------
DIAGRAMS[126] = `<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
  <defs>
    <marker id="arrow-q126" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- 等速區間背景加亮 (200~300m) -->
  <rect x="230" y="45" width="100" height="150" fill="rgba(34, 197, 94, 0.12)"/>
  <text x="280" y="105" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="12" font-weight="800" fill="#16a34a">a = 0 (等速度)</text>
  <line x1="50" y1="140" x2="480" y2="140" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q126)"/>
  <text x="490" y="144" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">x (m)</text>
  <line x1="70" y1="220" x2="70" y2="35" stroke="#334155" stroke-width="2" marker-end="url(#arrow-q126)"/>
  <text x="70" y="25" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#334155">a (m/s²)</text>
  <text x="130" y="160" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11">100</text>
  <text x="230" y="160" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">200</text>
  <text x="330" y="160" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">300</text>
  <text x="430" y="160" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="11">400</text>
  <!-- a-x 曲線 -->
  <path d="M 70 80 L 130 80 L 230 140 L 330 140 L 430 200" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linecap="round"/>
  <text x="270" y="245" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-size="13" font-weight="800" fill="#334155">在 200 m &lt; x &lt; 300 m 區間，加速度 a = 0，汽車作等速度運動</text>
</svg>`;

console.log(`Ready to inject ${Object.keys(DIAGRAMS).length} diagrams!`);

// -------------------------------------------------------------
// 執行更新 1: data.js (以 JS Object 方式直接賦值，完全避免正規表示式跨題匹配問題)
// -------------------------------------------------------------
const dataPath = 'subjects/physics/02_直線運動/data.js';
let dataCode = fs.readFileSync(dataPath, 'utf8');

const questions = eval(dataCode.replace(/const LINEAR_MOTION_QUESTIONS =/, ''));

// 清除先前可能錯誤的 diagramSvg 並正確設定
questions.forEach(q => {
  if (DIAGRAMS[q.id]) {
    q.diagramSvg = DIAGRAMS[q.id];
    console.log(`Set diagramSvg for Q${q.id}: ${q.title}`);
  } else {
    delete q.diagramSvg;
  }
});

const updatedDataCode = '// 直線運動 1~130 題全集題庫資料集 (例題、補充習題與歷屆大考試題)\nconst LINEAR_MOTION_QUESTIONS = ' + JSON.stringify(questions, null, 2) + ';\n';
fs.writeFileSync(dataPath, updatedDataCode, 'utf8');
console.log('Finished safely updating data.js with JSON!');


// -------------------------------------------------------------
// 執行更新 2: linear-motion-questions-v2.md
// -------------------------------------------------------------
const mdPath = 'subjects/physics/02_直線運動/linear-motion-questions-v2.md';
let mdText = fs.readFileSync(mdPath, 'utf8');


// 清理可能重複或誤放的 Q27 svg (如果包含 Q14 的太極圖)
if (mdText.includes('【補充習題（一）第 14 題】') && mdText.includes('大圓 R = 90')) {
  mdText = mdText.replace(/### 【補充習題（一）第 14 題】[\s\S]*?(<div align="center"[\s\S]*?<\/div>)/, (match, div) => {
    return match.replace(div, '');
  });
  console.log('Cleaned misplaced svg from Q27 in markdown.');
}

Object.keys(DIAGRAMS).forEach(id => {
  const numId = parseInt(id);
  const svg = DIAGRAMS[numId];
  const qObj = questions.find(q => q.id === numId);
  if (!qObj) return;

  const targetTitle = qObj.title.trim();
  const titleIdx = mdText.indexOf('### ' + targetTitle);
  if (titleIdx === -1) {
    console.warn(`Title not found in markdown: ${targetTitle}`);
    return;
  }

  // 找到該題下的 Prompt 標記
  const nextSectionIdx = mdText.indexOf('\n---', titleIdx);
  const questionChunk = mdText.slice(titleIdx, nextSectionIdx !== -1 ? nextSectionIdx : titleIdx + 2000);
  
  const promptMatch = questionChunk.match(/>\s*\*Prompt\*:[^\n\r]+/);
  if (promptMatch) {
    const promptFull = promptMatch[0];
    const afterPromptPos = questionChunk.indexOf(promptFull) + promptFull.length;
    const followingText = questionChunk.slice(afterPromptPos, afterPromptPos + 200);

    const wrappedSvg = `\n\n<div align="center" style="margin: 1.25rem 0;">\n${svg}\n</div>`;
    
    // 如果後方已有 <div align="center" style="margin: 1.25rem 0;">\n<svg
    if (followingText.includes('<svg')) {
      // 替換現有的 svg 區塊
      const oldSvgBlockMatch = questionChunk.match(/<div align="center" style="margin: 1.25rem 0;">\s*<svg[\s\S]*?<\/svg>\s*<\/div>/);
      if (oldSvgBlockMatch) {
        const updatedChunk = questionChunk.replace(oldSvgBlockMatch[0], wrappedSvg.trim());
        mdText = mdText.slice(0, titleIdx) + updatedChunk + mdText.slice(titleIdx + questionChunk.length);
        console.log(`Replaced SVG in markdown for Q${numId}: ${targetTitle}`);
      }
    } else {
      // 插入新的 svg 區塊
      const updatedChunk = questionChunk.slice(0, afterPromptPos) + wrappedSvg + questionChunk.slice(afterPromptPos);
      mdText = mdText.slice(0, titleIdx) + updatedChunk + mdText.slice(titleIdx + questionChunk.length);
      console.log(`Inserted SVG in markdown for Q${numId}: ${targetTitle}`);
    }
  }
});

fs.writeFileSync(mdPath, mdText, 'utf8');
console.log('Finished updating linear-motion-questions-v2.md!');
