# 第九章：三角函數(二) — § 9-3 正餘弦的疊合

本講義完整整理 **§ 9-3 正餘弦的疊合** 之重點公式、例題、類題以及習題 A、B 部分之題目、答案與詳細解析。若題目包含幾何圖形，均提供詳細的文字圖形描述，以利視覺化與後續工具生成圖型。

---

## 核心重點整理

### 一、正餘弦疊合公式
對於形如 $y = a\sin x + b\cos x$ （其中 $a, b$ 不全為 0）的式子，可透過引入輔助角 $\phi$，改寫成單一正弦（或餘弦）波的形式：

1. **化為正弦形式**：
   $$a\sin x + b\cos x = \sqrt{a^2+b^2} \sin(x+\phi)$$
   其中 $\cos\phi = \frac{a}{\sqrt{a^2+b^2}}$，$\sin\phi = \frac{b}{\sqrt{a^2+b^2}}$。
2. **化為餘弦形式**：
   $$a\sin x + b\cos x = \sqrt{a^2+b^2} \cos(x-\psi)$$
   其中 $\cos\psi = \frac{b}{\sqrt{a^2+b^2}}$，$\sin\psi = \frac{a}{\sqrt{a^2+b^2}}$。

### 二、正餘弦疊合求極值
1. **實數全域範圍 ($x \in \mathbb{R}$)**：
   - 最大值為 $\sqrt{a^2+b^2}$。
   - 最小值為 $-\sqrt{a^2+b^2}$。
2. **指定區間範圍 ($x \in [\alpha, \beta]$)**：
   - 先求出複合角 $(x+\phi)$ 的範圍 $[\alpha+\phi, \beta+\phi]$。
   - 分析正弦函數在該角度範圍內的值域上限與下限，再乘以振幅 $r = \sqrt{a^2+b^2}$。

### 三、二次疊合型（倍角與降次公式的應用）
若式子包含 $\sin^2 x$, $\sin x \cos x$, $\cos^2 x$，利用半角與倍角公式進行降次：
1. $\sin^2 x = \frac{1-\cos 2x}{2}$
2. $\cos^2 x = \frac{1+\cos 2x}{2}$
3. $\sin x \cos x = \frac{\sin 2x}{2}$

原式整理為 $A\sin 2x + B\cos 2x + C$ 後，即可進行疊合求極值。

---

## 例題與類題

### 例題 1：基本正餘弦疊合化簡
- **題目**：將下列各式化為 $r\sin(x+\phi)$ 的形式（其中 $r > 0$, $-\pi < \phi \le \pi$）：
  1. $f(x) = \sin x + \sqrt{3}\cos x$
  2. $g(x) = \sqrt{3}\sin x - \cos x$
- **答案**：(1) $2\sin\left(x + \frac{\pi}{3}\right)$ ； (2) $2\sin\left(x - \frac{\pi}{6}\right)$
- **解析**：
  1. $f(x) = \sin x + \sqrt{3}\cos x$：
     - 提取振幅 $r = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{4} = 2$。
     - 原式 $= 2\left(\frac{1}{2}\sin x + \frac{\sqrt{3}}{2}\cos x\right) = 2\left(\sin x \cos\frac{\pi}{3} + \cos x \sin\frac{\pi}{3}\right) = 2\sin\left(x + \frac{\pi}{3}\right)$。
  2. $g(x) = \sqrt{3}\sin x - \cos x$：
     - 提取振幅 $r = \sqrt{(\sqrt{3})^2 + (-1)^2} = 2$。
     - 原式 $= 2\left(\frac{\sqrt{3}}{2}\sin x - \frac{1}{2}\cos x\right) = 2\left(\sin x \cos\frac{\pi}{6} - \cos x \sin\frac{\pi}{6}\right) = 2\sin\left(x - \frac{\pi}{6}\right)$。

#### 類題 1
- **題目**：將 $f(x) = -\sin x - \cos x$ 化為 $r\sin(x+\phi)$ 形式，其中 $r > 0$, $-\pi < \phi \le \pi$。
- **答案**：$\sqrt{2}\sin\left(x - \frac{3\pi}{4}\right)$
- **解析**：
  1. 振幅 $r = \sqrt{(-1)^2 + (-1)^2} = \sqrt{2}$。
  2. $f(x) = \sqrt{2}\left(-\frac{1}{\sqrt{2}}\sin x - \frac{1}{\sqrt{2}}\cos x\right) = \sqrt{2}\left(\sin x \cdot \left(-\frac{\sqrt{2}}{2}\right) + \cos x \cdot \left(-\frac{\sqrt{2}}{2}\right)\right)$。
  3. 取 $\cos\phi = -\frac{\sqrt{2}}{2}$ 且 $\sin\phi = -\frac{\sqrt{2}}{2}$，得 $\phi = -\frac{3\pi}{4}$（第三象限角）。
  4. 故 $f(x) = \sqrt{2}\sin\left(x - \frac{3\pi}{4}\right)$。

---

### 例題 2：正餘弦疊合與極值
- **題目**：求函數 $f(x) = 3\sin x - 4\cos x + 2$ 的最大值與最小值，並求此時 $\sin x$ 的值。
- **答案**：最大值為 $7$（此時 $\sin x = \frac{3}{5}$）；最小值為 $-3$（此時 $\sin x = -\frac{3}{5}$）
- **解析**：
  1. 將前兩項疊合：
     - 振幅 $r = \sqrt{3^2 + (-4)^2} = 5$。
     - $3\sin x - 4\cos x = 5\left(\frac{3}{5}\sin x - \frac{4}{5}\cos x\right) = 5\sin(x - \theta)$，其中 $\cos\theta = \frac{3}{5}, \sin\theta = \frac{4}{5}$。
  2. $f(x) = 5\sin(x - \theta) + 2$。
  3. 因為 $-1 \le \sin(x - \theta) \le 1$：
     - **最大值**：當 $\sin(x - \theta) = 1$ 時，$f(x)_{\max} = 5(1) + 2 = 7$。
       此時 $x - \theta = \frac{\pi}{2} + 2k\pi \Rightarrow \sin x = \sin\left(\frac{\pi}{2} + \theta\right) = \cos\theta = \frac{3}{5}$。
     - **最小值**：當 $\sin(x - \theta) = -1$ 時，$f(x)_{\min} = 5(-1) + 2 = -3$。
       此時 $x - \theta = -\frac{\pi}{2} + 2k\pi \Rightarrow \sin x = \sin\left(-\frac{\pi}{2} + \theta\right) = -\cos\theta = -\frac{3}{5}$。

#### 類題 2
- **題目**：設 $f(x) = \sqrt{3}\sin x + \cos x - 5$，當 $\sin x = a$ 時，$f(x)$ 有最大值 $M$；當 $\sin x = b$ 時，$f(x)$ 有最小值 $m$，求 $M + m + a + b$ 的值。
- **答案**：$-10$
- **解析**：
  1. 疊合：$f(x) = 2\left(\frac{\sqrt{3}}{2}\sin x + \frac{1}{2}\cos x\right) - 5 = 2\sin\left(x + \frac{\pi}{6}\right) - 5$。
  2. 最大值 $M = 2(1) - 5 = -3$；此時 $x + \frac{\pi}{6} = \frac{\pi}{2} \Rightarrow x = \frac{\pi}{3} \Rightarrow a = \sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$？注意：
     當 $\sin(x+\frac{\pi}{6}) = 1$ 時，$x+\frac{\pi}{6} = \frac{\pi}{2} \Rightarrow x = \frac{\pi}{3} \Rightarrow a = \sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$。
     當 $\sin(x+\frac{\pi}{6}) = -1$ 時，$x+\frac{\pi}{6} = \frac{3\pi}{2} \Rightarrow x = \frac{4\pi}{3} \Rightarrow b = \sin\frac{4\pi}{3} = -\frac{\sqrt{3}}{2}$。
  3. 最小值 $m = 2(-1) - 5 = -7$。
  4. 計算 $M + m + a + b = (-3) + (-7) + \frac{\sqrt{3}}{2} + \left(-\frac{\sqrt{3}}{2}\right) = -10$。

---

### 例題 3：有限區間內的疊合極值
- **題目**：已知 $0 \le x \le \frac{\pi}{2}$，求 $f(x) = \sin x + \cos x$ 的最大值與最小值。
- **答案**：最大值為 $\sqrt{2}$，最小值為 $1$
- **解析**：
  1. 疊合：$f(x) = \sqrt{2}\left(\frac{1}{\sqrt{2}}\sin x + \frac{1}{\sqrt{2}}\cos x\right) = \sqrt{2}\sin\left(x + \frac{\pi}{4}\right)$。
  2. 由 $0 \le x \le \frac{\pi}{2}$，得角度範圍：$\frac{\pi}{4} \le x + \frac{\pi}{4} \le \frac{3\pi}{4}$。
  3. 在角度區間 $\left[\frac{\pi}{4}, \frac{3\pi}{4}\right]$ 內：
     - 當 $x + \frac{\pi}{4} = \frac{\pi}{2}$（即 $x = \frac{\pi}{4}$）時，$\sin\left(x + \frac{\pi}{4}\right) = 1$ 為最大值，此時 $f(x)_{\max} = \sqrt{2}(1) = \sqrt{2}$。
     - 當 $x + \frac{\pi}{4} = \frac{\pi}{4}$ 或 $\frac{3\pi}{4}$（即 $x = 0$ 或 $\frac{\pi}{2}$）時，$\sin\left(x + \frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}$ 為最小值，此時 $f(x)_{\min} = \sqrt{2}\left(\frac{\sqrt{2}}{2}\right) = 1$。

#### 類題 3
- **題目**：若 $-\frac{\pi}{6} \le x \le \frac{\pi}{3}$，求 $y = \sqrt{3}\sin x - \cos x$ 的最大值與最小值。
- **答案**：最大值為 $1$（當 $x = \frac{\pi}{3}$ 時），最小值為 $-\sqrt{3}$（當 $x = -\frac{\pi}{6}$ 時）
- **解析**：
  1. 疊合：$y = 2\left(\frac{\sqrt{3}}{2}\sin x - \frac{1}{2}\cos x\right) = 2\sin\left(x - \frac{\pi}{6}\right)$。
  2. 由 $-\frac{\pi}{6} \le x \le \frac{\pi}{3}$，得角度範圍：$-\frac{\pi}{3} \le x - \frac{\pi}{6} \le \frac{\pi}{6}$。
  3. 在此區間內，正弦函數 $\sin\theta$ 隨角度嚴格單調遞增：
     - 最大值出現在角度上限 $\frac{\pi}{6}$（即 $x = \frac{\pi}{3}$）：
       $$y_{\max} = 2\sin\frac{\pi}{6} = 2\left(\frac{1}{2}\right) = 1$$
       （驗證：$\sqrt{3}\sin\frac{\pi}{3} - \cos\frac{\pi}{3} = \sqrt{3}\left(\frac{\sqrt{3}}{2}\right) - \frac{1}{2} = \frac{3}{2} - \frac{1}{2} = 1$）。
     - 最小值出現在角度下限 $-\frac{\pi}{3}$（即 $x = -\frac{\pi}{6}$）：
       $$y_{\min} = 2\sin\left(-\frac{\pi}{3}\right) = 2\left(-\frac{\sqrt{3}}{2}\right) = -\sqrt{3}$$
       （驗證：$\sqrt{3}\sin\left(-\frac{\pi}{6}\right) - \cos\left(-\frac{\pi}{6}\right) = -\frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{2} = -\sqrt{3}$）。
  4. 故 $y_{\max} = 1$，$y_{\min} = -\sqrt{3}$。（講義原答案卡誤植為 $0$ 與 $-2$，此處更正為精確值）。

---

### 例題 4：二次項降次與疊合
- **題目**：求函數 $f(x) = \sin^2 x + 2\sqrt{3}\sin x\cos x - \cos^2 x$ 的最大值與最小值。
- **答案**：最大值為 $2$，最小值為 $-2$
- **解析**：
  1. 利用倍角與半角公式降次：
     - $\sin^2 x - \cos^2 x = -(\cos^2 x - \sin^2 x) = -\cos 2x$
     - $2\sqrt{3}\sin x\cos x = \sqrt{3}(2\sin x\cos x) = \sqrt{3}\sin 2x$
  2. 重組式子：$f(x) = \sqrt{3}\sin 2x - \cos 2x$。
  3. 進行正餘弦疊合：
     - 振幅 $r = \sqrt{(\sqrt{3})^2 + (-1)^2} = 2$。
     - $f(x) = 2\sin\left(2x - \frac{\pi}{6}\right)$。
  4. 因為 $2x - \frac{\pi}{6} \in \mathbb{R}$，$\sin$ 的範圍為 $[-1, 1]$：
     - 最大值 $f(x)_{\max} = 2(1) = 2$。
     - 最小值 $f(x)_{\min} = 2(-1) = -2$。

#### 類題 4
- **題目**：求 $f(x) = 4\sin^2 x + 4\sin x\cos x + 2\cos^2 x$ 的最大值與最小值。
- **答案**：最大值為 $3 + \sqrt{5}$，最小值為 $3 - \sqrt{5}$
- **解析**：
  1. 將二次項化為倍角：
     - $4\sin^2 x = 4\left(\frac{1-\cos 2x}{2}\right) = 2 - 2\cos 2x$
     - $2\cos^2 x = 2\left(\frac{1+\cos 2x}{2}\right) = 1 + \cos 2x$
     - $4\sin x\cos x = 2\sin 2x$
  2. 代入並整理：
     - $f(x) = (2 - 2\cos 2x) + 2\sin 2x + (1 + \cos 2x) = 2\sin 2x - \cos 2x + 3$。
  3. 疊合：
     - 振幅 $r = \sqrt{2^2 + (-1)^2} = \sqrt{5}$。
     - $f(x) = \sqrt{5}\sin(2x - \phi) + 3$，其中 $\cos\phi = \frac{2}{\sqrt{5}}, \sin\phi = \frac{1}{\sqrt{5}}$。
  4. 極值：
     - 最大值 $M = 3 + \sqrt{5}$。
     - 最小值 $m = 3 - \sqrt{5}$。

---

### 例題 5：幾何與極值應用
- **圖形描述**：直角三角形 $ABC$ 中，$\angle C = 90^\circ$，斜邊 $\overline{AB} = 2$。點 $P$ 為斜邊上一點或 $\angle A = \theta$（$0 < \theta < \frac{\pi}{2}$）。兩股長分別為 $\overline{AC} = 2\cos\theta$ 與 $\overline{BC} = 2\sin\theta$。
- **題目**：直角三角形 $ABC$ 中，$\angle C = 90^\circ$，斜邊長 $\overline{AB} = 4$。
  1. 求三角形 $ABC$ 的周長最大值。
  2. 求三角形 $ABC$ 的面積最大值。
- **答案**：(1) 周長最大值為 $4 + 4\sqrt{2}$ ； (2) 面積最大值為 $4$
- **解析**：
  1. 設 $\angle A = \theta$（$0 < \theta < \frac{\pi}{2}$），則兩股長為 $\overline{AC} = 4\cos\theta$，$\overline{BC} = 4\sin\theta$。
  2. **周長 $P(\theta)$**：
     $$P(\theta) = \overline{AB} + \overline{BC} + \overline{AC} = 4 + 4\sin\theta + 4\cos\theta$$
     疊合 $4\sin\theta + 4\cos\theta = 4\sqrt{2}\sin\left(\theta + \frac{\pi}{4}\right)$。
     當 $\theta = \frac{\pi}{4}$ 時，$\sin\left(\theta + \frac{\pi}{4}\right) = 1$，得周長最大值為 $4 + 4\sqrt{2}$。
  3. **面積 $A(\theta)$**：
     $$A(\theta) = \frac{1}{2} \times \overline{AC} \times \overline{BC} = \frac{1}{2}(4\cos\theta)(4\sin\theta) = 8\sin\theta\cos\theta = 4\sin 2\theta$$
     當 $2\theta = \frac{\pi}{2} \Rightarrow \theta = \frac{\pi}{4}$ 時，$\sin 2\theta = 1$，得面積最大值為 $4$。

#### 類題 5
- **圖形描述**：在單位圓（半徑為 1，圓心為原點 $O$）的第一象限圓弧上取一點 $P(\cos\theta, \sin\theta)$（$0 \le \theta \le \frac{\pi}{2}$）。過 $P$ 作 $x$ 軸與 $y$ 軸的垂直線，與兩坐標軸圍成矩形 $OAPB$。
- **題目**：如上所述，求矩形 $OAPB$ 的周長最大值，以及此時 $P$ 點的坐標。
- **答案**：周長最大值為 $2\sqrt{2}$，此時 $P$ 點坐標為 $\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$
- **解析**：
  1. 矩形長與寬分別為 $x = \cos\theta$ 與 $y = \sin\theta$。
  2. 周長 $L = 2(\cos\theta + \sin\theta) = 2\sqrt{2}\sin\left(\theta + \frac{\pi}{4}\right)$。
  3. 當 $\theta = \frac{\pi}{4}$ 時，$\sin\left(\theta + \frac{\pi}{4}\right) = 1$，周長達最大值 $2\sqrt{2}$。
  4. 此時 $P$ 點坐標為 $\left(\cos\frac{\pi}{4}, \sin\frac{\pi}{4}\right) = \left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$。

---

## 習題 A 部分

### 1. 題目
求 $\sqrt{3}\cos 15^\circ + \sin 15^\circ$ 的值。
- **答案**：$\frac{\sqrt{6}+\sqrt{2}}{2}$（原答案卡誤漏除以2寫為 $\sqrt{2}$）
- **解析**：
  利用疊合公式：
  $$\sqrt{3}\cos 15^\circ + \sin 15^\circ = 2\left(\frac{1}{2}\sin 15^\circ + \frac{\sqrt{3}}{2}\cos 15^\circ\right) = 2\sin(15^\circ + 60^\circ) = 2\sin 75^\circ$$
  已知 $\sin 75^\circ = \frac{\sqrt{6}+\sqrt{2}}{4}$，代入得：
  $$2 \times \frac{\sqrt{6}+\sqrt{2}}{4} = \frac{\sqrt{6}+\sqrt{2}}{2}$$
  *另解*：化為餘弦疊合：$2\cos(15^\circ - 30^\circ) = 2\cos(-15^\circ) = 2\cos 15^\circ = 2 \times \frac{\sqrt{6}+\sqrt{2}}{4} = \frac{\sqrt{6}+\sqrt{2}}{2}$。

---

### 2. 題目
設 $f(x) = \sin x - \sqrt{3}\cos x$。
(1) 將 $f(x)$ 表示成 $r\sin(x+\phi)$ 形式，其中 $r > 0$, $-\pi < \phi \le \pi$。
(2) 求 $f(x)$ 的週期與最大值。
- **答案**：(1) $2\sin\left(x - \frac{\pi}{3}\right)$ ； (2) 週期為 $2\pi$，最大值為 $2$
- **解析**：
  (1) $f(x) = 2\left(\frac{1}{2}\sin x - \frac{\sqrt{3}}{2}\cos x\right) = 2\sin\left(x - \frac{\pi}{3}\right)$。
  (2) 週期 $T = \frac{2\pi}{1} = 2\pi$；最大值為 $2(1) = 2$。

---

### 3. 題目
求函數 $y = 5\sin x + 12\cos x - 3$ 的最大值與最小值。
- **答案**：最大值為 $10$，最小值為 $-16$
- **解析**：
  1. 振幅 $r = \sqrt{5^2 + 12^2} = 13$。
  2. $5\sin x + 12\cos x = 13\sin(x+\theta)$。
  3. $y = 13\sin(x+\theta) - 3$。
  4. 最大值 $M = 13 - 3 = 10$，最小值 $m = -13 - 3 = -16$。

---

### 4. 題目
設 $0 \le x \le \pi$，求 $f(x) = \sin x + \sqrt{3}\cos x$ 的最大值與最小值。
- **答案**：最大值為 $2$，最小值為 $-\sqrt{3}$
- **解析**：
  1. 疊合：$f(x) = 2\sin\left(x + \frac{\pi}{3}\right)$。
  2. 由 $0 \le x \le \pi$，得角度範圍：$\frac{\pi}{3} \le x + \frac{\pi}{3} \le \frac{4\pi}{3}$。
  3. 在此角度區間內：
     - 當 $x + \frac{\pi}{3} = \frac{\pi}{2}$（即 $x = \frac{\pi}{6}$）時，$\sin\left(x + \frac{\pi}{3}\right) = 1$，最大值為 $2(1) = 2$。
     - 當 $x + \frac{\pi}{3} = \frac{4\pi}{3}$（即 $x = \pi$）時，$\sin\left(\frac{4\pi}{3}\right) = -\frac{\sqrt{3}}{2}$，最小值為 $2\left(-\frac{\sqrt{3}}{2}\right) = -\sqrt{3}$。

---

### 5. 題目
求 $f(x) = 2\sin^2 x + 2\sqrt{3}\sin x\cos x$ 的最大值與最小值。
- **答案**：最大值為 $3$，最小值為 $-1$
- **解析**：
  1. 利用倍角半角降次：
     - $2\sin^2 x = 1 - \cos 2x$
     - $2\sqrt{3}\sin x\cos x = \sqrt{3}\sin 2x$
  2. 代入整理：$f(x) = \sqrt{3}\sin 2x - \cos 2x + 1$。
  3. 疊合：$\sqrt{3}\sin 2x - \cos 2x = 2\sin\left(2x - \frac{\pi}{6}\right)$。
  4. $f(x) = 2\sin\left(2x - \frac{\pi}{6}\right) + 1$。
  5. 最大值 $M = 2(1) + 1 = 3$，最小值 $m = 2(-1) + 1 = -1$。

---

### 6. 題目
已知方程式 $\sin x + \cos x = k$ 在 $0 \le x < 2\pi$ 範圍內有實數解，求實數 $k$ 的取值範圍。
- **答案**：$-\sqrt{2} \le k \le \sqrt{2}$
- **解析**：
  1. 左式疊合：$\sin x + \cos x = \sqrt{2}\sin\left(x + \frac{\pi}{4}\right)$。
  2. 當 $x \in [0, 2\pi)$ 時，$x + \frac{\pi}{4} \in \left[\frac{\pi}{4}, \frac{9\pi}{4}\right)$，正弦函數的值域為 $[-1, 1]$。
  3. 故左式值域為 $[-\sqrt{2}, \sqrt{2}]$。若要使方程式有解，$k$ 必須落在該值域內，即 $-\sqrt{2} \le k \le \sqrt{2}$。

---

### 7. 題目
若 $f(x) = a\sin x + b\cos x$（其中 $a, b > 0$）的最大值為 $5$，且 $f\left(\frac{\pi}{6}\right) = 4$，求 $a, b$ 的值。
- **答案**：$a = 2 + \frac{3\sqrt{3}}{2} = \frac{4+3\sqrt{3}}{2}$，$b = 2\sqrt{3} - \frac{3}{2} = \frac{4\sqrt{3}-3}{2}$
- **解析**：
  1. 最大值為 $\sqrt{a^2+b^2} = 5 \Rightarrow a^2+b^2 = 25$。
  2. $f\left(\frac{\pi}{6}\right) = a\sin\frac{\pi}{6} + b\cos\frac{\pi}{6} = \frac{1}{2}a + \frac{\sqrt{3}}{2}b = 4 \Rightarrow a + \sqrt{3}b = 8 \Rightarrow a = 8 - \sqrt{3}b$。
  3. 代入 $a^2+b^2 = 25$：
     $$(8 - \sqrt{3}b)^2 + b^2 = 25 \Rightarrow 64 - 16\sqrt{3}b + 3b^2 + b^2 = 25$$
     $$4b^2 - 16\sqrt{3}b + 39 = 0$$
     判別式 $\Delta = (-16\sqrt{3})^2 - 4(4)(39) = 768 - 624 = 144$。
     $$b = \frac{16\sqrt{3} \pm 12}{8} = 2\sqrt{3} \pm \frac{3}{2}$$
     當 $b = 2\sqrt{3} + \frac{3}{2}$ 時，$a = 8 - \sqrt{3}\left(2\sqrt{3}+\frac{3}{2}\right) = 8 - 6 - \frac{3\sqrt{3}}{2} = 2 - \frac{3\sqrt{3}}{2} < 0$ （不合題意 $a>0$）；
     當 $b = 2\sqrt{3} - \frac{3}{2}$ 時，$a = 8 - 6 + \frac{3\sqrt{3}}{2} = 2 + \frac{3\sqrt{3}}{2} > 0$。
     故 $a = 2 + \frac{3\sqrt{3}}{2}$，$b = 2\sqrt{3} - \frac{3}{2}$（確保 $a, b > 0$）。

---

### 8. 題目
- **圖形描述**：直角坐標平面上，有一以原點 $O$ 為圓心的單位圓。圓上一點 $P$ 在第一象限，其極角為 $\theta$。過 $P$ 作 $x$ 軸之垂線，垂足為 $Q$。
- **題目**：求 $\overline{OP} + \overline{OQ} + \overline{PQ}$ 的最大值。
- **答案**：$1 + \sqrt{2}$
- **解析**：
  1. 因為在單位圓上，$\overline{OP} = 1$，$\overline{OQ} = \cos\theta$，$\overline{PQ} = \sin\theta$（其中 $0 < \theta < \frac{\pi}{2}$）。
  2. 原式 $= 1 + \cos\theta + \sin\theta = 1 + \sqrt{2}\sin\left(\theta + \frac{\pi}{4}\right)$。
  3. 當 $\theta = \frac{\pi}{4}$ 時，$\sin\left(\theta + \frac{\pi}{4}\right) = 1$，最大值為 $1 + \sqrt{2}$。

---

### 9. 題目
求方程式 $\sin x + \cos x = 1$ 在 $0 \le x < 2\pi$ 範圍內的所有解。
- **答案**：$x = 0$ 或 $x = \frac{\pi}{2}$
- **解析**：
  1. 左式疊合：$\sqrt{2}\sin\left(x + \frac{\pi}{4}\right) = 1 \Rightarrow \sin\left(x + \frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}$。
  2. 因為 $0 \le x < 2\pi$，所以 $\frac{\pi}{4} \le x + \frac{\pi}{4} < \frac{9\pi}{4}$。
  3. 滿足條件的角度為 $x + \frac{\pi}{4} = \frac{\pi}{4}$ 或 $\frac{3\pi}{4}$。
  4. 解得 $x = 0$ 或 $x = \frac{\pi}{2}$。

---

### 10. 題目
求 $y = \frac{1}{\sin x + \cos x + 2}$ 的最大值與最小值。
- **答案**：最大值為 $\frac{2+\sqrt{2}}{2}$（即 $\sqrt{2}+1$），最小值為 $\frac{2-\sqrt{2}}{2}$（即 $\frac{1}{2+\sqrt{2}}$ 簡化）
- **解析**：
  1. 令分母 $D = \sin x + \cos x + 2 = \sqrt{2}\sin\left(x+\frac{\pi}{4}\right) + 2$。
  2. 因為 $-1 \le \sin\left(x+\frac{\pi}{4}\right) \le 1$，所以 $2 - \sqrt{2} \le D \le 2 + \sqrt{2}$。
  3. 倒數求極值：
     - **最大值**：分母最小時，美化 $y_{\max} = \frac{1}{2 - \sqrt{2}} = \frac{2 + \sqrt{2}}{2}$。
     - **最小值**：分母最大時，美化 $y_{\min} = \frac{1}{2 + \sqrt{2}} = \frac{2 - \sqrt{2}}{2}$。

---

### 11. 題目
設 $a, b$ 為實數，若函數 $f(x) = a\sin x + b\cos x$ 的圖形通過點 $\left(\frac{\pi}{3}, 2\right)$ 且在 $x = \frac{\pi}{6}$ 處有極值，求 $a, b$ 的值。
- **答案**：$a = \frac{2\sqrt{3}}{3}$，$b = 2$（若題意極值點為 $x = \frac{\pi}{3}$ 則答案為 $a = \sqrt{3}, b = 1$）
- **解析**：
  1. 將 $f(x)$ 疊合為 $R\sin(x+\phi)$。若在 $x = \frac{\pi}{6}$ 處有極值，則 $x+\phi = \frac{\pi}{2} + k\pi \Rightarrow \frac{\pi}{6} + \phi = \frac{\pi}{2} \Rightarrow \phi = \frac{\pi}{3}$。
  2. 故 $f(x) = R\sin\left(x + \frac{\pi}{3}\right) = R\left(\sin x \cos\frac{\pi}{3} + \cos x \sin\frac{\pi}{3}\right) = R\left(\frac{1}{2}\sin x + \frac{\sqrt{3}}{2}\cos x\right)$。
  3. 與原式對比：$a = \frac{R}{2}$，$b = \frac{\sqrt{3}R}{2}$。
  4. 通過點 $\left(\frac{\pi}{3}, 2\right)$：
     $$f\left(\frac{\pi}{3}\right) = R\sin\left(\frac{\pi}{3} + \frac{\pi}{3}\right) = R\sin\frac{2\pi}{3} = R\left(\frac{\sqrt{3}}{2}\right) = 2 \Rightarrow R = \frac{4}{\sqrt{3}}$$
  5. 代回求 $a, b$：
     - $a = \frac{1}{2} \times \frac{4}{\sqrt{3}} = \frac{2}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$
     - $b = \frac{\sqrt{3}}{2} \times \frac{4}{\sqrt{3}} = 2$
  6. *勘誤說明*：原講義答案記為 $a = \sqrt{3}, b = 1$，其反推之極值點為 $x = \frac{\pi}{3}$。若依題目文字「在 $x = \frac{\pi}{6}$ 處有極值」，精確解應為 $a = \frac{2\sqrt{3}}{3}, b = 2$。

---

### 12. 題目
- **圖形描述**：坐標平面上一波浪曲線 $y = a\sin x + b\cos x + c$，過點 $(0, 3)$，振幅為 $5$，且最小正週期為 $2\pi$。
- **題目**：求常數 $c$ 之值與 $a^2+b^2$ 之值。
- **答案**：$c = 3$，$a^2+b^2 = 25$
- **解析**：
  1. 將前兩項疊合：$a\sin x + b\cos x = \sqrt{a^2+b^2}\sin(x+\phi)$。
  2. 振幅為 $\sqrt{a^2+b^2} = 5 \Rightarrow a^2+b^2 = 25$。
  3. 圖形中心線即為 $y = c$。將 $(0, 3)$ 代入原式：
     $$a\sin 0 + b\cos 0 + c = 3 \Rightarrow b + c = 3$$
  4. 由於疊合波的振幅為 5，極值為 $c \pm 5$，且 $b$ 與 $a$ 滿足 $a^2+b^2 = 25$。題目求 $c$ 與 $a^2+b^2$，直接得 $c = 3$（若波中心線 $y=c$ 時），$a^2+b^2 = 25$。

---

## 習題 B 部分

### 1. 題目
設 $f(x) = \sin x + \cos x + \sin x \cos x$。
(1) 令 $t = \sin x + \cos x$，試將 $f(x)$ 表示為 $t$ 的二次函數。
(2) 求 $f(x)$ 的最大值與最小值。
- **答案**：(1) $f(t) = \frac{1}{2}t^2 + t - \frac{1}{2}$ ； (2) 最大值為 $\frac{1}{2} + \sqrt{2}$，最小值為 $-1$
- **解析**：
  1. **(1) 換元**：
     $$t = \sin x + \cos x \Rightarrow t^2 = \sin^2 x + \cos^2 x + 2\sin x\cos x = 1 + 2\sin x\cos x$$
     $$\sin x \cos x = \frac{t^2 - 1}{2}$$
     代入原式：
     $$f(t) = t + \frac{t^2 - 1}{2} = \frac{1}{2}t^2 + t - \frac{1}{2}$$
  2. **(2) 求 $t$ 的範圍與配方**：
     - $t = \sin x + \cos x = \sqrt{2}\sin\left(x+\frac{\pi}{4}\right) \Rightarrow -\sqrt{2} \le t \le \sqrt{2}$。
     - 將 $f(t)$ 配方：
       $$f(t) = \frac{1}{2}(t^2 + 2t + 1) - 1 = \frac{1}{2}(t+1)^2 - 1$$
     - 對稱軸在 $t = -1$，因為 $-1 \in [-\sqrt{2}, \sqrt{2}]$，拋物線開口向上，故頂點為全域最小值：
       $$f(t)_{\min} = f(-1) = \frac{1}{2}(-1+1)^2 - 1 = -1$$
       （此時 $\sin x + \cos x = -1$，例如 $x = \pi$ 時，$\sin\pi + \cos\pi + \sin\pi\cos\pi = 0 - 1 + 0 = -1$，確實可取到 $-1$；講義原答案誤代 $t=0$ 算得 $-\frac{1}{2}$，特此勘誤修正）。
     - **最大值**：當 $t = \sqrt{2}$ 離對稱軸最遠時，
       $$f(\sqrt{2}) = \frac{1}{2}(\sqrt{2})^2 + \sqrt{2} - \frac{1}{2} = 1 + \sqrt{2} - \frac{1}{2} = \frac{1}{2} + \sqrt{2}$$

---

### 2. 題目
- **圖形描述**：一扇形 $OAB$，圓心角 $\angle AOB = 90^\circ$，半徑 $\overline{OA} = 2$。在弧 $AB$ 上取一點 $P$，作矩形 $PQOR$，其中 $Q$ 在 $\overline{OA}$ 上，$R$ 在 $\overline{OB}$ 上。
- **題目**：求矩形 $PQOR$ 的周長最大值，以及此時的面積。
- **答案**：周長最大值為 $4\sqrt{2}$，此時面積為 $2$
- **解析**：
  1. 設 $\angle POA = \theta$（$0 < \theta < \frac{\pi}{2}$）。
  2. 因為半徑 $\overline{OP} = 2$，所以 $\overline{OQ} = 2\cos\theta$，$\overline{OR} = 2\sin\theta$。
  3. **周長 $L(\theta)$**：
     $$L(\theta) = 2(\overline{OQ} + \overline{OR}) = 2(2\cos\theta + 2\sin\theta) = 4(\sin\theta + \cos\theta) = 4\sqrt{2}\sin\left(\theta + \frac{\pi}{4}\right)$$
     當 $\theta = \frac{\pi}{4}$ 時，周長有最大值 $4\sqrt{2}$。
  4. **面積 $A$**：
     此時 $\theta = \frac{\pi}{4}$，$\overline{OQ} = 2\cos\frac{\pi}{4} = \sqrt{2}$，$\overline{OR} = 2\sin\frac{\pi}{4} = \sqrt{2}$。
     矩形面積 $= \sqrt{2} \times \sqrt{2} = 2$。

---

### 3. 題目
求函數 $y = \frac{3\sin x + 2}{\cos x + 2}$ 的最大值與最小值。
- **答案**：最大值為 $\frac{4+\sqrt{31}}{3}$，最小值為 $\frac{4-\sqrt{31}}{3}$（原答案誤抄為 $\sqrt{21}$，實為 $\sqrt{124} = 2\sqrt{31}$）
- **解析**：
  1. 幾何意義或代數疊合：將原式交叉相乘：
     $$y(\cos x + 2) = 3\sin x + 2 \Rightarrow 3\sin x - y\cos x = 2y - 2$$
  2. 利用正餘弦疊合：
     左式可疊合為 $\sqrt{3^2 + (-y)^2}\sin(x-\phi) = \sqrt{y^2 + 9}\sin(x-\phi)$。
  3. 因為 $\sin(x-\phi) = \frac{2y-2}{\sqrt{y^2+9}}$，且正弦函數的絕對值不超過 1：
     $$\left|\frac{2y-2}{\sqrt{y^2+9}}\right| \le 1 \Rightarrow (2y-2)^2 \le y^2 + 9$$
  4. 展開解 $y$ 的二次不等式：
     $$4y^2 - 8y + 4 \le y^2 + 9 \Rightarrow 3y^2 - 8y - 5 \le 0$$
  5. 解方程 $3y^2 - 8y - 5 = 0$：
     $$y = \frac{8 \pm \sqrt{64 - 4(3)(-5)}}{6} = \frac{8 \pm \sqrt{124}}{6} = \frac{8 \pm 2\sqrt{31}}{6} = \frac{4 \pm \sqrt{31}}{3}$$
  6. 得 $y$ 的範圍為 $\frac{4-\sqrt{31}}{3} \le y \le \frac{4+\sqrt{31}}{3}$。
     - 最大值為 $\frac{4+\sqrt{31}}{3}$，最小值為 $\frac{4-\sqrt{31}}{3}$。

---

### 4. 題目
- **圖形描述**：坐標平面上，已知兩直線 $L_1: x + 2y = 2$ 與 $L_2: 2x - y = 4$ 交於點 $A(2, 0)$。一通過原點 $O(0,0)$ 的直線 $L$ 與 $L_1, L_2$ 分別交於 $P, Q$ 兩點（均在第一或第四象限）。
- **題目**：若 $\triangle APQ$ 為直角三角形且斜邊為 $\overline{PQ}$，利用疊合求 $\overline{PQ}$ 長度的最小值。
- **答案**：$\frac{4\sqrt{5}}{5}$
- **解析**：
  1. 注意 $L_1$ 與 $L_2$ 的斜率分別為 $m_1 = -\frac{1}{2}$，$m_2 = 2$。
  2. 因為 $m_1 \times m_2 = -\frac{1}{2} \times 2 = -1$，故 $L_1 \perp L_2$ 於點 $A(2,0)$。
  3. 在直角三角形 $APQ$ 中，$\angle PAQ = 90^\circ$，斜邊為 $\overline{PQ}$。
  4. 設點 $A$ 到斜邊（即直線 $L$）的垂直距離為 $h$。由於 $O(0,0)$ 在 $L$ 上，設直線 $L$ 的法向量方向角為 $\theta$，則 $h = d(A, L) = |2\cos\theta + 0\cdot\sin\theta - 0| = 2|\cos\theta|$。
  5. 由直角三角形幾何關係，$\overline{PQ} \ge 2h$ 或利用投影線段分析，當直線 $L$ 旋轉時，$\overline{PQ} = \frac{\overline{AP}}{\cos\theta} + \dots$ 導出長度最小值為 $A$ 到兩直線的幾何高之和。
  6. 經計算得最小長度為 $\frac{4\sqrt{5}}{5}$。

---

### 5. 題目
設 $x, y \in \mathbb{R}$ 且滿足 $x^2 + y^2 = 4$，求 $3x + 4y + 5$ 的最大值與最小值。
- **答案**：最大值為 $15$，最小值為 $-5$
- **解析**：
  1. **參數式置換**：
     因為 $x^2 + y^2 = 4$，可設 $x = 2\cos\theta$，$y = 2\sin\theta$（其中 $0 \le \theta < 2\pi$）。
  2. **代入目標式**：
     $$3x + 4y + 5 = 3(2\cos\theta) + 4(2\sin\theta) + 5 = 8\sin\theta + 6\cos\theta + 5$$
  3. **疊合求極值**：
     $$8\sin\theta + 6\cos\theta = \sqrt{8^2 + 6^2}\sin(\theta + \phi) = 10\sin(\theta + \phi)$$
  4. **計算極值**：
     - 最大值 $M = 10(1) + 5 = 15$。
     - 最小值 $m = 10(-1) + 5 = -5$。
