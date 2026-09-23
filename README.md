# ⚛️ 高中學習中心 · 互動題庫系統 (High School Study Center)

> 一個現代化、純前端、無伺服器依賴的高中多學科互動刷題與學習平台。  
> 具備**大字體清晰排版**、**抗暴雷做題（三段式解析展開）**、**KaTeX 數學公式排版**與**深淺色模式**。

---

## 🌟 核心特色

1. **抗暴雷做題體驗**：
   - 預設僅顯示題目與選項，避免直接看到答案干擾自主思考。
   - `💡 查看破題思維`：點擊展開核心觀念與破題切入點。
   - `📝 查看詳細推導與算式`：點擊展開逐步計算與代數推導。
   - `🎯 查看參考答案`：可單獨掀開答案標籤，快速對答案。
2. **大字體與無障礙設計**：
   - 頂部支援 `A-` / `A+` 即時字級縮放（90% ~ 160%）。
   - 高對比度護眼配色，支援一鍵切換**深色模式（Nebula Dark）**與**淺色模式（Clean Light）**。
3. **KaTeX 高清數學公式排版**：
   - 所有根號、分數、下標、向量、希臘字母均以向量級高清渲染。
   - 內建 Token 隔離與離線 Unicode 備援機制，任何網路環境皆不跑版。
4. **靈活的做題模式**：
   - **🎯 單題專注模式（Flashcard Mode）**：支援鍵盤快捷鍵（`←`/`→` 換題，`Space 空白鍵` 掀牌看解析）。
   - **📜 清單連續模式（List Mode）**：一鍵展開全卷，方便考前快速總複習。
5. **多學科模組化架構**：
   - 核心引擎（UI / JS / CSS）與科目資料夾解耦，已預留物理、化學、數學等擴充槽。

---

## 🚀 部署到 GitHub Pages 指南

本專案完全為靜態網頁（Vanilla HTML / CSS / JS），非常適合直接使用 **GitHub Pages** 免費託管：

1. **推送到 GitHub**：
   ```bash
   git init
   git add .
   git commit -m "feat: 初次發布學習中心"
   git branch -M main
   git remote add origin https://github.com/<你的使用者名稱>/<你的倉庫名稱>.git
   git push -u origin main
   ```
2. **開啟 GitHub Pages**：
   * 進入 GitHub 倉庫頁面 ➔ 點擊 **Settings** ➔ 側邊欄點選 **Pages**。
   * 在 **Build and deployment** 下方的 **Branch** 選擇 `main` 分支，資料夾選擇 `/ (root)`。
   * 點擊 **Save**。
3. **完成！**
   * 等候約 1~2 分鐘，即可透過 `https://<你的使用者名稱>.github.io/<你的倉庫名稱>/` 在手機、平板或電腦隨時刷題！

> ⚠️ **注意**：專案根目錄已包含 `.nojekyll` 檔案，確保 GitHub Pages 不會略過底線或中文資料夾。

---

## 📁 檔案結構

```text
├── index.html                           # 平台入口主頁
├── .nojekyll                            # GitHub Pages 必備靜態標記
├── .gitignore                           # Git 忽略設定
├── core/                                # 🎨 核心學習引擎（全科共用）
│   ├── style.css                        # 現代設計系統與主題樣式
│   ├── app.js                           # 互動控制器
│   └── subjects_config.js               # 學科與單元註冊清單 (Manifest)
├── subjects/                            # 📚 各學科資料庫
│   ├── physics/                         # 【物理科】
│   │   └── 01_拋體運動/                  # 二維拋體運動 (1~72題)
│   │       ├── 二維拋體運動_1-72題完整精解指南.md
│   │       ├── data.js                  # 結構化題庫資料
│   │       └── 分單元講義/
│   ├── chemistry/                       # 【化學科】(預留)
│   └── math/                            # 【數學科】(預留)
└── tools/                               # 🛠️ 通用工具
    ├── parse_markdown.py                # Markdown 轉題庫工具
    └── setup_structure.py               # 目錄初始化腳本
```

---

## 📖 如何加入新題目或新科目？

1. 在 `subjects/<科目名稱>/` 下新增單元資料夾（例如 `subjects/physics/02_牛頓定律/`）。
2. 將題庫 Markdown 檔案放入該資料夾。
3. 執行轉換工具：
   ```bash
   python tools/parse_markdown.py subjects/physics/02_牛頓定律
   ```
4. 在 `core/subjects_config.js` 註冊該單元即可！
