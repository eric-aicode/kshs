# 第九章：三角函數(二) — § 9-1 差角公式

本講義完整整理 **§ 9-1 差角公式** 之重點公式、例題、類題以及習題 A、B 部分之題目、答案與詳細解析。

---

## 核心重點整理

### 一、差(和)角公式
1. $\sin(\alpha + \beta) = \sin\alpha \cos\beta + \cos\alpha \sin\beta$
2. $\sin(\alpha - \beta) = \sin\alpha \cos\beta - \cos\alpha \sin\beta$
3. $\cos(\alpha + \beta) = \cos\alpha \cos\beta - \sin\alpha \sin\beta$
4. $\cos(\alpha - \beta) = \cos\alpha \cos\beta + \sin\alpha \sin\beta$
5. $\tan(\alpha + \beta) = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha \tan\beta}$
6. $\tan(\alpha - \beta) = \frac{\tan\alpha - \tan\beta}{1 + \tan\alpha \tan\beta}$

### 二、倍角、半角公式
1. **二倍角公式**：
   - $\sin 2\theta = 2\sin\theta\cos\theta = \frac{2\tan\theta}{1+\tan^2\theta}$
   - $\cos 2\theta = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta = \frac{1-\tan^2\theta}{1+\tan^2\theta}$
   - $\tan 2\theta = \frac{2\tan\theta}{1-\tan^2\theta}$
   - **補助公式**：$\cos^2\theta = \frac{1+\cos 2\theta}{2}$，$\sin^2\theta = \frac{1-\cos 2\theta}{2}$
2. **半角公式**：
   - $\cos\frac{\theta}{2} = \pm\sqrt{\frac{1+\cos\theta}{2}}$
   - $\sin\frac{\theta}{2} = \pm\sqrt{\frac{1-\cos\theta}{2}}$
   - $\tan\frac{\theta}{2} = \pm\sqrt{\frac{1-\cos\theta}{1+\cos\theta}} = \frac{\sin\theta}{1+\cos\theta} = \frac{1-\cos\theta}{\sin\theta}$

---

## 例題與類題

### 例題 1
- **題目**：求
  1. $\cos 73^\circ \sin 43^\circ - \sin 73^\circ \cos 43^\circ$
  2. $\sin 222^\circ \sin 342^\circ + \sin 252^\circ \cos 402^\circ$
- **答案**：(1) $-\frac{1}{2}$ ； (2) $-\frac{1}{2}$
- **解析**：
  1. 利用和差角公式 $\sin(A-B) = \sin A\cos B - \cos A\sin B$：
     $$\cos 73^\circ \sin 43^\circ - \sin 73^\circ \cos 43^\circ = \sin(43^\circ - 73^\circ) = \sin(-30^\circ) = -\frac{1}{2}$$
  2. 將各角度化為第一象限角：
     $$\sin 222^\circ = \sin(180^\circ+42^\circ) = -\sin 42^\circ$$
     $$\sin 342^\circ = \sin(360^\circ-18^\circ) = -\sin 18^\circ$$
     $$\sin 252^\circ = \sin(270^\circ-18^\circ) = -\cos 18^\circ$$
     $$\cos 402^\circ = \cos(360^\circ+42^\circ) = \cos 42^\circ$$
     代入原式：
     $$\text{原式} = (-\sin 42^\circ)(-\sin 18^\circ) + (-\cos 18^\circ)(\cos 42^\circ) = \sin 42^\circ \sin 18^\circ - \cos 42^\circ \cos 18^\circ = -\cos(42^\circ+18^\circ) = -\cos 60^\circ = -\frac{1}{2}$$

#### 類題 1
- **題目**：求
  1. $\cos 195^\circ \cos 75^\circ - \sin 195^\circ \sin 75^\circ$
  2. $\sin 107^\circ \cos 47^\circ - \sin 313^\circ \cos 73^\circ$
- **答案**：(1) $0$ ； (2) $\frac{\sqrt{3}}{2}$
- **解析**：
  1. 利用餘弦和角公式：
     $$\cos 195^\circ \cos 75^\circ - \sin 195^\circ \sin 75^\circ = \cos(195^\circ+75^\circ) = \cos 270^\circ = 0$$
  2. 化簡角度：
     $$\sin 107^\circ = \sin(180^\circ-73^\circ) = \sin 73^\circ$$
     $$\sin 313^\circ = \sin(360^\circ-47^\circ) = -\sin 47^\circ$$
     代入原式：
     $$\text{原式} = \sin 73^\circ \cos 47^\circ - (-\sin 47^\circ)\cos 73^\circ = \sin 73^\circ \cos 47^\circ + \cos 73^\circ \sin 47^\circ = \sin(73^\circ+47^\circ) = \sin 120^\circ = \frac{\sqrt{3}}{2}$$

---

### 例題 2
- **題目**：已知 $\sin\alpha - \sin\beta = \frac{1}{2}$，$\cos\alpha + \cos\beta = \frac{1}{3}$，求 $\cos(\alpha+\beta) = ?$
- **答案**：$-\frac{59}{72}$
- **解析**：
  將已知兩式分別平方：
  1. $(\sin\alpha - \sin\beta)^2 = \sin^2\alpha - 2\sin\alpha\sin\beta + \sin^2\beta = \frac{1}{4}$
  2. $(\cos\alpha + \cos\beta)^2 = \cos^2\alpha + 2\cos\alpha\cos\beta + \cos^2\beta = \frac{1}{9}$
  兩式相加：
  $$(\sin^2\alpha+\cos^2\alpha) + (\sin^2\beta+\cos^2\beta) + 2(\cos\alpha\cos\beta - \sin\alpha\sin\beta) = \frac{1}{4} + \frac{1}{9}$$
  $$1 + 1 + 2\cos(\alpha+\beta) = \frac{13}{36} \implies 2\cos(\alpha+\beta) = \frac{13}{36} - 2 = -\frac{59}{36} \implies \cos(\alpha+\beta) = -\frac{59}{72}$$

#### 類題 2
- **題目**：已知 $\cos x - \cos y = b$，$\sin x + \sin y = a$，$a^2+b^2=3$，求 $\cos(x+y) = ?$
- **答案**：$-\frac{1}{2}$
- **解析**：
  將已知式分別平方展開：
  $$b^2 = \cos^2 x - 2\cos x\cos y + \cos^2 y$$
  $$a^2 = \sin^2 x + 2\sin x\sin y + \sin^2 y$$
  兩式相加：
  $$a^2 + b^2 = 2 - 2(\cos x\cos y - \sin x\sin y) = 2 - 2\cos(x+y)$$
  已知 $a^2+b^2 = 3$：
  $$2 - 2\cos(x+y) = 3 \implies -2\cos(x+y) = 1 \implies \cos(x+y) = -\frac{1}{2}$$

---

### 例題 3
- **題目**：平面上二點 $P(\sin\alpha, \cos\alpha)$，$Q(\cos\beta, \sin\beta)$ 且 $\alpha+\beta = 120^\circ$，求 $\overline{PQ}$ 長。
- **答案**：$\frac{\sqrt{6}-\sqrt{2}}{2}$
- **解析**：
  利用兩點距離公式：
  $$\overline{PQ}^2 = (\sin\alpha - \cos\beta)^2 + (\cos\alpha - \sin\beta)^2$$
  $$= (\sin^2\alpha + \cos^2\alpha) + (\cos^2\beta + \sin^2\beta) - 2(\sin\alpha\cos\beta + \cos\alpha\sin\beta)$$
  $$= 1 + 1 - 2\sin(\alpha+\beta) = 2 - 2\sin 120^\circ = 2 - 2 \cdot \frac{\sqrt{3}}{2} = 2 - \sqrt{3}$$
  開平方開雙重根號：
  $$\overline{PQ} = \sqrt{2 - \sqrt{3}} = \sqrt{\frac{4-2\sqrt{3}}{2}} = \frac{\sqrt{3}-1}{\sqrt{2}} = \frac{\sqrt{6}-\sqrt{2}}{2}$$

#### 類題 3
- **題目**：平面上二點 $P(\cos\alpha, \sin\alpha)$，$Q(\cos\beta, \sin\beta)$ 且 $\alpha-\beta = 120^\circ$，求 $\overline{PQ}$ 長。
- **答案**：$\sqrt{3}$
- **解析**：
  $$\overline{PQ}^2 = (\cos\alpha - \cos\beta)^2 + (\sin\alpha - \sin\beta)^2$$
  $$= (\cos^2\alpha+\sin^2\alpha) + (\cos^2\beta+\sin^2\beta) - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta)$$
  $$= 2 - 2\cos(\alpha-\beta) = 2 - 2\cos 120^\circ = 2 - 2(-1/2) = 3 \implies \overline{PQ} = \sqrt{3}$$

---

### 例題 4
- **題目**：在 $\triangle ABC$ 中，設 $\sin A = \frac{5}{13}$，$\cos B = -\frac{3}{5}$，求 $a:b:c = ?$
- **答案**：$25 : 52 : 33$
- **解析**：
  由正弦定理可知 $a:b:c = \sin A : \sin B : \sin C$。
  因為 $\cos B = -\frac{3}{5} < 0$，說明 $\angle B$ 為鈍角，故 $\angle A$ 必為銳角。
  - $\sin A = \frac{5}{13} \implies \cos A = \frac{12}{13}$
  - $\cos B = -\frac{3}{5} \implies \sin B = \frac{4}{5}$
  - $\sin C = \sin(180^\circ - (A+B)) = \sin(A+B) = \sin A\cos B + \cos A\sin B$
    $$= \left(\frac{5}{13}\right)\left(-\frac{3}{5}\right) + \left(\frac{12}{13}\right)\left(\frac{4}{5}\right) = -\frac{15}{65} + \frac{48}{65} = \frac{33}{65}$$
  通分比值：$\sin A = \frac{25}{65}$，$\sin B = \frac{52}{65}$，$\sin C = \frac{33}{65}$。
  故 $a:b:c = 25 : 52 : 33$。

#### 類題 4
- **題目**：$\triangle ABC$ 中，$\sin A = \frac{3}{5}$，$\cos B = -\frac{5}{13}$，求 $a:b:c = ?$
- **答案**：$13 : 20 : 11$
- **解析**：
  $\cos B < 0 \implies \angle B$ 為鈍角，$\angle A$ 為銳角。
  - $\sin A = \frac{3}{5} \implies \cos A = \frac{4}{5}$
  - $\cos B = -\frac{5}{13} \implies \sin B = \frac{12}{13}$
  - $\sin C = \sin(A+B) = \left(\frac{3}{5}\right)\left(-\frac{5}{13}\right) + \left(\frac{4}{5}\right)\left(\frac{12}{13}\right) = \frac{-15+48}{65} = \frac{33}{65}$
  通分得：$\sin A = \frac{39}{65}$，$\sin B = \frac{60}{65}$，$\sin C = \frac{33}{65}$。
  $a:b:c = 39 : 60 : 33 = 13 : 20 : 11$。

---

### 例題 5
- **題目**：四邊形 $ABCD$ 中，$\overline{AB} = 16$，$\overline{BC} = 25$，$\overline{CD} = 15$，$\angle ABC$ 和 $\angle BCD$ 皆為銳角，若 $\sin\angle ABC = \frac{24}{25}$，$\sin\angle BCD = \frac{4}{5}$，(1) 求 $\overline{BD}$ 之長 (2) 求 $\overline{AD}$ 之長。
- **答案**：(1) $20$ ； (2) $12$
- **圖形描述**：四邊形 $ABCD$ 底邊為水平台階線段 $\overline{BC}=25$。自左端點 $B$ 向左上方延伸出線段 $\overline{AB}=16$，右端點 $C$ 向右上方延伸出線段 $\overline{CD}=15$。連接對角線 $\overline{BD}$，將四邊形劃分為 $\triangle BCD$ 與 $\triangle ABD$ 兩個三角形。
- **解析**：
  1. 在 $\triangle BCD$ 中，$\sin\angle BCD = \frac{4}{5} \implies \cos\angle BCD = \frac{3}{5}$（銳角）。
     由餘弦定理：
     $$\overline{BD}^2 = 25^2 + 15^2 - 2(25)(15)\left(\frac{3}{5}\right) = 625 + 225 - 450 = 400 \implies \overline{BD} = 20$$
  2. 再求 $\cos\angle DBC$：
     $$\cos\angle DBC = \frac{25^2 + 20^2 - 15^2}{2(25)(20)} = \frac{800}{1000} = \frac{4}{5} \implies \sin\angle DBC = \frac{3}{5}$$
     設 $\angle ABD = \angle ABC - \angle DBC$：
     $$\cos\angle ABD = \cos\angle ABC \cos\angle DBC + \sin\angle ABC \sin\angle DBC$$
     已知 $\sin\angle ABC = \frac{24}{25} \implies \cos\angle ABC = \frac{7}{25}$：
     $$\cos\angle ABD = \left(\frac{7}{25}\right)\left(\frac{4}{5}\right) + \left(\frac{24}{25}\right)\left(\frac{3}{5}\right) = \frac{28+72}{125} = \frac{100}{125} = \frac{4}{5}$$
     在 $\triangle ABD$ 中利用餘弦定理求 $\overline{AD}$：
     $$\overline{AD}^2 = 16^2 + 20^2 - 2(16)(20)\left(\frac{4}{5}\right) = 256 + 400 - 512 = 144 \implies \overline{AD} = 12$$

#### 類題 5
- **題目**：如圖 $ABCD, CDEF, EFGH$ 皆為正方形，$\angle BHC = \alpha$，求 $\sin\alpha$。
- **答案**：$\frac{\sqrt{2}}{10}$
- **圖形描述**：由三個相同大小的正方形 $ABCD, CDEF, EFGH$ 自左至右一字排開組成長寬比為 $3:1$ 的大矩形 $ABGH$。底邊點為 $B, C, F, G$（左至右），頂邊點為 $A, D, E, H$（左至右）。連線 $\overline{HB}$ 與 $\overline{HC}$ 分別自右上頂點 $H$ 連接至底邊節點 $B$ 與 $C$，兩線段夾角即為 $\angle BHC = \alpha$。
- **解析**：
  設正方形邊長為 $1$。令 $\angle GHB = \theta_1$，$\angle GHC = \theta_2$，則 $\alpha = \theta_1 - \theta_2$。
  - 在直角 $\triangle HGB$ 中：$\overline{HG}=1, \overline{GB}=3 \implies \sin\theta_1 = \frac{3}{\sqrt{10}}, \cos\theta_1 = \frac{1}{\sqrt{10}}$
  - 在直角 $\triangle HGC$ 中：$\overline{HG}=1, \overline{GC}=2 \implies \sin\theta_2 = \frac{2}{\sqrt{5}}, \cos\theta_2 = \frac{1}{\sqrt{5}}$
  利用差角公式：
  $$\sin\alpha = \sin(\theta_1 - \theta_2) = \sin\theta_1\cos\theta_2 - \cos\theta_1\sin\theta_2 = \left(\frac{3}{\sqrt{10}}\right)\left(\frac{1}{\sqrt{5}}\right) - \left(\frac{1}{\sqrt{10}}\right)\left(\frac{2}{\sqrt{5}}\right) = \frac{1}{\sqrt{50}} = \frac{\sqrt{2}}{10}$$

---

### 例題 6
- **題目**：如圖，扇形 $OAB$ 半徑為 $14$，$P$ 為其弧上任一點，若 $P$ 到 $\overline{OA}$、$\overline{OB}$ 之距離分別為 $11$、$13$，求扇形圓心角大小。
- **答案**：$120^\circ$
- **圖形描述**：以 $O$ 為圓心、半徑為 $14$ 的扇形 $OAB$。弧上有一點 $P$。從 $P$ 點向射線 $OA$ 作垂線，垂足為 $E$，$\overline{PE}=11$；向射線 $OB$ 作垂線，垂足為 $F$，$\overline{PF}=13$。連接 $\overline{OP}=14$。
- **解析**：
  設 $\angle AOP = \alpha$，$\angle BOP = \beta$，則圓心角為 $\alpha + \beta$。
  - 直角 $\triangle OEP$ 中：$\sin\alpha = \frac{11}{14} \implies \cos\alpha = \frac{\sqrt{14^2-11^2}}{14} = \frac{\sqrt{75}}{14} = \frac{5\sqrt{3}}{14}$
  - 直角 $\triangle OFP$ 中：$\sin\beta = \frac{13}{14} \implies \cos\beta = \frac{\sqrt{14^2-13^2}}{14} = \frac{\sqrt{27}}{14} = \frac{3\sqrt{3}}{14}$
  $$\cos(\alpha+\beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta = \left(\frac{5\sqrt{3}}{14}\right)\left(\frac{3\sqrt{3}}{14}\right) - \left(\frac{11}{14}\right)\left(\frac{13}{14}\right) = \frac{45 - 143}{196} = -\frac{98}{196} = -\frac{1}{2}$$
  故圓心角 $\alpha + \beta = 120^\circ$。

#### 類題 6
- **題目**：有一吊車如圖，車身高 $\overline{AB} = 7$ 公尺，懸吊臂 $\overline{BC} = 25$ 公尺目前停放在地面上，當懸吊臂舉高至 $D$ 點時（$A, B, C, D$ 在同一平面上），已知位移的直線距離 $\overline{CD} = 30$ 公尺，若懸吊臂長不變，問此時 $D$ 點距地面 _____ 公尺。
- **答案**：$\frac{702}{25}$
- **圖形描述**：車身直立線段 $\overline{AB}=7$（$A$ 在地面）。懸吊臂原始位置 $\overline{BC}=25$ 躺於地面上，繞 $B$ 點旋轉舉高至 $D$ 點，$\overline{BD}=25$，移動直線距離 $\overline{CD}=30$。求 $D$ 點垂直投射到地面的高度。
- **解析**：
  在等腰 $\triangle BCD$ 中，$\overline{BC}=\overline{BD}=25, \overline{CD}=30$。
  從 $B$ 作垂線至 $\overline{CD}$，半角 $\angle DCB$：
  $$\cos\angle DCB = \frac{15}{25} = \frac{3}{5} \implies \sin\angle DCB = \frac{4}{5}$$
  在直角 $\triangle ABC$ 中，$\overline{AB}=7, \overline{BC}=25 \implies \overline{AC}=24$，故 $\sin\angle ACB = \frac{7}{25}, \cos\angle ACB = \frac{24}{25}$。
  $D$ 點仰角 $\angle DCA = \angle DCB + \angle ACB$：
  $$\sin\angle DCA = \sin\angle DCB \cos\angle ACB + \cos\angle DCB \sin\angle ACB = \left(\frac{4}{5}\right)\left(\frac{24}{25}\right) + \left(\frac{3}{5}\right)\left(\frac{7}{25}\right) = \frac{96+21}{125} = \frac{117}{125}$$
  $D$ 點距地面高度 $h = \overline{CD} \sin\angle DCA = 30 \times \frac{117}{125} = \frac{702}{25}$ 公尺。

---

### 例題 7
- **題目**：設 $0^\circ < \alpha < 90^\circ$, $-180^\circ < \beta < -90^\circ$，$\tan\alpha = \frac{5}{3}$，$\tan\beta = 4$，求 $\alpha + \beta = ?$
- **答案**：$-45^\circ$
- **解析**：
  利用切角和角公式：
  $$\tan(\alpha+\beta) = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta} = \frac{\frac{5}{3} + 4}{1 - \left(\frac{5}{3}\right)(4)} = \frac{\frac{17}{3}}{-\frac{17}{3}} = -1$$
  判斷角度範圍：
  - $\tan\alpha = \frac{5}{3} > 1 \implies 45^\circ < \alpha < 90^\circ$
  - $\beta$ 在第三象限且 $\tan\beta = 4 > 1 \implies -135^\circ < \beta < -90^\circ$
  兩式相加得 $-90^\circ < \alpha + \beta < 0^\circ$。切值為 $-1$ 且在此區間之角度為 $-45^\circ$。

#### 類題 7
- **題目**：$\sin A = \cos B = \frac{4}{5}$，$A, B$ 分別在二、四象限，求 $\tan(A-B) = ?$
- **答案**：$-\frac{7}{24}$
- **解析**：
  - $A$ 為第二象限角：$\sin A = \frac{4}{5} \implies \cos A = -\frac{3}{5} \implies \tan A = -\frac{4}{3}$
  - $B$ 為第四象限角：$\cos B = \frac{4}{5} \implies \sin B = -\frac{3}{5} \implies \tan B = -\frac{3}{4}$
  $$\tan(A-B) = \frac{\tan A - \tan B}{1 + \tan A\tan B} = \frac{-\frac{4}{3} - \left(-\frac{3}{4}\right)}{1 + \left(-\frac{4}{3}\right)\left(-\frac{3}{4}\right)} = \frac{-\frac{7}{12}}{2} = -\frac{7}{24}$$

---

### 例題 8
- **題目**：
  1. 已知兩直線 $L_1: y = 7x - 8$ 和 $L_2: y = \frac{3}{4}x - 1$，試求兩直線的夾角。
  2. 已知兩直線 $L_1: 2x + y = 5$ 和 $L_2: x + 2y = 7$，試求兩直線的夾角。
- **答案**：(1) $45^\circ$ 和 $135^\circ$ ； (2) $\tan^{-1}\frac{3}{4}$ 和 $\pi - \tan^{-1}\frac{3}{4}$
- **解析**：
  兩直線斜率為 $m_1, m_2$，夾角 $\theta$ 滿足 $\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|$：
  1. $m_1 = 7, m_2 = \frac{3}{4} \implies \tan\theta = \left|\frac{7 - 3/4}{1 + 21/4}\right| = \left|\frac{25/4}{25/4}\right| = 1 \implies \theta = 45^\circ$ 或 $135^\circ$。
  2. $m_1 = -2, m_2 = -1/2 \implies \tan\theta = \left|\frac{-2 - (-1/2)}{1 + (-2)(-1/2)}\right| = \left|\frac{-3/2}{2}\right| = \frac{3}{4}$。夾角為 $\tan^{-1}\frac{3}{4}$ 與 $\pi - \tan^{-1}\frac{3}{4}$。

#### 類題 8
- **題目**：已知兩直線 $L_1: y = 2x + 3$ 和 $L_2: y = \frac{1}{3}x - 2$，試求兩直線的夾角。
- **答案**：$45^\circ$ 和 $135^\circ$
- **解析**：
  $m_1 = 2, m_2 = 1/3 \implies \tan\theta = \left|\frac{2 - 1/3}{1 + 2/3}\right| = \left|\frac{5/3}{5/3}\right| = 1 \implies \theta = 45^\circ$ 或 $135^\circ$。

---

### 例題 9
- **題目**：在非直角 $\triangle ABC$ 中，求證：$\tan A + \tan B + \tan C = \tan A \tan B \tan C$
- **解析**：
  在 $\triangle ABC$ 中，$A + B + C = 180^\circ \implies A + B = 180^\circ - C$。
  兩邊取正切：
  $$\tan(A+B) = \tan(180^\circ - C) = -\tan C$$
  $$\frac{\tan A + \tan B}{1 - \tan A \tan B} = -\tan C$$
  交叉相乘展開：
  $$\tan A + \tan B = -\tan C(1 - \tan A \tan B) = -\tan C + \tan A \tan B \tan C$$
  移項即得：$\tan A + \tan B + \tan C = \tan A \tan B \tan C$（得證）。

#### 類題 9
- **題目**：在 $\triangle ABC$ 中，求證：$\tan\frac{A}{2}\tan\frac{B}{2} + \tan\frac{B}{2}\tan\frac{C}{2} + \tan\frac{C}{2}\tan\frac{A}{2} = 1$
- **解析**：
  $\frac{A}{2} + \frac{B}{2} + \frac{C}{2} = 90^\circ \implies \frac{A}{2} + \frac{B}{2} = 90^\circ - \frac{C}{2}$。
  兩邊取正切：
  $$\tan\left(\frac{A}{2} + \frac{B}{2}\right) = \tan\left(90^\circ - \frac{C}{2}\right) = \cot\frac{C}{2} = \frac{1}{\tan\frac{C}{2}}$$
  $$\frac{\tan\frac{A}{2} + \tan\frac{B}{2}}{1 - \tan\frac{A}{2}\tan\frac{B}{2}} = \frac{1}{\tan\frac{C}{2}}$$
  交叉相乘移項得：$\tan\frac{A}{2}\tan\frac{B}{2} + \tan\frac{B}{2}\tan\frac{C}{2} + \tan\frac{C}{2}\tan\frac{A}{2} = 1$（得證）。

---

### 例題 10
- **題目**：已知 $\sin\theta + \cos\theta = \frac{1}{2}$，求 (1) $\sin 2\theta$ ； (2) $\cos 2\theta$ ； (3) $\cos 4\theta$
- **答案**：(1) $-\frac{3}{4}$ ； (2) $\pm\frac{\sqrt{7}}{4}$ ； (3) $-\frac{1}{8}$
- **解析**：
  1. $(\sin\theta + \cos\theta)^2 = 1 + 2\sin\theta\cos\theta = 1 + \sin 2\theta = \frac{1}{4} \implies \sin 2\theta = -\frac{3}{4}$
  2. $\cos 2\theta = \pm\sqrt{1 - \sin^2 2\theta} = \pm\sqrt{1 - (-3/4)^2} = \pm\frac{\sqrt{7}}{4}$
  3. $\cos 4\theta = 2\cos^2 2\theta - 1 = 2\left(\frac{7}{16}\right) - 1 = \frac{7}{8} - 1 = -\frac{1}{8}$

#### 類題 10
- **題目**：設 $\cos^4\theta - \sin^4\theta = \frac{2}{3}$，求 $\cos 4\theta$。
- **答案**：$-\frac{1}{9}$
- **解析**：
  $$\cos^4\theta - \sin^4\theta = (\cos^2\theta - \sin^2\theta)(\cos^2\theta + \sin^2\theta) = \cos 2\theta = \frac{2}{3}$$
  $$\cos 4\theta = 2\cos^2 2\theta - 1 = 2\left(\frac{2}{3}\right)^2 - 1 = \frac{8}{9} - 1 = -\frac{1}{9}$$

---

### 例題 11
- **題目**：設 $\sin\theta = \frac{3}{5}$，$450^\circ < \theta < 630^\circ$，求 $\sin\frac{\theta}{2}$，$\cos\frac{\theta}{2}$。
- **答案**：$\sin\frac{\theta}{2} = -\frac{3}{\sqrt{10}}$，$\cos\frac{\theta}{2} = -\frac{1}{\sqrt{10}}$
- **解析**：
  $450^\circ < \theta < 630^\circ$ 且 $\sin\theta > 0 \implies 450^\circ < \theta < 540^\circ \implies \cos\theta = -\frac{4}{5}$。
  半角範圍：$225^\circ < \frac{\theta}{2} < 270^\circ$（第三象限，正弦與餘弦皆為負值）。
  - $\sin\frac{\theta}{2} = -\sqrt{\frac{1-\cos\theta}{2}} = -\sqrt{\frac{1 - (-4/5)}{2}} = -\sqrt{\frac{9}{10}} = -\frac{3}{\sqrt{10}}$
  - $\cos\frac{\theta}{2} = -\sqrt{\frac{1+\cos\theta}{2}} = -\sqrt{\frac{1 + (-4/5)}{2}} = -\sqrt{\frac{1}{10}} = -\frac{1}{\sqrt{10}}$

#### 類題 11
- **題目**：$270^\circ < \theta < 360^\circ$，若 $\sin\theta, \cos\theta$ 為方程式 $5x^2 - x + p = 0$ 的兩根，求 (1) $\cos\theta$ ； (2) $\cos\frac{\theta}{2}$。
- **答案**：(1) $\frac{4}{5}$ ； (2) $-\frac{3}{\sqrt{10}}$
- **解析**：
  韋達定理：$\sin\theta + \cos\theta = \frac{1}{5}$。
  $(\cos\theta - \sin\theta)^2 = 2 - (\sin\theta + \cos\theta)^2 = 2 - \frac{1}{25} = \frac{49}{25}$。
  在第四象限，$\cos\theta > 0, \sin\theta < 0 \implies \cos\theta - \sin\theta = \frac{7}{5}$。
  聯立解得 $\cos\theta = \frac{4}{5}, \sin\theta = -\frac{3}{5}$。
  1. $\cos\theta = \frac{4}{5}$。
  2. $135^\circ < \frac{\theta}{2} < 180^\circ$（第二象限角，餘弦為負）：
     $$\cos\frac{\theta}{2} = -\sqrt{\frac{1+4/5}{2}} = -\frac{3}{\sqrt{10}}$$

---

### 例題 12
- **題目**：$\triangle ABC$ 中，若 $\frac{\sin 2A}{\sin B} = \frac{\cos A}{\cos C}$，判別此三角形形狀。
- **答案**：直角三角形或等腰三角形
- **解析**：
  $$\frac{2\sin A\cos A}{\sin B} = \frac{\cos A}{\cos C}$$
  1. 若 $\cos A = 0 \implies \angle A = 90^\circ$（直角三角形）。
  2. 若 $\cos A \neq 0$，約去 $\cos A$ 得：$2\sin A\cos C = \sin B = \sin(A+C) = \sin A\cos C + \cos A\sin C$。
     $$\sin A\cos C - \cos A\sin C = 0 \implies \sin(A-C) = 0 \implies A = C \text{（等腰三角形）}$$

#### 類題 12
- **題目**：若 $\sin A\cos A = \sin B\cos B$，則 $\triangle ABC$ 為何種三角形？
- **答案**：直角三角形或等腰三角形
- **解析**：
  $$\sin 2A = \sin 2B \implies \sin 2A - \sin 2B = 0 \implies 2\cos(A+B)\sin(A-B) = 0$$
  - $\cos(A+B) = 0 \implies A+B = 90^\circ \implies \angle C = 90^\circ$（直角三角形）。
  - $\sin(A-B) = 0 \implies A = B$（等腰三角形）。

---

### 例題 13
- **題目**：設 $\sin\theta = \frac{6}{7}\cos\frac{\theta}{2}$，求 $\cos\theta$。
- **答案**：$-1$ 或 $\frac{31}{49}$
- **解析**：
  利用二倍角展開：$2\sin\frac{\theta}{2}\cos\frac{\theta}{2} = \frac{6}{7}\cos\frac{\theta}{2} \implies \cos\frac{\theta}{2}\left(2\sin\frac{\theta}{2} - \frac{6}{7}\right) = 0$。
  1. $\cos\frac{\theta}{2} = 0 \implies \cos\theta = 2\cos^2\frac{\theta}{2} - 1 = -1$。
  2. $\sin\frac{\theta}{2} = \frac{3}{7} \implies \cos\theta = 1 - 2\sin^2\frac{\theta}{2} = 1 - 2\left(\frac{9}{49}\right) = \frac{31}{49}$。

#### 類題 13
- **題目**：設 $\sin\theta = \frac{6}{5}\cos\frac{\theta}{2}$，求 $\cos\theta$。
- **答案**：$-1$ 或 $\frac{7}{25}$
- **解析**：
  $2\sin\frac{\theta}{2}\cos\frac{\theta}{2} = \frac{6}{5}\cos\frac{\theta}{2} \implies \cos\frac{\theta}{2}\left(2\sin\frac{\theta}{2} - \frac{6}{5}\right) = 0$。
  1. $\cos\frac{\theta}{2} = 0 \implies \cos\theta = -1$。
  2. $\sin\frac{\theta}{2} = \frac{3}{5} \implies \cos\theta = 1 - 2\left(\frac{9}{25}\right) = \frac{7}{25}$。

---

### 例題 14
- **題目**：若 $\pi < \theta < 2\pi$ 且 $15\sin^2\theta + 29\cos\theta = 27$，求 (1) $\cos 2\theta$ ； (2) $\sin 3\theta$ ； (3) $\tan\frac{\theta}{2}$。
- **答案**：(1) $-\frac{7}{25}$ ； (2) $-\frac{44}{125}$ （講義原答案卡誤漏負號記為 $\frac{44}{125}$，經計算確認為 $-\frac{44}{125}$） ； (3) $-\frac{1}{2}$
- **解析**：
  代入 $\sin^2\theta = 1 - \cos^2\theta$：
  $$15(1-\cos^2\theta) + 29\cos\theta = 27 \implies 15\cos^2\theta - 29\cos\theta + 12 = 0$$
  $$(3\cos\theta-4)(5\cos\theta-3) = 0 \implies \cos\theta = \frac{3}{5}$$
  因為 $\pi < \theta < 2\pi$ 且 $\cos\theta > 0 \implies \theta$ 在第四象限，故 $\sin\theta = -\frac{4}{5}$。
  1. $\cos 2\theta = 2\cos^2\theta - 1 = 2(9/25) - 1 = -\frac{7}{25}$
  2. $\sin 3\theta = 3\sin\theta - 4\sin^3\theta = 3(-4/5) - 4(-64/125) = -\frac{12}{5} + \frac{256}{125} = -\frac{44}{125}$
  3. $\tan\frac{\theta}{2} = \frac{\sin\theta}{1+\cos\theta} = \frac{-4/5}{1 + 3/5} = -\frac{1}{2}$

#### 類題 14
- **題目**：$(3\sin\theta - 2)(2\cos\theta + 3)(4\sec\theta - 3) = 0$，求 $1 + \sin\theta + \cos 2\theta + \sin 3\theta$。
- **答案**：$\frac{70}{27}$
- **解析**：
  由於 $2\cos\theta+3 \neq 0$ 且 $4\sec\theta-3=0 \implies \cos\theta=4/3$（無解），故僅 $3\sin\theta-2=0 \implies \sin\theta = \frac{2}{3}$。
  原式 $= 1 + \sin\theta + (1-2\sin^2\theta) + (3\sin\theta-4\sin^3\theta) = 2 + 4\sin\theta - 2\sin^2\theta - 4\sin^3\theta$
  $$= 2 + 4\left(\frac{2}{3}\right) - 2\left(\frac{4}{9}\right) - 4\left(\frac{8}{27}\right) = 2 + \frac{8}{3} - \frac{8}{9} - \frac{32}{27} = \frac{54+72-24-32}{27} = \frac{70}{27}$$

---

### 例題 15
- **題目**：求 $f(t) = \sin^2 2t - 3\cos^2 t$ 在 $0^\circ \le t \le 360^\circ$ 內的最大值。
- **答案**：$\frac{1}{16}$
- **解析**：
  $\sin^2 2t = (2\sin t\cos t)^2 = 4\sin^2 t\cos^2 t = 4(1-\cos^2 t)\cos^2 t$。
  設 $x = \cos^2 t \in [0, 1]$：
  $$f(x) = 4(1-x)x - 3x = -4x^2 + x = -4\left(x - \frac{1}{8}\right)^2 + \frac{1}{16}$$
  當 $x = \frac{1}{8} \in [0, 1]$ 時，最大值為 $\frac{1}{16}$。

#### 類題 15
- **題目**：$x \in \mathbb{R}$，$2\sin^2 x - \cos^2 2x$ 的最大值為 _____。
- **答案**：$\frac{5}{4}$
- **解析**：
  設 $k = \sin^2 x \in [0, 1]$，則 $\cos 2x = 1 - 2k$。
  $$\text{原式} = 2k - (1-2k)^2 = 2k - (1-4k+4k^2) = -4k^2 + 6k - 1 = -4\left(k - \frac{3}{4}\right)^2 + \frac{5}{4}$$
  當 $k = \frac{3}{4}$ 時，最大值為 $\frac{5}{4}$。

---

### 例題 16
- **題目**：$\cos 8\theta = \frac{1}{3}$，求 $(2\cos\theta + 1)(2\cos\theta - 1)(2\cos 2\theta - 1)(2\cos 4\theta - 1)$ 的值。
- **答案**：$\frac{5}{3}$
- **解析**：
  逐次利用 $(2\cos A + 1)(2\cos A - 1) = 4\cos^2 A - 1 = 2\cos 2A + 1$：
  1. $(2\cos\theta + 1)(2\cos\theta - 1) = 2\cos 2\theta + 1$
  2. $(2\cos 2\theta + 1)(2\cos 2\theta - 1) = 2\cos 4\theta + 1$
  3. $(2\cos 4\theta + 1)(2\cos 4\theta - 1) = 2\cos 8\theta + 1$
  代入 $\cos 8\theta = \frac{1}{3}$：原式 $= 2\left(\frac{1}{3}\right) + 1 = \frac{5}{3}$。

#### 類題 16
- **題目**：設 $\theta = \frac{\pi}{16}$，求 $\cos\theta\sin^5\theta - \sin\theta\cos^5\theta$ 的值。
- **答案**：$-\frac{\sqrt{2}}{8}$
- **解析**：
  $$\cos\theta\sin^5\theta - \sin\theta\cos^5\theta = \sin\theta\cos\theta(\sin^4\theta - \cos^4\theta) = \frac{1}{2}\sin 2\theta (-\cos 2\theta) = -\frac{1}{4}\sin 4\theta$$
  代入 $\theta = \frac{\pi}{16} \implies 4\theta = \frac{\pi}{4}$：
  $$\text{原式} = -\frac{1}{4}\sin\frac{\pi}{4} = -\frac{\sqrt{2}}{8}$$

---

### 例題 17
- **題目**：試推導出三倍角公式：$\sin 3\theta = 3\sin\theta - 4\sin^3\theta$。
- **解析**：
  $$\sin 3\theta = \sin(2\theta + \theta) = \sin 2\theta\cos\theta + \cos 2\theta\sin\theta$$
  $$= (2\sin\theta\cos\theta)\cos\theta + (1 - 2\sin^2\theta)\sin\theta$$
  $$= 2\sin\theta(1 - \sin^2\theta) + \sin\theta - 2\sin^3\theta$$
  $$= 3\sin\theta - 4\sin^3\theta \quad \text{（得證）}$$

#### 類題 17
- **題目**：試推導出三倍角公式：$\cos 3\theta = 4\cos^3\theta - 3\cos\theta$。
- **解析**：
  $$\cos 3\theta = \cos(2\theta + \theta) = \cos 2\theta\cos\theta - \sin 2\theta\sin\theta$$
  $$= (2\cos^2\theta - 1)\cos\theta - (2\sin\theta\cos\theta)\sin\theta$$
  $$= 2\cos^3\theta - \cos\theta - 2\cos\theta(1 - \cos^2\theta)$$
  $$= 4\cos^3\theta - 3\cos\theta \quad \text{（得證）}$$

---

## 習題 9-1 A 部分

1. **題目**：求
   1. $\cos 200^\circ \cos 280^\circ - \sin 100^\circ \sin 160^\circ$
   2. $\cos 133^\circ \sin 163^\circ + \sin 227^\circ \sin(-73^\circ)$
   3. $\sin^2 37.5^\circ - \sin^2 7.5^\circ$
   - **答案**：(1) $-\frac{1}{2}$ ； (2) $\frac{1}{2}$ ； (3) $\frac{\sqrt{2}}{4}$
   - **解析**：
     1. $-\cos 20^\circ \sin 10^\circ - \cos 10^\circ \sin 20^\circ = -\sin(20^\circ+10^\circ) = -\frac{1}{2}$
     2. $(-\cos 47^\circ)(\sin 17^\circ) + (-\sin 47^\circ)(-\cos 17^\circ) = \sin(47^\circ-17^\circ) = \frac{1}{2}$
     3. $\sin(37.5^\circ+7.5^\circ)\sin(37.5^\circ-7.5^\circ) = \sin 45^\circ \sin 30^\circ = \frac{\sqrt{2}}{4}$

2. **題目**：$\sec\alpha = \frac{5}{3}$，$\cot\beta = \frac{8}{15}$，$270^\circ < \alpha < 360^\circ$，$180^\circ < \beta < 270^\circ$，求 $\sin(\alpha+\beta)$。
   - **答案**：$-\frac{13}{85}$
   - **解析**：
     $\cos\alpha = 3/5, \sin\alpha = -4/5$ ； $\sin\beta = -15/17, \cos\beta = -8/17$。
     $$\sin(\alpha+\beta) = (-4/5)(-8/17) + (3/5)(-15/17) = \frac{32-45}{85} = -\frac{13}{85}$$

3. **題目**：$90^\circ < \alpha < 180^\circ$，$90^\circ < \beta < 180^\circ$，$\sin\alpha = \frac{1}{\sqrt{5}}$，$\cos\beta = \frac{-3}{\sqrt{10}}$，求 $\alpha+\beta =$ _____。
   - **答案**：$315^\circ$
   - **解析**：
     $\cos\alpha = -2/\sqrt{5}, \sin\beta = 1/\sqrt{10}$。
     $$\cos(\alpha+\beta) = (-2/\sqrt{5})(-3/\sqrt{10}) - (1/\sqrt{5})(1/\sqrt{10}) = \frac{5}{\sqrt{50}} = \frac{1}{\sqrt{2}}$$
     因為 $180^\circ < \alpha+\beta < 360^\circ$，故 $\alpha+\beta = 315^\circ$。

4. **題目**：求 $\frac{\tan 227^\circ - \tan 287^\circ}{1 - \tan 133^\circ \tan 107^\circ} = $ _____。
   - **答案**：$-\sqrt{3}$
   - **解析**：
     原式 $= \frac{\tan 47^\circ + \tan 73^\circ}{1 - \tan 47^\circ \tan 73^\circ} = \tan(47^\circ+73^\circ) = \tan 120^\circ = -\sqrt{3}$。

5. **題目**：$\sin 35^\circ = a$，$\cos 25^\circ = b$，則 $ab + \sqrt{1-a^2}\sqrt{1-b^2} = $ _____。
   - **答案**：$\frac{\sqrt{3}}{2}$
   - **解析**：
     原式 $= \sin 35^\circ \cos 25^\circ + \cos 35^\circ \sin 25^\circ = \sin(35^\circ+25^\circ) = \sin 60^\circ = \frac{\sqrt{3}}{2}$。

6. **題目**：$\triangle ABC$ 中，$\sin A = \frac{5}{13}$，$\cos B = \frac{3}{5}$，求 $\cos C = $ _____。
   - **答案**：$-\frac{16}{65}$
   - **解析**：
     $\cos A = 12/13, \sin B = 4/5$。
     $$\cos C = -\cos(A+B) = -(\cos A\cos B - \sin A\sin B) = -\left(\frac{36-20}{65}\right) = -\frac{16}{65}$$

7. **題目**：已知 $2\sin\alpha + 3\sin\beta = 1$，$2\cos\alpha - 3\cos\beta = -1$，求 $\cos(\alpha+\beta) = $ _____。
   - **答案**：$\frac{11}{12}$
   - **解析**：
     兩已知式平方相加：$(2\sin\alpha+3\sin\beta)^2 + (2\cos\alpha-3\cos\beta)^2 = 1 + 1 = 2$。
     $$4 + 9 - 12(\cos\alpha\cos\beta - \sin\alpha\sin\beta) = 2 \implies 13 - 12\cos(\alpha+\beta) = 2 \implies \cos(\alpha+\beta) = \frac{11}{12}$$

8. **題目**：$\cos\theta = -\frac{15}{17}$ 且 $\tan\theta > 0$，求 $\frac{1+\cos 2\theta}{\sin 2\theta} = $ _____。
   - **答案**：$\frac{15}{8}$
   - **解析**：
     $$\frac{1+\cos 2\theta}{\sin 2\theta} = \frac{2\cos^2\theta}{2\sin\theta\cos\theta} = \cot\theta$$
     在第三象限，$\sin\theta = -8/17 \implies \cot\theta = \frac{-15/17}{-8/17} = \frac{15}{8}$。

9. **題目**：若 $3+\sqrt{7}$ 為 $x^2 - (\tan\theta + \cot\theta)x + 2 = 0$ 之一根，求 $\sin 2\theta = $ _____。
   - **答案**：$\frac{1}{3}$
   - **解析**：
     兩根之積為 $2 \implies$ 另一根為 $3-\sqrt{7}$。兩根之和為 $6$。
     $$\tan\theta + \cot\theta = \frac{2}{\sin 2\theta} = 6 \implies \sin 2\theta = \frac{1}{3}$$

10. **題目**：$\sin\theta = \frac{8}{7}\cos\frac{\theta}{2}$，求 $\cos\theta = $ _____。
    - **答案**：$\frac{17}{49}$ 或 $-1$
    - **解析**：
      $2\sin\frac{\theta}{2}\cos\frac{\theta}{2} = \frac{8}{7}\cos\frac{\theta}{2} \implies \cos\frac{\theta}{2} = 0$ 或 $\sin\frac{\theta}{2} = \frac{4}{7}$。
      - $\cos\frac{\theta}{2}=0 \implies \cos\theta = -1$
      - $\sin\frac{\theta}{2}=4/7 \implies \cos\theta = 1 - 2(16/49) = \frac{17}{49}$

11. **題目**：求 $\cos^2 22.5^\circ = $ _____。
    - **答案**：$\frac{2+\sqrt{2}}{4}$
    - **解析**：
      $$\cos^2 22.5^\circ = \frac{1+\cos 45^\circ}{2} = \frac{1+\frac{\sqrt{2}}{2}}{2} = \frac{2+\sqrt{2}}{4}$$

12. **題目**：設 $\cos 2\theta = \frac{3}{5}$，$\sin 2\theta > 0$，則 $\tan\theta + \cot\theta = $ _____。
    - **答案**：$\frac{5}{2}$
    - **解析**：
      $\sin 2\theta = 4/5 \implies \tan\theta + \cot\theta = \frac{2}{\sin 2\theta} = \frac{2}{4/5} = \frac{5}{2}$。

13. **題目**：如圖，$\theta$ 為一有向角，$\overline{AB} = 2$，$\overline{BC} = 5$，則 $\sin 2\theta = $ _____。
    - **答案**：$-\frac{20}{29}$
    - **圖形描述**：直角 $\triangle ABC$ 中，$\angle B = 90^\circ$（直角邊 $\overline{AB}=2$, $\overline{BC}=5$）。頂點 $C$ 延伸射線形成的第二象限有向角 $\theta$，其補角為內部銳角 $\angle ACB$。
    - **解析**：
      銳角 $\phi = \angle ACB \implies \sin\phi = 2/\sqrt{29}, \cos\phi = 5/\sqrt{29}$。
      $\theta = 180^\circ - \phi \implies \sin\theta = 2/\sqrt{29}, \cos\theta = -5/\sqrt{29}$。
      $$\sin 2\theta = 2\sin\theta\cos\theta = 2(2/\sqrt{29})(-5/\sqrt{29}) = -\frac{20}{29}$$

14. **題目**：設 $270^\circ < \theta < 315^\circ$，且 $2\cot^2\theta + 7\cot\theta + 3 = 0$，求 $\cos 2\theta$ 之值。
    - **答案**：$-\frac{3}{5}$
    - **解析**：
      $(2\cot\theta+1)(\cot\theta+3) = 0$。在此區間 $\cot\theta = -1/2 \implies \tan\theta = -2$。
      $$\cos 2\theta = \frac{1-\tan^2\theta}{1+\tan^2\theta} = \frac{1-4}{1+4} = -\frac{3}{5}$$

15. **題目**：求 $\sin x + \cos 2x$ 之最大、最小值。
    - **答案**：最大值 $\frac{9}{8}$，最小值 $-2$
    - **解析**：
      $\cos 2x = 1 - 2\sin^2 x$。設 $t = \sin x \in [-1, 1]$：
      $$f(t) = -2t^2 + t + 1 = -2\left(t - \frac{1}{4}\right)^2 + \frac{9}{8}$$
      當 $t = 1/4$ 時最大值為 $9/8$；當 $t = -1$ 時最小值為 $-2$。

16. **題目**：$\theta$ 為銳角，且 $\sqrt{1+\sin\theta} - \sqrt{1-\sin\theta} = \frac{4}{5}$，求 $\cos\theta = $ _____。
    - **答案**：$\frac{17}{25}$
    - **解析**：
      $\sqrt{1+\sin\theta} - \sqrt{1-\sin\theta} = 2\sin\frac{\theta}{2} = \frac{4}{5} \implies \sin\frac{\theta}{2} = \frac{2}{5}$。
      $$\cos\theta = 1 - 2\sin^2\frac{\theta}{2} = 1 - 2(4/25) = \frac{17}{25}$$

17. **題目**：化簡 $\frac{\sin 3\theta}{\sin\theta} - \frac{\cos 3\theta}{\cos\theta} = $ _____。
    - **答案**：$2$
    - **解析**：
      $$\frac{\sin 3\theta\cos\theta - \cos 3\theta\sin\theta}{\sin\theta\cos\theta} = \frac{\sin 2\theta}{\frac{1}{2}\sin 2\theta} = 2$$

18. **題目**：$\triangle ABC$ 邊長為 $5$ 的正三角形，$P$ 點在三角形內部，若線段長度 $\overline{PB} = 4$ 且 $\overline{PC} = 3$，則 $\cos\angle ABP = $ _____。（四捨五入到小數點後第二位，$\sqrt{2} \approx 1.414, \sqrt{3} \approx 1.732$）
    - **答案**：$0.92$
    - **解析**：
      在 $\triangle PBC$ 中，邊長為 $3, 4, 5 \implies \angle BPC = 90^\circ$，$\cos\angle PBC = 4/5 = 0.8, \sin\angle PBC = 3/5 = 0.6$。
      正三角形內角 $\angle ABC = 60^\circ \implies \angle ABP = 60^\circ - \angle PBC$。
      $$\cos\angle ABP = \cos 60^\circ\cos\angle PBC + \sin 60^\circ\sin\angle PBC = (0.5)(0.8) + \left(\frac{\sqrt{3}}{2}\right)(0.6) = 0.4 + 0.3\sqrt{3} \approx 0.92$$

19. **題目**：若 $\sin(\alpha+\beta) = \frac{1}{2}$，$\sin(\alpha-\beta) = \frac{1}{3}$，求 $\log_{\sqrt{5}}(\tan\alpha\cot\beta)^2 = $ _____。
    - **答案**：$4$
    - **解析**：
      相加得 $2\sin\alpha\cos\beta = 5/6$，相減得 $2\cos\alpha\sin\beta = 1/6$。
      相除得 $\tan\alpha\cot\beta = 5 \implies \log_{\sqrt{5}} (5^2) = \log_{5^{1/2}} 25 = 4$。

20. **題目**：已知 $\cos 4\theta = \frac{1}{4}$，求 $\cos^4\theta + \sin^4\theta = $ _____。
    - **答案**：$\frac{13}{16}$
    - **解析**：
      $$\cos^4\theta + \sin^4\theta = 1 - \frac{1}{2}\sin^2 2\theta = 1 - \frac{1}{2}\left(\frac{1-\cos 4\theta}{2}\right) = 1 - \frac{3/4}{4} = \frac{13}{16}$$

21. **題目**：已知 $\triangle ABC$ 中，$\overline{AB} = 2$，$\overline{BC} = 3$ 且 $\angle A = 2\angle C$，則 $\overline{AC} = $ _____。
    - **答案**：$\frac{5}{2}$
    - **解析**：
      正弦定理：$\frac{3}{\sin 2\theta} = \frac{2}{\sin\theta} \implies \cos\theta = \frac{3}{4}$。
      $$\overline{AC} = 2 \cdot \frac{\sin 3\theta}{\sin\theta} = 2(4\cos^2\theta - 1) = 2\left(4\cdot\frac{9}{16} - 1\right) = \frac{5}{2}$$

22. **題目**：如圖，直角三角形 $ABD$ 中，$\angle A$ 為直角，$C$ 為 $\overline{AD}$ 邊上的一點。已知 $\overline{BC} = 6$，$\overline{AB} = 5$，$\angle ABD = 2\angle ABC$，則 $\overline{BD} = $ _____。
    - **答案**：$\frac{90}{7}$
    - **圖形描述**：直角 $\triangle ABD$ 左下頂點 $\angle A = 90^\circ$，垂直股 $\overline{AB}=5$。水平邊 $\overline{AD}$ 上有一點 $C$，斜邊 $\overline{BC}=6$。設 $\angle ABC = \theta$，則整個大角 $\angle ABD = 2\theta$。
    - **解析**：
      $\cos\theta = 5/6 \implies \cos 2\theta = 2(25/36) - 1 = 7/18$。
      在大直角 $\triangle ABD$ 中：$\overline{BD} = \frac{\overline{AB}}{\cos 2\theta} = \frac{5}{7/18} = \frac{90}{7}$。

23. **題目**：已知兩直線 $L_1: y = 2x + 3$，$L_2: y = \frac{1}{3}x - 2$，試求兩直線的夾角。
    - **答案**：$45^\circ, 135^\circ$
    - **解析**：
      $m_1 = 2, m_2 = 1/3 \implies \tan\theta = 1 \implies 45^\circ, 135^\circ$。

24. **題目**：設 $\sin\theta, \cos\theta$ 為 $25x^2 - 35x + 12 = 0$ 之二根，求 $2\sin^2\frac{\theta}{2}\left(\cos\frac{\theta}{2} - \sin\frac{\theta}{2}\right)^2$ 之值。
    - **答案**：$\frac{2}{25}$
    - **解析**：
      原式 $= (1 - \cos\theta)(1 - \sin\theta) = 1 - (\sin\theta+\cos\theta) + \sin\theta\cos\theta = 1 - \frac{35}{25} + \frac{12}{25} = \frac{2}{25}$。

---

## 習題 9-1 B 部分

1. **題目**：化簡 $\frac{\sin(\beta-\alpha)}{\sin\alpha\sin\beta} + \frac{\sin(\alpha-\gamma)}{\sin\gamma\sin\alpha} + \frac{\sin(\gamma-\beta)}{\sin\beta\sin\gamma} = $ _____。
   - **答案**：$0$
   - **解析**：
     拆開各分式：
     $$(\cot\alpha - \cot\beta) + (\cot\gamma - \cot\alpha) + (\cot\beta - \cot\gamma) = 0$$

2. **題目**：$\triangle ABC$ 中，求 $\frac{\cos A}{\sin B\sin C} + \frac{\cos B}{\sin C\sin A} + \frac{\cos C}{\sin A\sin B}$ 之值。
   - **答案**：$2$
   - **解析**：
     通分母：分子為 $\cos A\sin A + \cos B\sin B + \cos C\sin C = \frac{1}{2}(\sin 2A + \sin 2B + \sin 2C) = 2\sin A\sin B\sin C$。
     原式 $= \frac{2\sin A\sin B\sin C}{\sin A\sin B\sin C} = 2$。

3. **題目**：
   1. 設 $\cos 2\theta = t$，試以 $t$ 表示 $2(\sin^8\theta - \cos^8\theta)$。
   2. 今 $\cos 2\theta = t$，試以 $t$ 表示 $\cos^6\theta - \sin^6\theta$。
   - **答案**：(1) $-t - t^3$ ； (2) $\frac{t^3 + 3t}{4}$
   - **解析**：
     1. $2(\sin^8\theta - \cos^8\theta) = 2(\sin^2\theta-\cos^2\theta)(\sin^4\theta+\cos^4\theta) = 2(-t)(1 - \frac{1}{2}(1-t^2)) = -t(1+t^2) = -t - t^3$
     2. $\cos^6\theta - \sin^6\theta = (\cos^2\theta-\sin^2\theta)(\cos^4\theta+\cos^2\theta\sin^2\theta+\sin^4\theta) = t(1 - \frac{1}{4}(1-t^2)) = \frac{t^3+3t}{4}$

4. **題目**：若有 $\theta$ 使下述方程組不只有一組解，求 $\sin\theta + \cos\theta$ 的值。
   $$\begin{cases} (1+\cos\theta)x - y = 0 \\\\ -x + (1+\sin\theta)y = 0 \end{cases}$$
   - **答案**：$\sqrt{2}-1$
   - **解析**：
     行列式值為 $0 \implies (1+\cos\theta)(1+\sin\theta) - 1 = 0 \implies \sin\theta + \cos\theta + \sin\theta\cos\theta = 0$。
     設 $k = \sin\theta + \cos\theta \implies k + \frac{k^2-1}{2} = 0 \implies k^2 + 2k - 1 = 0 \implies k = -1 \pm \sqrt{2}$。
     合理範圍限制 $k \in [-\sqrt{2}, \sqrt{2}] \implies k = \sqrt{2}-1$。

5. **題目**：設銳角三角形 $ABC$ 的外接圓半徑為 $8$。已知外接圓圓心到 $\overline{AB}$ 的距離為 $2$，而到 $\overline{BC}$ 的距離為 $7$，則 $\overline{AC} = $ _____。（化成最簡根式）
   - **答案**：$4\sqrt{15}$
   - **圖形描述**：圓心為 $O$、半徑 $R=8$ 的外接圓，內接銳角 $\triangle ABC$。從圓心向兩弦作垂直線段：$O$ 到 $\overline{AB}$ 的垂線長為 $2$；$O$ 到 $\overline{BC}$ 的垂線長為 $7$。
   - **解析**：
     弦心距 $d_1 = R\cos C = 2 \implies \cos C = 1/4 \implies \sin C = \sqrt{15}/4$。
     弦心距 $d_2 = R\cos A = 7 \implies \cos A = 7/8 \implies \sin A = \sqrt{15}/8$。
     $$\sin B = \sin(A+C) = \left(\frac{\sqrt{15}}{8}\right)\left(\frac{1}{4}\right) + \left(\frac{7}{8}\right)\left(\frac{\sqrt{15}}{4}\right) = \frac{\sqrt{15}}{4}$$
     由正弦定理求邊長 $\overline{AC} = 2R\sin B = 2(8)\left(\frac{\sqrt{15}}{4}\right) = 4\sqrt{15}$。

6. **題目**：小雄最近去博物館參觀畫展，其中有一幅巨大壁畫，畫的上端至下共總長 $9$ 公尺，其下端距離地面 $4.7$ 公尺，小雄眼睛距離地面 $1.7$ 公尺，則他應該站在離牆 $x$ 公尺觀賞畫作，才可得最大視角 $\theta$。試求此時的 $x$，$\tan\theta$，並用數對 $(x, \tan\theta)$ 表示 _____。
   - **答案**：$(6, \frac{3}{4})$
   - **圖形描述**：壁畫垂直掛於牆面，壁畫底部距地面 $4.7$ 公尺、頂部距地面 $13.7$ 公尺（壁畫高 $9$ 公尺）。小雄眼睛高度為 $1.7$ 公尺，離牆距離為 $x$ 公尺。眼睛與壁畫頂部、底部的視線夾角為視角 $\theta$。
   - **解析**：
     眼睛水平高度投射至牆上，相對距離分別為 $12$ 公尺與 $3$ 公尺。
     $$\tan\theta = \tan(\alpha-\beta) = \frac{12/x - 3/x}{1 + 36/x^2} = \frac{9}{x + 36/x}$$
     算幾不等式：$x + 36/x \ge 2\sqrt{36} = 12$，等號成立於 $x = 6$。
     此時 $\tan\theta$ 最大值為 $9/12 = 3/4$，故數對為 $(6, 3/4)$。

7. **題目**：如附圖，$\angle ABC = \angle ADC = 90^\circ$，$\overline{AB} = 4$，$\overline{BC} = 3$，$\overline{CD} = 2$，若 $\overline{DH} \perp \overline{AB}$，則 $\overline{DH} = $ _____。
   - **答案**：$\frac{8\sqrt{21}+63}{25}$
   - **圖形描述**：四邊形 $ABCD$ 對角共線圓，對角線 $\overline{AC}=5$。$\triangle ABC$ 為 $3-4-5$ 直角三角形，$\triangle ADC$ 為以 $\overline{AC}=5, \overline{CD}=2, \overline{AD}=\sqrt{21}$ 的直角三角形。垂線 $\overline{DH}$ 為 $D$ 投射至直線 $AB$ 之垂直線段。
   - **解析**：
     $\angle BAD = \alpha + \beta$，其中 $\cos\alpha = 4/5, \sin\alpha = 3/5$ ； $\cos\beta = \sqrt{21}/5, \sin\beta = 2/5$。
     $$\sin(\alpha+\beta) = \frac{3\sqrt{21}+8}{25}$$
     垂直距離 $\overline{DH} = \overline{AD}\sin(\alpha+\beta) = \sqrt{21}\cdot \frac{3\sqrt{21}+8}{25} = \frac{63 + 8\sqrt{21}}{25}$。

8. **題目**：設 $\cos\theta, \sin\theta$ 為二次方程式 $3x^2 - x + b = 0$ 的二根，則 $\cos 3\theta - \sin 3\theta = $ _____。
   - **答案**：$\frac{25}{27}$
   - **解析**：
     $\cos\theta + \sin\theta = 1/3 \implies \sin\theta\cos\theta = -4/9$。
     $$\cos 3\theta - \sin 3\theta = 4(\cos^3\theta+\sin^3\theta) - 3(\cos\theta+\sin\theta)$$
     $$= 4(\cos\theta+\sin\theta)(1-\sin\theta\cos\theta) - 3(\cos\theta+\sin\theta) = 4(1/3)(1+4/9) - 1 = \frac{52}{27} - 1 = \frac{25}{27}$$

9. **題目**：設 $0 \le \theta \le 2\pi$ 且方程式 $x^2 - a = 0$ 之兩根恰為 $\cos\theta, \sin\theta$，請選出正確的選項：
   1. $\tan\theta = 1$
   2. $\sin(\theta + \frac{\pi}{4}) = 0$
   3. $\sin 2\theta = -1$
   4. $a = \frac{1}{2}$
   5. 滿足題設的 $\theta$ 只有一個
   - **答案**：(2)(3)(4)
   - **解析**：
     兩根一正一負：$\cos\theta = -\sin\theta \implies \tan\theta = -1 \implies \theta = 3\pi/4$ 或 $7\pi/4$。
     - (2) $\sin(\theta+\pi/4) = 0$ 正確。
     - (3) $\sin 2\theta = 2\sin\theta\cos\theta = -1$ 正確。
     - (4) $a = (\pm\sqrt{2}/2)^2 = 1/2$ 正確。

10. **題目**：試問共有幾個角度滿足 $0^\circ < \theta < 180^\circ$ 且 $\cos(3\theta - 60^\circ), \cos 3\theta, \cos(3\theta + 60^\circ)$ 依序成一等差數列？
    1. 1個
    2. 2個
    3. 3個
    4. 4個
    5. 5個
    - **答案**：(3) 3個
    - **解析**：
      等差中項條件：$2\cos 3\theta = \cos(3\theta - 60^\circ) + \cos(3\theta + 60^\circ) = 2\cos 3\theta \cos 60^\circ = \cos 3\theta$。
      $$\implies \cos 3\theta = 0$$
      當 $0^\circ < \theta < 180^\circ \implies 0^\circ < 3\theta < 540^\circ$。
      $3\theta = 90^\circ, 270^\circ, 450^\circ \implies \theta = 30^\circ, 90^\circ, 150^\circ$（共 3 個）。選 (3)。
