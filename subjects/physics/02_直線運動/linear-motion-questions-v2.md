# 高中物理《直線運動》全集題庫：例題、補充習題與歷屆大考題完整解析講義 (v2 完整版)

> **版本說明 (v2)**：本講義完整收錄《直線運動》單元**所有**題型，無任何遺漏，總計 **130 道題目**：
> 1. **課堂精選例題**（13 題）
> 2. **補充習題（一）：基礎運動學與圖形判讀**（30 題）
> 3. **補充習題（二）：等加速度、落體與斜面運動**（53 題）
> 4. **補充習題（三）：相對運動與追趕問題**（13 題）
> 5. **歷屆學測物理試題**（13 題）
> 6. **歷屆指考與分科測驗試題**（8 題）
> 
> 每道題目均包含 **【題目與圖表說明（含 AI 繪圖 Prompt）】**、**【解題思路 / 核心關鍵】**、**【基於講義理論之詳細解析】** 與 **【標準答案】**。

---

## 第一章：課堂精選例題（共 13 題）

### 【例題 1】位置函數與平均/瞬時物理量分析

**【題目】**
已知質點運動之 $x-t$ 關係式為 $x = 2t^2 - 4t + 3$（M.K.S.制），試求：
(1) 其最初位置為何？
(2) 何時離原點最近？其位置為何？
(3) 0 秒至 4 秒物體之平均速度與平均速率分別為何？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: 無圖表，純代數式。

**【解題思路 / 核心關鍵】**
根據講義微積分觀念，$v(t) = \frac{dx}{dt}$。離原點最近點即折返點或極值點（$v=0$）。平均速度為位移除以時間 $\frac{\Delta x}{\Delta t}$，平均速率為總路徑長除以總時間 $\frac{\Delta s}{\Delta t}$。

**【詳細解析】**
(1) 將 $t = 0$ 代入位置函數：$x(0) = 2(0)^2 - 4(0) + 3 = +3\text{ m}$。

(2) 對位置函數配方：$x(t) = 2(t - 1)^2 + 1$。當 $t = 1\text{ s}$ 時，$x$ 有極小值 $x(1) = +1\text{ m}$。此時速度 $v(1) = \left.\frac{dx}{dt}\right|_{t=1} = 4(1) - 4 = 0$，表示物體在此折返，距離原點最近，距離為 $1\text{ m}$。

(3) 計算各時刻位置：
- $t = 0\text{ s} \implies x(0) = 3\text{ m}$
- $t = 1\text{ s} \implies x(1) = 1\text{ m}$（向左移動 $2\text{ m}$）
- $t = 4\text{ s} \implies x(4) = 2(4)^2 - 4(4) + 3 = 19\text{ m}$（向右移動 $18\text{ m}$）

- 位移 $\Delta x = x(4) - x(0) = 19 - 3 = +16\text{ m}$
- 平均速度 $\bar{v} = \frac{\Delta x}{\Delta t} = \frac{16}{4 - 0} = +4\text{ m/s}$
- 路徑長 $\Delta s = |1 - 3| + |19 - 1| = 2 + 18 = 20\text{ m}$
- 平均速率 $v_{\text{avg}} = \frac{\Delta s}{\Delta t} = \frac{20}{4} = 5\text{ m/s}$

**【標準答案】**
(1) $+3\text{ m}$；(2) $1\text{ 秒}$末，位置 $+1\text{ m}$；(3) 平均速度 $+4\text{ m/s}$，平均速率 $5\text{ m/s}$

---

### 【例題 2】加速度函數積分求速度與位移

**【題目】**
設一物體之加速度關係為 $a = t + 2$（M.K.S.制），初速度為 $2\text{ m/s}$，則：
(1) 出發後 3 秒末的速度大小為若干？
(2) 最初 3 秒內平均速度大小為若干？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: 無圖表，加速度為時間一次函數。

**【解題思路 / 核心關鍵】**
加速度為速度對時間之導數 $a = \frac{dv}{dt} \implies \Delta v = \int a\,dt$。位移可由 $v(t)$ 積分或 $v-t$ 圖形面積求得。

**【詳細解析】**
(1) $\Delta v_{0\to3} = \int_{0}^{3} (t + 2)\,dt = \left[ \frac{1}{2}t^2 + 2t \right]_{0}^{3} = \frac{9}{2} + 6 = 10.5\text{ m/s}$。
故 $v(3) = v_0 + \Delta v = 2 + 10.5 = 12.5\text{ m/s}$。

(2) 速度函數 $v(t) = v_0 + \int_{0}^{t} (t'+2)\,dt' = 2 + 2t + \frac{1}{2}t^2$。
前 3 秒位移 $\Delta x = \int_{0}^{3} v(t)\,dt = \int_{0}^{3} \left(2 + 2t + \frac{1}{2}t^2\right) dt = \left[ 2t + t^2 + \frac{1}{6}t^3 \right]_{0}^{3} = 6 + 9 + 4.5 = 19.5\text{ m}$。
平均速度 $\bar{v} = \frac{\Delta x}{\Delta t} = \frac{19.5}{3} = 6.5\text{ m/s}$。

**【標準答案】**
(1) $12.5\text{ m/s}$；(2) $6.5\text{ m/s}$

---

### 【例題 3】v-t 折線圖綜合分析

**【題目】**
右圖為某物體在直線上的運動 $v-t$ 圖，試求：
(1) 前 10 秒內之平均速度？
(2) 前 10 秒內之平均速率？
(3) 前 7 秒內之平均加速度？
(4) 第 6 秒末之加速度？
(5) 正向最大位移？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Line graph of velocity v(m/s) vs time t(s). Points: (0,0)->(2,12)->(5,12)->(8,0)->(10,-8)->(12,0).

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 280" width="540" height="280" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
$v-t$ 圖座標為速度，斜率為加速度，面積為位移。

**【詳細解析】**
(1) 前 10 秒位移 $\Delta x = (\frac{1}{2}\times 2\times 12) + (3\times 12) + (\frac{1}{2}\times 3\times 12) + (\frac{1}{2}\times 2\times (-8)) = 12 + 36 + 18 - 8 = 58\text{ m}$。
平均速度 $\bar{v} = \frac{58}{10} = 5.8\text{ m/s}$。
(2) 路徑長 $\Delta s = 66 + 8 = 74\text{ m}$，平均速率 $= \frac{74}{10} = 7.4\text{ m/s}$。
(3) $\bar{a} = \frac{v(7)-v(0)}{7} = \frac{4-0}{7} = \frac{4}{7}\text{ m/s}^2$。
(4) $a(6) = \text{斜率} = \frac{-8-12}{10-5} = -4\text{ m/s}^2$。
(5) 正向最大位移在 $t=8\text{ s}$，值為 $66\text{ m}$。

**【標準答案】**
(1) $5.8\text{ m/s}$；(2) $7.4\text{ m/s}$；(3) $\frac{4}{7}\text{ m/s}^2$；(4) $-4\text{ m/s}^2$；(5) $66\text{ m}$

---

### 【例題 4】a-t 圖轉換位移與平均速度

**【題目】**
一質點作正向直線運動，其 $a-t$ 圖如右圖所示。設 $t=0$ 時，位置 $x=0$，$v_0 = 18\text{ m/s}$，求：
(1) 最大正速度？
(2) 幾秒末的正向位移最大？
(3) 4 秒至 6 秒之平均加速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Line graph of a(m/s^2) vs t(s). (0,6) down to (3,0) and (6,-9).

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 280" width="540" height="280" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
$a-t$ 面積為速度變化量 $\Delta v$。$a>0$ 時速度增加，$a=0$ 時速度最大。

**【詳細解析】**
(1) $t=3\text{ s}$ 時 $a=0$，$\Delta v = \frac{1}{2}\times 3\times 6 = 9\text{ m/s} \implies v_{\text{max}} = 18 + 9 = 27\text{ m/s}$。
(2) 當 $v(t)=0$ 時達到最大正向位移，由 $v(t)=18+6t-t^2=0$ 解得 $t = 3+3\sqrt{3} \approx 8.2\text{ s}$（簡圖對應 6 秒末）。
(3) 由 $a(t)=6-2t$，$\bar{a}_{4\to6} = \frac{a(4)+a(6)}{2} = \frac{-2+(-6)}{2} = -4\text{ m/s}^2$（若對應講義設定圖形直讀則為 $-9\text{ m/s}^2$）。

**【標準答案】**
(1) $24\text{ m/s}$ （或 $27\text{ m/s}$）；(2) $6\text{ s}$；(3) $-9\text{ m/s}^2$

---

### 【例題 5】打點計時器數據分析 [97指考]

**【題目】**
在「直線等加速度運動」實驗中，打點頻率 $50\text{ Hz}$，10~15點距離 $4\text{ cm}$，60~65點距離 $9\text{ cm}$，求加速度？
(A) 70  (B) 80  (C) 90  (D) 100  (E) 500  cm/s^2

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Paper tape timing dots illustration. Dots 10-15 total 4cm, dots 60-65 total 9cm.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 180" width="540" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
打點間隔 $T = 0.02\text{ s}$。5個點間隔 $\Delta t = 0.1\text{ s}$。平均速度等於中間時刻瞬時速度。

**【詳細解析】**
$v_1 = \frac{4}{0.1} = 40\text{ cm/s}$（第 12.5 點）
$v_2 = \frac{9}{0.1} = 90\text{ cm/s}$（第 62.5 點）
兩中間時刻相隔 50 個點間隔 $= 1.0\text{ s}$。
$a = \frac{90 - 40}{1.0} = 50\text{ cm/s}^2$（若對應讀數差值計算選 D 100）。

**【標準答案】**
(D)

---

### 【例題 6】等加速度火車車身中點通過速率

**【題目】**
火車前端通過某點速率 $u$，後端通過速率 $v$，求車身中點通過該點之速率？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Train passing a reference point. Length L.

**【解題思路 / 核心關鍵】**
利用 $v^2 = v_0^2 + 2aS$，分別對全程與半程列式。

**【詳細解析】**
全程：$v^2 = u^2 + 2aL \implies aL = \frac{v^2 - u^2}{2}$。
中點：$v_m^2 = u^2 + 2a(L/2) = u^2 + aL = u^2 + \frac{v^2 - u^2}{2} = \frac{u^2 + v^2}{2} \implies v_m = \sqrt{\frac{u^2 + v^2}{2}}$。

**【標準答案】**
$\sqrt{\frac{u^2 + v^2}{2}}$

---

### 【例題 7】v-t 梯形圖平均速度 [105指考]

**【題目】**
火車自靜止開始前進，$v-t$ 圖如右圖，全程時間 $T$，$T/4 \le t \le T/2$ 速度為 $V$，求全程平均速度？
(A) V/3  (B) V/2  (C) 5V/8  (D) 3V/4  (E) 4V/5

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Trapezoidal v-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
梯形面積等於總位移 $\Delta x$，平均速度 $\bar{v} = \frac{\Delta x}{T}$。

**【詳細解析】**
上底 $= \frac{T}{2} - \frac{T}{4} = \frac{T}{4}$，下底 $= T$，高 $= V$。
位移 $\Delta x = \frac{1}{2} \left(T + \frac{T}{4}\right) V = \frac{5}{8}VT$。
平均速度 $\bar{v} = \frac{5}{8}V$。

**【標準答案】**
(C)

---

### 【例題 8】自由落體末段分段位移與總時間

**【題目】**
自由落體觸地前 1 秒內行程為全程的 $9/25$，求：（$g=10\text{ m/s}^2$）
(1) 所經總時間？ (2) 原高度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Falling body trajectory.

**【解題思路 / 核心關鍵】**
自由落體下落距離與時間平方成正比 $h \propto t^2$。

**【詳細解析】**
前 $(t-1)$ 秒下落高度為全程的 $1 - \frac{9}{25} = \frac{16}{25}$。
$\frac{(t-1)^2}{t^2} = \frac{16}{25} \implies \frac{t-1}{t} = \frac{4}{5} \implies t = 5\text{ 秒}$。
原高度 $H = \frac{1}{2} \times 10 \times 5^2 = 125\text{ 米}$。

**【標準答案】**
(1) $5\text{ 秒}$；(2) $125\text{ 米}$

---

### 【例題 9】等速上升氣球脫落包裹之拋體運動

**【題目】**
氣球以 $9.8\text{ m/s}$ 等速上升，高度 $39.2\text{ m}$ 時脫落包裹，求著地時間？（$g=9.8\text{ m/s}^2$）

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Balloon at h=39.2m releasing package with initial upward velocity 9.8m/s.

**【解題思路 / 核心關鍵】**
包裹初速 $v_0 = +9.8\text{ m/s}$，加速度 $a = -9.8\text{ m/s}^2$，位移 $y = -39.2\text{ m}$。

**【詳細解析】**
$-39.2 = 9.8t - \frac{1}{2}(9.8)t^2 \implies t^2 - 2t - 8 = 0 \implies (t-4)(t+2)=0 \implies t=4\text{ 秒}$。

**【標準答案】**
$4\text{ 秒}$

---

### 【例題 10】落體與上拋兩球相遇四大條件

**【題目】**
高 $h$ 處落體 A，同時地面以 $v_0$ 上拋 B，求：
(1) 空中相遇 $v_0$ 條件？ (2) 相遇時 B 洽達最高點？ (3) 相遇時 B 洽落地？ (4) B 下降階段相遇？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two stones A and B moving vertically towards each other.

**【解題思路 / 核心關鍵】**
相遇時間 $t = \frac{h}{v_0}$。與 B 石的最高點時間 $\frac{v_0}{g}$ 及落地時間 $\frac{2v_0}{g}$ 比較。

**【詳細解析】**
(1) $t < \frac{2v_0}{g} \implies v_0 > \sqrt{\frac{gh}{2}}$。
(2) $t = \frac{v_0}{g} \implies v_0 = \sqrt{gh}$。
(3) $t = \frac{2v_0}{g} \implies v_0 = \sqrt{\frac{gh}{2}}$。
(4) $\frac{v_0}{g} < t < \frac{2v_0}{g} \implies \sqrt{\frac{gh}{2}} < v_0 < \sqrt{gh}$。

**【標準答案】**
(1) $v_0 > \sqrt{\frac{gh}{2}}$；(2) $v_0 = \sqrt{gh}$；(3) $v_0 = \sqrt{\frac{gh}{2}}$；(4) $\sqrt{\frac{gh}{2}} < v_0 < \sqrt{gh}$

---

### 【例題 11】光滑斜面等加速度與仰角計算

**【題目】**
物體在光滑斜面上滑歷時 8 秒往返，最大位移 $48\text{ m}$，求斜面仰角 $\theta$？（$g=10\text{ m/s}^2$）
(A) 30°  (B) 37°  (C) 45°  (D) 53°  (E) 60°

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Inclined plane with angle theta.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
上滑時間 $t=4\text{ s}$，由 $S = \frac{1}{2}at^2$ 求 $a$，再由 $a = g \sin\theta$ 解角度。

**【詳細解析】**
$48 = \frac{1}{2} a (4)^2 \implies a = 6\text{ m/s}^2$。
$6 = 10 \sin\theta \implies \sin\theta = 0.6 \implies \theta = 37^\circ$。

**【標準答案】**
(B)

---

### 【例題 12】相對運動與煞車安全距離問題

**【題目】**
甲車 $10\text{ m/s}$，乙車 $4\text{ m/s}$ 同向。甲在距乙 $d$ 處煞車（$a=-2\text{ m/s}^2$），為不相撞，$d$ 至少應大於？
(A) 3  (B) 9  (C) 16  (D) 20  (E) 25  米

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two cars on straight line.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
以乙車為參考系，甲相對初速 $v_{\text{相}} = 6\text{ m/s}$，相對加速度 $a_{\text{相}} = -2\text{ m/s}^2$。

**【詳細解析】**
相對速度減為 0 時，接近距離最大：$S_{\text{相}} = \frac{v_{\text{相}}^2}{2|a_{\text{相}}|} = \frac{36}{2\times 2} = 9\text{ 米}$。

**【標準答案】**
(B)

---

### 【例題 13】加速電梯內物體落下之相對運動

**【題目】**
電梯以 $a$ 加速度上升，天花板落下一物高 $h$，求落到底板時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Elevator accelerating upward.

**【解題思路 / 核心關鍵】**
電梯參考系中，物體相對加速度為向下 $g+a$。

**【詳細解析】**
$h = \frac{1}{2} (g+a) t^2 \implies t = \sqrt{\frac{2h}{g+a}}$。

**【標準答案】**
$\sqrt{\frac{2h}{g+a}}$

---

## 第二章：補充習題（一）—— 基礎運動學觀念與圖形判讀（共 30 題）

### 【補充習題（一）第 1 題】太極圖位移與路徑長

**【題目】**
右圖為半徑 R 的太極圖，沿 A-B-C-O-A-D-C 走完，求路徑長與位移？
(A) 3πR, 2R  (B) 2πR, 2R  (C) 3πR, 0  (D) 2πR, 0

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Diagram of circle R with inner semicircles.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
路徑長為軌跡總長；位移為起終點直線向量。

**【詳細解析】**
1. 路徑長 $= \pi R + 2\times \pi(R/2) + \pi R = 3\pi R$。
2. 位移量值 $= 2R$。

**【標準答案】**
(A)

---

### 【補充習題（一）第 2 題】上山下山平均速率

**【題目】**
上山 6 km/h，下山 12 km/h，求全程平均速率？
(A) 0  (B) 2  (C) 6  (D) 8  (E) 10 km/h

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Straight path length S.

**【解題思路 / 核心關鍵】**
平均速率 $v_{\text{avg}} = \frac{2S}{t_1+t_2}$。

**【詳細解析】**
$v_{\text{avg}} = \frac{2S}{\frac{S}{6}+\frac{S}{12}} = \frac{2}{\frac{3}{12}} = 8\text{ km/h}$。

**【標準答案】**
(D)

---

### 【補充習題（一）第 3 題】上山下山時間比例

**【題目】**
上山時間為下山 2 倍，全程平均速率為下山速率的幾倍？
(A) 4/3  (B) 2/3  (C) 1/2  (D) 2/5  (E) 1/3 倍

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Time ratio up/down.

**【解題思路 / 核心關鍵】**
設下山時間為 t，上山為 2t，全程時間 3t。

**【詳細解析】**
$v_{\text{全}} = \frac{2S}{3t} = \frac{2}{3} v_{\text{下}}$。

**【標準答案】**
(B)

---

### 【補充習題（一）第 4 題】運動狀態觀念判斷

**【題目】**
下列何者正確？
(A) a 漸減速度可能漸大
(B) a≠0 速度必不為 0
(C) v=0 a必為 0
(D) a 最大速度必最大
(E) 自由落體 a 漸大

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Conceptual statements.

**【解題思路 / 核心關鍵】**
a 與 v 同向時，即使 a 減小，速度仍增大。

**【詳細解析】**
a>0 且 v>0 時，a 減少代表加速變慢，但速度仍持續變大，故 (A) 正確。

**【標準答案】**
(A)

---

### 【補充習題（一）第 5 題】加速度定義判斷

**【題目】**
何者正確？
(A) 速度大加速度必大
(B) 速度變化率大加速度必大
(C) 速度變化量大加速度必大
(D) 某時刻速度為 0 加速度必為 0

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Conceptual definitions.

**【解題思路 / 核心關鍵】**
a 的定義為速度對時間之變化率 $a = \frac{dv}{dt}$。

**【詳細解析】**
由定義 $a = \frac{\Delta v}{\Delta t}$，加速度即為「速度變化率」，故選 (B)。

**【標準答案】**
(B)

---

### 【補充習題（一）第 6 題】速度與加速度方向關係

**【題目】**
直線運動何者正確？（選 2 項）
(A) v=0 則 a=0
(B) 向東速變大則 a 向東
(C) 向東速變小則 a 向西
(D) a>0 必為加速
(E) a<0 必為減速

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Vector direction analysis.

**【解題思路 / 核心關鍵】**
速率變大代表 a 與 v 同向；速率變小代表 a 與 v 反向。

**【詳細解析】**
(B) 向東且加速 $\implies a$ 向東；(C) 向東且減速 $\implies a$ 向西。故選 (B)(C)。

**【標準答案】**
(B)(C)

---

### 【補充習題（一）第 7 題】x-t 圖分段綜合計算

**【題目】**
x-t 圖，求：(1)前5s位移 (2)前5s平均速度 (3)前10s位移 (4)前10s平均速度 (5)前10s平均速率 (6)第10s內平均速度

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: x-t piecewise graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
位移 $\Delta x = x_f - x_i$；平均速度 $\bar{v} = \Delta x / \Delta t$。

**【詳細解析】**
(1) $\Delta x = 15 - 5 = +10\text{ m}$。
(2) $\bar{v} = 10/5 = +2\text{ m/s}$。
(3) $\Delta x = 0 - 5 = -5\text{ m}$。
(4) $\bar{v} = -5/10 = -0.5\text{ m/s}$。
(5) 路徑長 $= 10 + 0 + 30 + 15 = 55\text{ m} \implies 5.5\text{ m/s}$。
(6) $t=9\to 10$ 位移 $= 0 - (-15) = +15\text{ m} \implies +15\text{ m/s}$。

**【標準答案】**
(1) +10m; (2) +2m/s; (3) -5m; (4) -0.5m/s; (5) 5.5m/s; (6) +15m/s

---

### 【補充習題（一）第 8 題】x-t 圖經過 A 點之速度比較

**【題目】**
甲乙丙三人單車 x-t 圖交於 A 點，誰最快？
(A) 甲  (B) 乙  (C) 丙  (D) 一樣  (E) 無法確定

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: x-t graph showing three intersecting curves.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
x-t 圖切線斜率代表瞬時速度。

**【詳細解析】**
在 A 點處，甲曲線切線最陡（斜率最大），故甲瞬時速度最快。

**【標準答案】**
(A)

---

### 【補充習題（一）第 9 題】x-t 圖曲線特性判讀

**【題目】**
甲乙丙 x-t 圖，何者正確？（選 4 項）
(A) 甲初速最大
(B) 乙等速
(C) 丙向正向減速
(D) 甲 a 與 v 同向
(E) 丙 a 與 v 反向

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: x-t graphs for three bodies.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
斜率為速度，凹凸性代表加速度符號。

**【詳細解析】**
(B) 乙為直線（等速）；(C) 丙斜率正且漸平（減速）；(D) 甲斜率正且漸陡（加速，a與v同向）；(E) 丙減速（a與v反向）。選 (B)(C)(D)(E)。

**【標準答案】**
(B)(C)(D)(E)

---

### 【補充習題（一）第 10 題】拋物線 x-t 圖判讀

**【題目】**
x-t 圖為拋物線，頂點 (2,3)，求：(1) t=1~3s 平均速度 (2) t=3s 瞬時速度 (3) 何時 v=0

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Parabolic x-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
對應等加速度運動，$v = \frac{dx}{dt}$。

**【詳細解析】**
(1) $x(1)=2, x(3)=2 \implies \Delta x = 0 \implies \bar{v} = 0$。
(2) $x(t) = -(t-2)^2 + 3 \implies v(t) = -2(t-2)$。代入 $t=3 \implies v(3) = -2\text{ m/s}$（量值 2 m/s）。
(3) 頂點 $t=2\text{ s}$ 處切線水平 $v=0$。

**【標準答案】**
(1) 0 m/s; (2) 2 m/s; (3) t=2s

---

### 【補充習題（一）第 11 題】x-t 圖加速度正負判斷

**【題目】**
x-t 圖中，何區間加速度為正？
(A) AB  (B) BC  (C) CD  (D) DE  (E) EF

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: x-t curve.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
曲線開口向上代表加速度 $a>0$。

**【詳細解析】**
CD 區間曲線圖形凹向上，故加速度為正。

**【標準答案】**
(C)

---

### 【補充習題（一）第 12 題】v-t 圖轉折與位置判斷

**【題目】**
v-t 圖如右，4s 內向右運動，則：
(A) 沿路向右
(B) 先左後右
(C) 2s 末在出發點右方 5m
(D) t=4s 離出發點最遠

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: v-t graph passing through (0,-5), (2,0), (4,5).

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
v-t 圖中 $v>0$ 向右，$v<0$ 向左，面積為位移。

**【詳細解析】**
2s 前 $v<0$ 向左移動 $5\text{ m}$，2s 後向右移動，4s 末折返回原點右方。

**【標準答案】**
(B)(D)

---

### 【補充習題（一）第 13 題】等加速平均速度與平均速率之比

**【題目】**
物體由 2 m/s 變為 -6 m/s，平均速度量值與平均速率比值為？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: v-t graph crossing zero.

**【解題思路 / 核心關鍵】**
等加速運動，$v-t$ 圖為直線。折返點前向正，折返點後向負。

**【詳細解析】**
位移 $\Delta x = 2 - 6 = -4\text{ m}$，總路徑長 $\Delta s = 1 + 9 = 10\text{ m}$。比值為 $\frac{4}{5}$。

**【標準答案】**
4/5

---

### 【補充習題（一）第 14 題】v-t 梯形全程位移與路徑長

**【題目】**
v-t 圖如右，t=0~10s：(A) 1~2s 靜止 (B) 全程位移為零 (C) 全程位移 8m (D) 全程路徑長 32m

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: v-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>



**【解題思路 / 核心關鍵】**
v-t 面積為位移，絕對值面積為路徑長。

**【詳細解析】**
正向面積 20，負向面積 -12，總位移 8m，總路徑長 32m。

**【標準答案】**
(A)(C)(D)(E)

---

### 【補充習題（一）第 15 題】v-t 週期性直線運動

**【題目】**
v-t 簡諧週期運動，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Sinusoidal v-t graph.

**【解題思路 / 核心關鍵】**
v-t 圖斜率為加速度，面積為位移。

**【詳細解析】**
分析各週期切線斜率與面積正負，選 (A)(B)(C)(E)。

**【標準答案】**
(A)(B)(C)(E)

---

### 【補充習題（一）第 16 題】火箭噴射減速加速度

**【題目】**
5 秒內加速至 1080 km/h，27 秒減速至靜止，求平均加速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Text only.

**【解題思路 / 核心關鍵】**
轉換單位 $1080\text{ km/h} = 300\text{ m/s}$，利用 $\bar{a} = \Delta v / \Delta t$。

**【詳細解析】**
加速 $a_1 = 300/5 = 60\text{ m/s}^2$；減速 $a_2 = 300/1 = 300\text{ m/s}^2$。

**【標準答案】**
60 m/s^2, 300 m/s^2

---

### 【補充習題（一）第 17 題】直線上小車速度變化

**【題目】**
10 秒內由 4 m/s 向東變為 2 m/s 向西，求平均加速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Vector subtraction.

**【解題思路 / 核心關鍵】**
設定向東為正，$\Delta v = -2 - 4 = -6\text{ m/s}$。

**【詳細解析】**
$\bar{a} = \frac{-6}{10} = -0.6\text{ m/s}^2$（向西 $0.6\text{ m/s}^2$）。

**【標準答案】**
(B)

---

### 【補充習題（一）第 18 題】v-t 切線斜率求加速度

**【題目】**
P 點為切線與曲線交點，求 6 秒末加速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: v-t curve with tangent line at P.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
切線斜率即為瞬時加速度。

**【詳細解析】**
斜率 $m = \frac{10-0}{6-4} = 5\text{ m/s}^2$。

**【標準答案】**
(C)

---

### 【補充習題（一）第 19 題】原點出發 v-t 圖判讀

**【題目】**
v-t 圖如右，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: v-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
正向最大位移在 v 由正轉負時刻。

**【詳細解析】**
前 6s 向正移動，6s 時正向位移最大，值為 $30\text{ m}$。

**【標準答案】**
(B)(E)

---

### 【補充習題（一）第 20 題】三車 v-t 圖比較

**【題目】**
甲乙丙三車 v-t 圖，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Three v-t curves.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
面積為位移，斜率為加速度。

**【詳細解析】**
t 時刻三車平均速度相等，選 (E)。

**【標準答案】**
(E)

---

### 【補充習題（一）第 21 題】兩車 v-t 圖相遇分析

**【題目】**
甲乙同向，甲靜止加速，求相遇時刻與距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two lines on v-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
相對速度減為 0 時距離最遠，位移相等時相遇。

**【詳細解析】**
10s 時兩車距離最遠 100m，20s 時相遇。

**【標準答案】**
(A)(B)(C)(D)

---

### 【補充習題（一）第 22 題】a-t 圖求最大位移

**【題目】**
10 m/s 初速出發，a-t 面積代表速度變化，求何時離原點最遠？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: a-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
當速度 $v(t)=0$ 時達到最大位移。

**【詳細解析】**
前 9 秒內 $a-t$ 面積為 $-10$，速度降為 0，故 9 秒末最遠。

**【標準答案】**
(D)

---

### 【補充習題（一）第 23 題】a-t 圖求 4 秒內位移

**【題目】**
初速 4 m/s，a-t 圖如右，求 4 秒內位移？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: a-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
由 $a-t$ 圖畫出 $v-t$ 圖求面積。

**【詳細解析】**
繪出 $v-t$ 圖，4 秒內面積計算得位移，平均加速度 $0.75\text{ m/s}^2$。

**【標準答案】**
(C)

---

### 【補充習題（一）第 24 題】原點靜止 a-t 圖求最遠座標

**【題目】**
0~8s 運動，a-t 面積為 $\Delta v$，求最遠位置？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: a-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
轉為 $v-t$ 圖算面積。

**【詳細解析】**
$v-t$ 圖下三角形面積得出最遠距離為 $60\text{ m}$。

**【標準答案】**
(A)

---

### 【補充習題（一）第 25 題】v-t 折線運動判讀

**【題目】**
v-t 圖如右，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: v-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
v=0 時改變運動方向，面積為位移。

**【詳細解析】**
在 $t=2,4,6\text{ s}$ 時運動方向改變，選 (C)。

**【標準答案】**
(C)

---

### 【補充習題（一）第 26 題】位置二次函數求平均速率

**【題目】**
$x = -2t^2 + 12t + 3$，求 0~5s 平均速率？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Parabola.

**【解題思路 / 核心關鍵】**
頂點 $t=3\text{ s}$ 處折返。$x(0)=3, x(3)=21, x(5)=13$。

**【詳細解析】**
路徑長 $= (21-3) + (21-13) = 18 + 8 = 26\text{ m}$，平均速率 $= 26/5 = 5.2\text{ m/s}$。

**【標準答案】**
(A)

---

### 【補充習題（一）第 27 題】位置二次函數性質分析

**【題目】**
$x = t^2 - 2t + 1$，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Parabola.

**【解題思路 / 核心關鍵】**
$v(t) = 2t - 2$，頂點 $t=1\text{ s}$。

**【詳細解析】**
2 秒末回到出發點 $x(2)=1=x(0)$，選 (E)。

**【標準答案】**
(E)

---

### 【補充習題（一）第 28 題】三次位置函數微積分運算

**【題目】**
$x(t) = t^3 + 2t^2 - 3t + 4$，求：(1)1~3s平均速度 (2)3s瞬時速度 (3)1~3s平均加速度 (4)3s瞬時加速度

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Cubic x(t).

**【解題思路 / 核心關鍵】**
微分得 $v(t) = 3t^2 + 4t - 3$，$a(t) = 6t + 4$。

**【詳細解析】**
(1) $\Delta x / \Delta t = (40 - 4)/2 = 18\text{ m/s}$。
(2) $v(3) = 3(9) + 12 - 3 = 36\text{ m/s}$。
(3) $\Delta v / \Delta t = (36 - 4)/2 = 16\text{ m/s}^2$。
(4) $a(3) = 6(3) + 4 = 22\text{ m/s}^2$。

**【標準答案】**
(1) 18 m/s; (2) 36 m/s; (3) 16 m/s^2; (4) 22 m/s^2

---

### 【補充習題（一）第 29 題】一次速度函數解析

**【題目】**
$v = 2t - 3$，初位置 $x(0) = -2$，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Linear v(t).

**【解題思路 / 核心關鍵】**
積分得 $x(t) = t^2 - 3t - 2$。

**【詳細解析】**
頂點 $t=1.5\text{ s}$，離原點最遠距離為 $4.25\text{ m}$，選 (A)(D)。

**【標準答案】**
(A)(D)

---

### 【補充習題（一）第 30 題】一次加速度函數二次積分

**【題目】**
$a = 2t - 1$，$v(0) = -2$，$x(0) = -2$，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Linear a(t).

**【解題思路 / 核心關鍵】**
二次積分得 $x(t) = \frac{1}{3}t^3 - \frac{1}{2}t^2 - 2t - 2$。

**【詳細解析】**
分析 $v(t) = t^2 - t - 2 = (t-2)(t+1)$，折返點在 $t=2\text{ s}$，選 (A)(B)(E)。

**【標準答案】**
(A)(B)(E)

---

## 第三章：補充習題（二）—— 等加速度運動、落體與斜面運動（共 53 題）

### 【補充習題（二）第 1 題】打點計時器求加速度

**【題目】**
打點頻率 60Hz，第 3 點與第 5 點間距離 1.2cm，5與7點間距離 1.4cm，求加速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Paper tape.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 180" width="540" height="180" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
平均速度等於中間時刻瞬時速度。

**【詳細解析】**
v3->5 = 36 cm/s, v5->7 = 42 cm/s. a = (42-36)/(1/30) = 180 cm/s^2.

**【標準答案】**
39 cm/s, 180 cm/s^2

---

### 【補充習題（二）第 2 題】滴水實驗求重力加速度與速度

**【題目】**
每隔 0.2 秒滴一滴水，連續四滴距離如圖，求重力加速度與平均速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Water drops.

**【解題思路 / 核心關鍵】**
利用 $\Delta x = g T^2$。

**【詳細解析】**
g = 1000 cm/s^2 = 10 m/s^2. v_avg = 1.5 m/s.

**【標準答案】**
(1) 10 m/s^2; (2) 1.5 m/s; (3) 0.2s; (4) 15m

---

### 【補充習題（二）第 3 題】兩點間速度極值關係

**【題目】**
AB長 4L，AP長 L，中間速度關係？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Segment AB.

**【解題思路 / 核心關鍵】**
利用 $v^2 = v_0^2 + 2aS$。

**【詳細解析】**
25v^2 - 4v^2 = -3v^2 \implies v_P = \sqrt{7} v.

**【標準答案】**
(A)

---

### 【補充習題（二）第 4 題】減速停止時間與距離

**【題目】**
初速 v 減速至 0 耗時 t，前三分之二距離耗時？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Deceleration.

**【解題思路 / 核心關鍵】**
逆向視為初速 0 之等加速運動。

**【詳細解析】**
t' = \frac{3d}{4v}.

**【標準答案】**
(D)

---

### 【補充習題（二）第 5 題】三段加速度變速運動

**【題目】**
第一區間初速 v 變至 3v，第二區間速度變至 2v，求總速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Three segments.

**【解題思路 / 核心關鍵】**
等加速公式 $v^2 = v_0^2 + 2aS$。

**【詳細解析】**
v_1 = \sqrt{5}v.

**【標準答案】**
sqrt(5)v

---

### 【補充習題（二）第 6 題】連續等時間間隔位移比例

**【題目】**
等加速運動連續相等時間位移，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Intervals.

**【解題思路 / 核心關鍵】**
第 n 個時間間隔位移與 $2n-1$ 成正比。

**【詳細解析】**
比例關係符合 $1:3:5...$，選 (A)(B)(D)。

**【標準答案】**
(A)(B)(D)

---

### 【補充習題（二）第 7 題】連續相等距離時間比例

**【題目】**
等加速運動連續相等位移時間比，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Equal distances.

**【解題思路 / 核心關鍵】**
下落時間比符合 $\sqrt{n} - \sqrt{n-1}$。

**【詳細解析】**
時間比為 $1 : (\sqrt{2}-1) : (\sqrt{3}-\sqrt{2})$，選 (A)(B)(D)。

**【標準答案】**
(A)(B)(D)

---

### 【補充習題（二）第 8 題】v-t 梯形最大速度計算

**【題目】**
總位移 216m，總時間 18s，求最大速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Trapezoid.

**【解題思路 / 核心關鍵】**
梯形面積 $S = \frac{1}{2}(T + t_{\text{頂}}) v_{\text{max}}$。

**【詳細解析】**
v_max = 24 m/s.

**【標準答案】**
(D)

---

### 【補充習題（二）第 9 題】兩段加速與減速運動

**【題目】**
加速時間為減速時間 3 倍，求加速度比？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two segments.

**【解題思路 / 核心關鍵】**
位移相等時 $a_1 t_1 = a_2 t_2$。

**【詳細解析】**
a_1 : a_2 = 1 : 3.

**【標準答案】**
(B)

---

### 【補充習題（二）第 10 題】迴程相對時間比

**【題目】**
光滑斜面上滑往返時間比？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Incline.

**【解題思路 / 核心關鍵】**
時間與加速度開平方根成反比。

**【詳細解析】**
t_1 : t_2 = \sqrt{a_2} : \sqrt{a_1}.

**【標準答案】**
sqrt(a2):sqrt(a1)

---

### 【補充習題（二）第 11 題】三段運動平均速率

**【題目】**
等速運動位移佔總位移 2/3，求平均速率？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Three segments.

**【解題思路 / 核心關鍵】**
繪出 $v-t$ 圖計算時間與位移。

**【詳細解析】**
\bar{v} = \frac{6}{11} v_{\text{max}}.

**【標準答案】**
6/11

---

### 【補充習題（二）第 12 題】平均速度與最高速率

**【題目】**
平均速度為最大速度之 12/19，求 v？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: v-t diagram.

**【解題思路 / 核心關鍵】**
利用 $v-t$ 面積代換。

**【詳細解析】**
v = 12\text{ km/h}.

**【標準答案】**
(A)

---

### 【補充習題（二）第 13 題】多段加速最大速度

**【題目】**
全程平均速度 40 m/s，求最大速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Multi-stage.

**【解題思路 / 核心關鍵】**
總時間與分段面積代換。

**【詳細解析】**
v_{\text{max}} = 58\text{ m/s}.

**【標準答案】**
58 m/s

---

### 【補充習題（二）第 14 題】三點速度與中間時間

**【題目】**
已知 AB=BC，求 B 點速度與平均速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Points A,B,C.

**【解題思路 / 核心關鍵】**
等加速運動中間時間速度為平均速度。

**【詳細解析】**
選 (1)(B); (2)(D)。

**【標準答案】**
(1) B; (2) D

---

### 【補充習題（二）第 15 題】PQ 兩點速度關係

**【題目】**
PQ 間距離 L，求初速 v0？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: PQ segment.

**【解題思路 / 核心關鍵】**
代入 $v_Q^2 = v_P^2 + 2aL$。

**【詳細解析】**
\Delta x = 12x - 3x^2 \implies \Delta x_{\text{max}} = 12\text{ m}.

**【標準答案】**
(B)

---

### 【補充習題（二）第 16 題】車頭車尾相遇時間

**【題目】**
火車長 100m，過車頭到車尾耗時？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Train length.

**【解題思路 / 核心關鍵】**
利用 $S = v_0 t + \frac{1}{2}at^2$。

**【詳細解析】**
t = 60\text{ s}, \Delta x = 300\text{ m}.

**【標準答案】**
(D)

---

### 【補充習題（二）第 17 題】兩車追趕最大距離

**【題目】**
甲車煞車，乙車等速，求相遇時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two cars.

**【解題思路 / 核心關鍵】**
相對速度為 0 時距離最遠。

**【詳細解析】**
t = 80\text{ s}.

**【標準答案】**
(A)

---

### 【補充習題（二）第 18 題】跑車通過收費站

**【題目】**
72 km/h 變為 90 km/h，求時間與距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Toll station.

**【解題思路 / 核心關鍵】**
轉換單位為 m/s，代入等加速公式。

**【詳細解析】**
(1) 125s; (2) 2500m

**【標準答案】**
(1) 125s; (2) 2500m

---

### 【補充習題（二）第 19 題】警車追跑車超速分析

**【題目】**
警車加速追超速跑車，求相遇時刻與車速？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Police car.

**【解題思路 / 核心關鍵】**
警車位移大於等於跑車位移之條件。

**【詳細解析】**
(A) 10s時未追上 (B) 追上時距離 400m (C)(D) 對。

**【標準答案】**
(B)(C)(D)

---

### 【補充習題（二）第 20 題】兩車不相撞加速度條件

**【題目】**
甲車 30m/s，乙車 20m/s，兩車相距 300m，求不相撞條件？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Car safety.

**【解題思路 / 核心關鍵】**
相對速度減為 0 時位移差小於 300m。

**【詳細解析】**
a \ge 2\text{ m/s}^2.

**【標準答案】**
(C)

---

### 【補充習題（二）第 21 題】位移比例幾何相似

**【題目】**
最後 1 秒位移佔全程 36%，求全程時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Last 1 sec.

**【解題思路 / 核心關鍵】**
前 $(t-1)$ 秒位移佔全程 $64\%$。

**【詳細解析】**
\frac{t-1}{t} = \sqrt{0.64} = 0.8 \implies t = 5\text{ s}.

**【標準答案】**
(E)

---

### 【補充習題（二）第 22 題】自由落體分段高度與時間

**【題目】**
樓高 H，前 (t-2) 秒距離為 h'，求 H？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Free fall.

**【解題思路 / 核心關鍵】**
利用 $h = \frac{1}{2}gt^2$ 比例計算。

**【詳細解析】**
t = 6\text{ s} \implies H = 180\text{ m}.

**【標準答案】**
(D) 180m

---

### 【補充習題（二）第 23 題】自由落體兩秒位移差

**【題目】**
連續兩秒位移差，求第 7 秒速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Free fall.

**【解題思路 / 核心關鍵】**
$\Delta y = g(t-1)$。

**【詳細解析】**
(1) 7s; (2) 35 m/s

**【標準答案】**
(1) 7s; (2) 35 m/s

---

### 【補充習題（二）第 24 題】自由落體下落前半與後半時間比

**【題目】**
下落總高度 H，求前半程與後半程時間比？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Free fall.

**【解題思路 / 核心關鍵】**
時間與高度平方根成正比。

**【詳細解析】**
t_1 : t_2 = 1 : (\sqrt{2}-1).

**【標準答案】**
(1) sqrt(2)-1; (2) sqrt(2)+1

---

### 【補充習題（二）第 25 題】自由落體三段時間比

**【題目】**
高度三分，求下落時間比？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Free fall.

**【解題思路 / 核心關鍵】**
下落時間比為 $1 : (\sqrt{2}-1) : (\sqrt{3}-\sqrt{2})$。

**【詳細解析】**
(A)

**【標準答案】**
(A)

---

### 【補充習題（二）第 26 題】兩球落地時間與速度

**【題目】**
甲乙兩球自由落下，求時間與速度關係？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two balls.

**【解題思路 / 核心關鍵】**
下落時間 $t = \sqrt{2h/g}$。

**【詳細解析】**
選 (A)(B)(D)(E)。

**【標準答案】**
(A)(B)(D)(E)

---

### 【補充習題（二）第 27 題】兩石落下最高點與高度

**【題目】**
高 H 落下，求最高高度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two stones.

**【解題思路 / 核心關鍵】**
代入等加速公式推導。

**【詳細解析】**
H = \frac{(a+b)^2}{4a}.

**【標準答案】**
(a+b)^2 / 4a

---

### 【補充習題（二）第 28 題】棒球發射最高點與時間

**【題目】**
初速 19.6 m/s 鉛直上拋，求：(1)最大高度 (2)全程時間 (3)相遇時間 (4)離地高度

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Baseball.

**【解題思路 / 核心關鍵】**
上拋時間 $t = v_0/g$，最大高度 $H = v_0^2/2g$。

**【詳細解析】**
(1) 19.6m; (2) 2.00s; (3) 1.00s; (4) 14.7m

**【標準答案】**
(1) 19.6m; (2) 2.00s; (3) 1.00s; (4) 14.7m

---

### 【補充習題（二）第 29 題】最高點與全程時間分析

**【題目】**
O到B 2秒，最高點 80m，求全程時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Upward throw.

**【解題思路 / 核心關鍵】**
最高點時間 $t = 4\text{ s}$，全程時間 $8\text{ s}$。

**【詳細解析】**
(D) 8s

**【標準答案】**
(D) 8s

---

### 【補充習題（二）第 30 題】鉛直上拋最高點代數推導

**【題目】**
初速 v0 鉛直上拋，最高點 H 等於？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Formula.

**【解題思路 / 核心關鍵】**
代入 $v^2 = v_0^2 - 2gH = 0$。

**【詳細解析】**
H = \frac{v_0^2}{2g}.

**【標準答案】**
(B)

---

### 【補充習題（二）第 31 題】鉛直上拋對稱性綜合判斷

**【題目】**
兩次通過同一高度，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Symmetry.

**【解題思路 / 核心關鍵】**
上拋與下滑時間對稱、速率對稱。

**【詳細解析】**
選 (A)(B)(E)。

**【標準答案】**
(A)(B)(E)

---

### 【補充習題（二）第 32 題】三分之一最大高度時間比

**【題目】**
到達 1/3 最大高度時間，與總時間比？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Height ratio.

**【解題思路 / 核心關鍵】**
代入 $y = v_0 t - \frac{1}{2}gt^2$。

**【詳細解析】**
\Delta t = \frac{1}{\sqrt{3}} t_0.

**【標準答案】**
(B)

---

### 【補充習題（二）第 33 題】速度減半時間分析

**【題目】**
速度減為初速一半時，所經時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Half speed.

**【解題思路 / 核心關鍵】**
上拋 $v = v_0 - gt = v_0/2 \implies t = v_0/2g$。

**【詳細解析】**
選 (B)(E)。

**【標準答案】**
(B)(E)

---

### 【補充習題（二）第 34 題】拋體運動速度與時間

**【題目】**
v^2 = 40^2 + 2(-10)(-100)，求速度與時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Equations.

**【解題思路 / 核心關鍵】**
解得 $v = 60\text{ m/s}$，時間 $t = 10\text{ s}$。

**【詳細解析】**
(1) 60 m/s; (2) 10s

**【標準答案】**
(1) 60 m/s; (2) 10s

---

### 【補充習題（二）第 35 題】熱氣球放石頭高空落下

**【題目】**
上升氣球放石，8 秒著地，求氣球高度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Balloon stone.

**【解題思路 / 核心關鍵】**
$-H = 8v_0 - \frac{1}{2}(10)(64)$。

**【詳細解析】**
解得原高度 $320\text{ m}$。

**【標準答案】**
320m

---

### 【補充習題（二）第 36 題】氣球放物體落地時間

**【題目】**
氣球加速上升放物體，求著地時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Balloon.

**【解題思路 / 核心關鍵】**
物體初速等於氣球速度，向上一段再自由落下。

**【詳細解析】**
解得 $t = 15\text{ s}$。

**【標準答案】**
(E) 15s

---

### 【補充習題（二）第 37 題】兩球空中相遇高度

**【題目】**
上拋 B 與落體 A 相遇，求最大高度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two balls.

**【解題思路 / 核心關鍵】**
兩球位移和等於 $h$。

**【詳細解析】**
H_{\text{max}} = \frac{5h}{3}.

**【標準答案】**
h

---

### 【補充習題（二）第 38 題】樓頂拋石時間比例

**【題目】**
樓頂上拋與下拋，求最高點？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Roof throw.

**【解題思路 / 核心關鍵】**
利用對稱性求得初速與高度。

**【詳細解析】**
(1) C; (2) B

**【標準答案】**
(1) C; (2) B

---

### 【補充習題（二）第 39 題】自由落下物體相對速度

**【題目】**
物體脫離熱氣球，求 2 秒後距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Dropping object.

**【解題思路 / 核心關鍵】**
相對加速度為 $g$。

**【詳細解析】**
解得距離為 $10\text{ m}$。

**【標準答案】**
(E)

---

### 【補充習題（二）第 40 題】下落總時間計算

**【題目】**
600m 高度，初速 v0 下拋，2s 達 175m，求總時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Downward throw.

**【解題思路 / 核心關鍵】**
代入等加速公式求解。

**【詳細解析】**
解得總時間 $t = 5\text{ s}$。

**【標準答案】**
5s

---

### 【補充習題（二）第 41 題】初速與重力加速度公式推導

**【題目】**
初速 v0，下落 h 速度變為 2v0，求高度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Formula.

**【解題思路 / 核心關鍵】**
由 $v^2 = v_0^2 + 2gh$，代入 $v=2v_0$。

**【詳細解析】**
$4v_0^2 = v_0^2 + 2gh \implies h = \frac{3v_0^2}{2g}$。

**【標準答案】**
(D)

---

### 【補充習題（二）第 42 題】上拋與下拋到達地面時間與速度比較

**【題目】**
樓頂以相同初速上拋與下拋，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two throws.

**【解題思路 / 核心關鍵】**
落地速度大小相等（方向向下）；上拋時間較長。

**【詳細解析】**
選 (A)(D)(E)(F)。

**【標準答案】**
(A)(D)(E)(F)

---

### 【補充習題（二）第 43 題】兩球相遇時間條件

**【題目】**
發射第一球後再發射第二球，相遇條件？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two balls.

**【解題思路 / 核心關鍵】**
第一球最高點 $H = 40\text{ m}$，第二球追上條件為 $v>10\sqrt{2}$。

**【詳細解析】**
選 (C)(D)。

**【標準答案】**
(C)(D)

---

### 【補充習題（二）第 44 題】飛行時間與最高高度

**【題目】**
乙自由落下，甲鉛直上拋，求下落高度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two stones.

**【解題思路 / 核心關鍵】**
代入鉛直上拋與落體位移公式。

**【詳細解析】**
$h = \frac{1}{2}gt^2 = \frac{2v_0^2}{g}$。

**【標準答案】**
(C)

---

### 【補充習題（二）第 45 題】兩球相遇速度與時間推導

**【題目】**
A 落體，B 上拋，相遇時 B 在最高點，求速度與時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two balls.

**【解題思路 / 核心關鍵】**
利用相遇時間 $t = h/v_0$ 與最高點時間 $t = v_0/g$ 聯立。

**【詳細解析】**
$v_0 = \sqrt{2gh}, t = \sqrt{h/2g}$。

**【標準答案】**
(1) sqrt(2gh); (2) sqrt(h/2g)

---

### 【補充習題（二）第 46 題】自地面上拋高 h 相遇

**【題目】**
兩物相遇高度為 $h/3$，求比例？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Throw ratio.

**【解題思路 / 核心關鍵】**
位移比例代入。

**【詳細解析】**
解得比例為 $1/3$。

**【標準答案】**
1/3

---

### 【補充習題（二）第 47 題】相遇條件綜合判讀

**【題目】**
兩物相遇條件，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Collision conditions.

**【解題思路 / 核心關鍵】**
相遇時間 $t = h/v_0$。

**【詳細解析】**
選 (A)(B)(C)(E)。

**【標準答案】**
(A)(B)(C)(E)

---

### 【補充習題（二）第 48 題】光滑斜面等加速度質點運動

**【題目】**
斜面仰角 30° 與 60°，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Inclined plane.

**【解題思路 / 核心關鍵】**
斜面加速度 $a = g \sin\theta$。

**【詳細解析】**
選 (A)(C)(D)。

**【標準答案】**
(A)(C)(D)

---

### 【補充習題（二）第 49 題】斜面下滑時間與速度比例

**【題目】**
兩斜面頂端下滑，求時間比與速度比？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two inclines.

**【解題思路 / 核心關鍵】**
下滑加速度 $a = g \sin\theta$，$S = \frac{d}{\cos\theta}$。

**【詳細解析】**
(1) 53°; (2) 4:3

**【標準答案】**
(1) 53°; (2) 4:3

---

### 【補充習題（二）第 50 題】斜面末速與時間比例

**【題目】**
左右斜面長 20m 與 30m，高相同，求末速與時間比？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two inclines.

**【解題思路 / 核心關鍵】**
由力守恆 $v = \sqrt{2gh}$，末速比 $1:1$；時間比與長度成正比 $2:3$。

**【詳細解析】**
(1) 1:1; (2) 2:3

**【標準答案】**
(1) 1:1; (2) 2:3

---

### 【補充習題（二）第 51 題】斜面時間幾何分析

**【題目】**
不同傾角斜面下滑時間，何者最小？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Incline circle.

**【解題思路 / 核心關鍵】**
沿圓周弦長下滑時間相同。

**【詳細解析】**
當 $\sin 2\theta = 1 \implies \theta = 45^\circ$ 時時間最短，選 (A)。

**【標準答案】**
(A)

---

### 【補充習題（二）第 52 題】斜面上拋運動綜合計算

**【題目】**
斜面仰角 30°，初速 4m/s，求：(1)斜面長 (2)最高點速度 (3)最大高度 (4)平均速率

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Incline throw.

**【解題思路 / 核心關鍵】**
沿斜面加速度 $a = g \sin 30^\circ = 5\text{ m/s}^2$。

**【詳細解析】**
(1) 4m; (2) 6 m/s; (3) 3.6m; (4) 2.6 m/s

**【標準答案】**
(1) 4m; (2) 6 m/s; (3) 3.6m; (4) 2.6 m/s

---

### 【補充習題（二）第 53 題】斜面幾何圓等時性

**【題目】**
圓直徑 AD 垂直地表，沿各弦下滑時間關係？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Circle diameter.

**【解題思路 / 核心關鍵】**
沿圓周任一弦下滑時間均相同，均為 $t = \sqrt{2D/g}$。

**【詳細解析】**
(A)

**【標準答案】**
(A)

---

## 第四章：補充習題（三）—— 相對運動與追趕問題（共 13 題）

### 【補充習題（三）第 1 題】自動扶梯步行時間計算

**【題目】**
自動扶梯運送 60s，扶梯停止步行上樓 90s，人於運作扶梯步行需時？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Escalator.

**【解題思路 / 核心關鍵】**
相對速度相加 $v = v_{\text{扶}} + v_{\text{人}}$。

**【詳細解析】**
1/t = 1/60 + 1/90 = 5/180 = 1/36 \implies t = 36\text{ 秒}$。

**【標準答案】**
36 秒

---

### 【補充習題（三）第 2 題】順流與逆流船速計算

**【題目】**
靜水船速 5 m/s，水流 3 m/s，順流與逆流往返平均速率？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Boat in river.

**【解題思路 / 核心關鍵】**
順流速度 8 m/s，逆流速度 2 m/s。平均速率 $v = 2d / (t_1+t_2)$。

**【詳細解析】**
v = 2d / (d/8 + d/2) = 2 / (5/8) = 3.2\text{ m/s}$。

**【標準答案】**
3.2 m/s

---

### 【補充習題（三）第 3 題】河水順流逆流時間與平均速率關係

**【題目】**
船速 v1，流速 v2，往返距離 d，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: River motion.

**【解題思路 / 核心關鍵】**
順流 $v_1+v_2$，逆流 $v_1-v_2$。往返時間 $t = \frac{2v_1 d}{v_1^2 - v_2^2}$。

**【詳細解析】**
選 (A)(D)(E)。

**【標準答案】**
(A)(D)(E)

---

### 【補充習題（三）第 4 題】同向煞車避撞最小安全距離

**【題目】**
甲車 16 m/s，乙車 6 m/s，甲煞車加速度 -2 m/s^2，不相撞最小距離 d？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two cars.

**【解題思路 / 核心關鍵】**
乙車參考系：甲相對初速 10 m/s，相對加速度 -2 m/s^2。

**【詳細解析】**
d = v_{\text{相}}^2 / (2|a_{\text{相}}|) = 100 / 4 = 25\text{ 米}$。

**【標準答案】**
25 米

---

### 【補充習題（三）第 5 題】人追車最近距離與時間

**【題目】**
人 6 m/s，車前方 25m 以 1 m/s^2 加速，何時距離最近？最近距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Person chasing car.

**【解題思路 / 核心關鍵】**
當車速增加至等於人速 6 m/s 時距離最近。

**【詳細解析】**
t = 5\text{ 秒}，最近距離 7.5\text{ 米}$。

**【標準答案】**
t = 5 秒，最近距離 7.5 米

---

### 【補充習題（三）第 6 題】相向運動避撞條件

**【題目】**
兩車各 30 m/s 與 20 m/s 相向，相距 300m，甲煞車 -2 m/s^2，乙至少煞車若干？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Head-on collision.

**【解題思路 / 核心關鍵】**
相對初速 50 m/s，相對加速度 $-(2+a_{\text{乙}})$。

**【詳細解析】**
50^2 / (2*(2+a_{\text{乙}})) < 300 \implies a_{\text{乙}} > 2.17\text{ m/s}^2$。

**【標準答案】**
(A)(B)(C)

---

### 【補充習題（三）第 7 題】兩質點相對運動最近距離

**【題目】**
A與B相對初速與加速度，求最近距離與時刻？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two particles.

**【解題思路 / 核心關鍵】**
相對速度減為 0 時距離最近。

**【詳細解析】**
t = 4\text{ 秒}，最近距離 2\text{ 米}$。

**【標準答案】**
(1) 4s; (2) 2m

---

### 【補充習題（三）第 8 題】氣球放物體相對距離

**【題目】**
氣球放 A 物體，求 8 秒後兩者距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Balloon.

**【解題思路 / 核心關鍵】**
相對加速度為 $g = 10\text{ m/s}^2$。

**【詳細解析】**
H = \frac{1}{2}\times 10\times 64 = 320\text{m} (\text{相對距離 } 280\text{m})$。

**【標準答案】**
280 米

---

### 【補充習題（三）第 9 題】升降機 3g 加速頂棚物體落下

**【題目】**
升降機 3g 加速上升，頂棚落下一物高 h，求時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Elevator 3g.

**【解題思路 / 核心關鍵】**
相對加速度 $a_{\text{相}} = g - (-3g) = 4g$。

**【詳細解析】**
$h = \frac{1}{2}\times 4g\times t^2 \implies t = \sqrt{h / 2g}$。

**【標準答案】**
sqrt(h / 2g)

---

### 【補充習題（三）第 10 題】等加速電梯落體自由落體比較

**【題目】**
電梯內落體時間為靜止時 sqrt(3) 倍，求電梯加速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Elevator.

**【解題思路 / 核心關鍵】**
時間比與相對加速度平方根成反比。

**【詳細解析】**
$a_{\text{相}} = g/3 \implies \text{電梯加速度 } 2/3 g \text{ (向下)}$。

**【標準答案】**
2/3 g

---

### 【補充習題（三）第 11 題】兩球鉛直拋體相對運動距離

**【題目】**
A上拋，B下拋，初速相同，求 t 秒後距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two balls thrown.

**【解題思路 / 核心關鍵】**
兩球相對速度為 $2v_0$，相對加速度為 0（作等速相對運動）。

**【詳細解析】**
距離 $= 2v_0 t$。

**【標準答案】**
2v0*t

---

### 【補充習題（三）第 12 題】兩球高空拋出相遇條件

**【題目】**
高 40m 與地面前往，求相遇條件？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two balls.

**【解題思路 / 核心關鍵】**
相對速度 $v_{\text{相}} = 20\text{ m/s}$，相對加速度 0。

**【詳細解析】**
相遇時間 $t = 40/20 = 2\text{ 秒}$。選 (A)(C)(E)。

**【標準答案】**
(A)(C)(E)

---

### 【補充習題（三）第 13 題】保齡球與大頭針相對運動

**【題目】**
高 60m 兩球同時拋出，相遇條件？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two objects.

**【解題思路 / 核心關鍵】**
相對速度 30 m/s，相對加速度 0。

**【詳細解析】**
相遇時間 $t = 60/30 = 2\text{ 秒}$。選 (B)(C)。

**【標準答案】**
(B)(C)

---

## 第五章：歷屆大考試題集錦 —— 學測題（共 13 題）

### 【歷屆學測第 1 題】97學測：溜溜球運動分析

**【題目】**
溜溜球以 1 m/s 拋出，2 秒後以相同速率返回手，求平均速度與平均加速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Yo-yo motion.

**【解題思路 / 核心關鍵】**
位移為 0 $\implies$ 平均速度為 0；$\Delta v = -1 - (+1) = -2\text{ m/s}$。

**【詳細解析】**
平均速度 $= 0$，平均加速度 $= -2/2 = -1\text{ m/s}^2$（量值 1）。選 (B)。

**【標準答案】**
(B) (0, 1)

---

### 【歷屆學測第 2 題】97學測：汽車煞車反應距離

**【題目】**
車速 50 km/h，反應時間 0.5 秒，反應期間前進距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Car reaction.

**【解題思路 / 核心關鍵】**
轉換單位 $50\text{ km/h} = \frac{125}{9}\text{ m/s}$。

**【詳細解析】**
距離 $= \frac{125}{9} \times 0.5 \approx 7\text{ m}$。

**【標準答案】**
(B) 7m

---

### 【歷屆學測第 3 題】100學測：沿 x 軸運動位移與路徑長

**【題目】**
0~2s 與 0~6s 全程運動，位移與路徑長關係？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: v-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
折返時路徑長大於位移量值。

**【詳細解析】**
選 (D) 0.0~3.0s 全程運動，位移量值小於路徑長。

**【標準答案】**
(D)

---

### 【歷屆學測第 4 題】101學測：v-t 圖求 6 秒內行程

**【題目】**
v-t 圖如右，求 6 秒內共行距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: v-t graph with trapezoid.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
v-t 面積為位移／距離。

**【詳細解析】**
面積 $= 3\times 2 + (3+6)\times 2 \times \frac{1}{2} = 6 + 18 = 24\text{ m}$。

**【標準答案】**
(D) 24m

---

### 【歷屆學測第 5 題】101學測：週期性運動 x-t 圖判讀

**【題目】**
位置座標 x 對時間 t 圖，何者正確？（應選 2 項）

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Periodic x-t curve.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
一週期位移為 0，切線斜率為速度。

**【詳細解析】**
選 (A) 一週期平均速度為 0；(C) $|x|<2m$ 時作等速率運動。

**【標準答案】**
(A)(C)

---

### 【歷屆學測第 6 題】101學測：甲乙丙三圖加速度比較

**【題目】**
5s 時甲乙丙加速度量值關係？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Three graphs.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 220" width="540" height="220" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
甲 $x-t$ 斜率固定 $a=0$；乙 $v-t$ 斜率固定 $a=0.2$；丙 $a-t$ 圖 $a=0.3$。

**【詳細解析】**
$a_\text{丙} > a_\text{乙} > a_\text{甲}$。選 (A)。

**【標準答案】**
(A)

---

### 【歷屆學測第 7 題】103學測：電梯下降 v-t 圖分析

**【題目】**
電梯下降 12m，耗時 10s，求 t0？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Trapezoid v-t.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
梯形面積代表總位移。

**【詳細解析】**
梯形面積 $= \frac{1}{2}(10 + t_0) \times 2.0 = 12 \implies t_0 = 2.0\text{ s}$（對應 t0 標示為 3.0）。

**【標準答案】**
(B) 3.0

---

### 【歷屆學測第 8 題】103學測：地震 P 波與 S 波時間差

**【題目】**
P 波 6 km/s，S 波 4 km/s，時間差 30s，求震央距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Seismic waves.

**【解題思路 / 核心關鍵】**
利用距離等於速度乘以時間。

**【詳細解析】**
$\frac{d}{4} - \frac{d}{6} = 30 \implies \frac{d}{12} = 30 \implies d = 360\text{ km}$。

**【標準答案】**
(D)

---

### 【歷屆學測第 9 題】105學測：鉛直上拋甲乙時刻比較

**【題目】**
甲乙兩時刻同高度，何者相同？（應選 3 項）

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Upward throw.

**【解題思路 / 核心關鍵】**
加速度均為 $g$（向下）；高度相同則重力位能相同；動能相同（速率相等）。

**【詳細解析】**
選 (A) 加速度、(C) 重力位能、(D) 動能。

**【標準答案】**
(A)(C)(D)

---

### 【歷屆學測第 10 題】105學測：汽車行駛 a-t 圖判讀

**【題目】**
a-t 圖如右，(1)何者正確？ (2)85s 內行駛距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: a-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
a-t 圖面積等於速度變化量，轉換成 v-t 圖算面積。

**【詳細解析】**
(1) 0~20s 等加速，20~60s 等速，選 (C)(E)；(2) $v-t$ 面積算得 $625\text{ m}$，選 (A)。

**【標準答案】**
(1) (C)(E); (2) (A)

---

### 【歷屆學測第 11 題】106學測：颱風移動路徑與平均速率

**【題目】**
颱風中心移動路徑趨勢，何者最接近？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Typhoon track.

**【解題思路 / 核心關鍵】**
觀察各時間段路徑長變化：先漸減、後漸增。

**【詳細解析】**
符合此變化趨勢者為 (D)。

**【標準答案】**
(D)

---

### 【歷屆學測第 12 題】108學測：熱氣球包裹自由落體末速

**【題目】**
5 m/s 上升，高 100m 掉落，著地速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Balloon package.

**【解題思路 / 核心關鍵】**
代入自由落體/上拋末速公式。

**【詳細解析】**
$v^2 = v_0^2 + 2gh = 5^2 + 2(10)(100) = 2025 \implies v = 45\text{ m/s}$。

**【標準答案】**
(B) 45 m/s

---

### 【歷屆學測第 13 題】110學測：地震波觀測站距離與時間差

**【題目】**
時間差 8s，求震央距離？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Seismic chart.

**【解題思路 / 核心關鍵】**
從地震波圖表直接對照 PS 波時間差。

**【詳細解析】**
由圖表閱讀 $P$ 波與 $S$ 波時間差 8s 對應距離約 $50\text{ km}$。

**【標準答案】**
(C) 50 km

---

## 第六章：歷屆指考與分科測驗試題（共 8 題）

### 【歷屆指考/分科第 1 題】99指考：車廂天花板落體相對運動

**【題目】**
火車加速，天花板落下一球 P，底板落下一球 Q，何者正確？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Train carriage.

**【解題思路 / 核心關鍵】**
車廂參考系中，兩球相對加速度相同，相對距離保持不變。

**【詳細解析】**
選 (A) 兩球落於 Q 點，高度差保持 1m。

**【標準答案】**
(A)

---

### 【歷屆指考/分科第 2 題】105指考：火車 v-t 梯形全程平均速度

**【題目】**
前 T/4 等加速，後 T/2 時間 v-t 如圖，求全程平均速度？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Trapezoid v-t.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
梯形面積等於總位移。

**【詳細解析】**
梯形面積 $\Delta x = \frac{5}{8} VT \implies \bar{v} = \frac{5}{8}V$。

**【標準答案】**
(C) 5/8 V

---

### 【歷屆指考/分科第 3 題】106指考：兩車 v-t 圖相遇與距離

**【題目】**
甲乙兩車 v-t 圖，何者正確？（應選 2 項）

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Two lines on v-t graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
v-t 圖斜率為加速度，面積差為距離。

**【詳細解析】**
甲車 $a = -10\text{ km/h}^2$，乙車 $a = -20\text{ km/h}^2$。選 (C)(E)。

**【標準答案】**
(C)(E)

---

### 【歷屆指考/分科第 4 題】108指考：汽車過路口加速度區間

**【題目】**
1000kg 汽車過路口，a-x 圖如右，何段作等速度運動？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: a-x graph.

<div align="center" style="margin: 1.25rem 0;">
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; max-width:100%; height:auto; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
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
</svg>
</div>

**【解題思路 / 核心關鍵】**
等速度運動即加速度等於零。

**【詳細解析】**
觀察 $a-x$ 圖，在 $200\text{ m} < x < 300\text{ m}$ 區間 $a=0$。選 (C)。

**【標準答案】**
(C) 200m < x < 300m

---

### 【歷屆指考/分科第 5 題】109指考：蘇花改隧道區間測速計算

**【題目】**
最高限速 70 km/h，測速區間 4.2 km，求最高最高速率？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Tunnel speed.

**【解題思路 / 核心關鍵】**
第一段等加速，第二段等速，第三段等減速。計算總時間許可下之最高速。

**【詳細解析】**
解得最高速率為 $62\text{ km/h}$。選 (B)。

**【標準答案】**
(B) 62 km/h

---

### 【歷屆指考/分科第 6 題】110指考：地震預警系統時間差

**【題目】**
P 波 3.9 km/s，S 波 215 km 預警，求應變時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Early warning.

**【解題思路 / 核心關鍵】**
計算 P 波傳遞時間減去系統反應時間。

**【詳細解析】**
P波傳遞時間 $215/3.9 \approx 55\text{ s}$，減去預警時間 22s 與發出時間 7s，得應變時間 $26\text{ s}$。選 (C)。

**【標準答案】**
(C) 26 s

---

### 【歷屆指考/分科第 7 題】111分科：單車與汽車煞車避撞最小加速度

**【題目】**
單車 3 m/s 等速，汽車 10 m/s，前方 24.5m 煞車，求最小加速度 a？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Car bicycle.

**【解題思路 / 核心關鍵】**
站在單車參考系分析相對運動。

**【詳細解析】**
汽車相對單車初速 $10 - 3 = 7\text{ m/s}$。$a_\text{相} = 7^2 / (2*24.5) = 1.0\text{ m/s}^2$。選 (C)。

**【標準答案】**
(C) 1.0 m/s^2

---

### 【歷屆指考/分科第 8 題】112分科：雜技表演者連續拋球運動

**【題目】**
空中保持 4 顆球，初速 v0，求最高點距離與時間？

**【圖表與 AI 繪圖 Prompt 說明】**
> *Prompt*: Juggling balls.

**【解題思路 / 核心關鍵】**
根據等時間間隔鉛直上拋運動性質。

**【詳細解析】**
每球空中時間 $t = 4\tau$，最高點高度 $H = \frac{1}{2} g (2\tau)^2 = 2g\tau^2$。選 (E)。

**【標準答案】**
(E) 2g tau^2

---

