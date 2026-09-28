# 單元一：§9-1 差角公式

## 本單元重點公式
1. **正弦和角與差角公式**：
   - $\sin(\alpha + \beta) = \sin\alpha \cos\beta + \cos\alpha \sin\beta$
   - $\sin(\alpha - \beta) = \sin\alpha \cos\beta - \cos\alpha \sin\beta$
2. **餘弦和角與差角公式**：
   - $\cos(\alpha + \beta) = \cos\alpha \cos\beta - \sin\alpha \sin\beta$
   - $\cos(\alpha - \beta) = \cos\alpha \cos\beta + \sin\alpha \sin\beta$
3. **正切和角與差角公式**：
   - $\tan(\alpha + \beta) = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha \tan\beta}$
   - $\tan(\alpha - \beta) = \frac{\tan\alpha - \tan\beta}{1 + \tan\alpha \tan\beta}$

---

## 題目列表

### 題目 1：例題 1 (1)
- **題目來源**：`IMG_20260928_221616.jpg`（第 1 頁）
- **題目**：求 $\cos 73^\circ \sin 43^\circ - \sin 73^\circ \cos 43^\circ$ 之值。
- **(圖片敘述)**：無（本題無圖片）
- **答案**：$-\frac{1}{2}$
- **解題關鍵**：利用正弦差角公式：$\sin(\alpha - \beta) = \sin\alpha \cos\beta - \cos\alpha \sin\beta$。
- **解析**：
  原式可重排為：
  $$\sin 43^\circ \cos 73^\circ - \cos 43^\circ \sin 73^\circ = \sin(43^\circ - 73^\circ) = \sin(-30^\circ) = -\sin 30^\circ = -\frac{1}{2}$$

---

### 題目 2：例題 1 (2)
- **題目來源**：`IMG_20260928_221616.jpg`（第 1 頁）
- **題目**：求 $\sin 222^\circ \sin 342^\circ + \sin 252^\circ \cos 402^\circ$ 之值。
- **(圖片敘述)**：無（本題無圖片）
- **答案**：$-\frac{1}{2}$
- **解題關鍵**：利用廣義角誘導公式將角度化為第一象限銳角，再套用餘弦和角公式：$\cos(\alpha + \beta) = \cos\alpha \cos\beta - \sin\alpha \sin\beta$。
- **解析**：
  1. 將各式化簡為銳角：
     - $\sin 222^\circ = \sin(180^\circ + 42^\circ) = -\sin 42^\circ$
     - $\sin 342^\circ = \sin(360^\circ - 18^\circ) = -\sin 18^\circ$
     - $\sin 252^\circ = \sin(270^\circ - 18^\circ) = -\cos 18^\circ$
     - $\cos 402^\circ = \cos(360^\circ + 42^\circ) = \cos 42^\circ$
  2. 代回原式：
     $$\text{原式} = (-\sin 42^\circ)(-\sin 18^\circ) + (-\cos 18^\circ)(\cos 42^\circ)$$
     $$= \sin 42^\circ \sin 18^\circ - \cos 42^\circ \cos 18^\circ$$
     $$= -(\cos 42^\circ \cos 18^\circ - \sin 42^\circ \sin 18^\circ)$$
     $$= -\cos(42^\circ + 18^\circ) = -\cos 60^\circ = -\frac{1}{2}$$

---

### 題目 3：類題 (1)
- **題目來源**：`IMG_20260928_221616.jpg`（第 1 頁）
- **題目**：求 $\cos 195^\circ \cos 75^\circ - \sin 195^\circ \sin 75^\circ$ 之值。
- **(圖片敘述)**：無（本題無圖片）
- **答案**：$0$
- **解題關鍵**：直接套用餘弦和角公式：$\cos\alpha \cos\beta - \sin\alpha \sin\beta = \cos(\alpha + \beta)$。
- **解析**：
  $$\text{原式} = \cos(195^\circ + 75^\circ) = \cos 270^\circ = 0$$

---

### 題目 4：類題 (2)
- **題目來源**：`IMG_20260928_221616.jpg`（第 1 頁）
- **題目**：求 $\sin 107^\circ \cos 47^\circ - \sin 313^\circ \cos 73^\circ$ 之值。
- **(圖片敘述)**：無（本題無圖片）
- **答案**：$\frac{\sqrt{3}}{2}$
- **解題關鍵**：利用誘導公式轉換角度：
  - $\sin 107^\circ = \sin(180^\circ - 73^\circ) = \sin 73^\circ$
  - $\sin 313^\circ = \sin(360^\circ - 47^\circ) = -\sin 47^\circ$
  再套用正弦和角公式。
- **解析**：
  1. 化簡角度：
     - $\sin 107^\circ = \sin 73^\circ$
     - $\sin 313^\circ = -\sin 47^\circ$
  2. 代回原式：
     $$\text{原式} = \sin 73^\circ \cos 47^\circ - (-\sin 47^\circ) \cos 73^\circ$$
     $$= \sin 73^\circ \cos 47^\circ + \cos 73^\circ \sin 47^\circ$$
     $$= \sin(73^\circ + 47^\circ) = \sin 120^\circ = \frac{\sqrt{3}}{2}$$
