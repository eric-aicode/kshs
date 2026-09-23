import os
import shutil

base_dir = r"g:\我的雲端硬碟\APPS\物理學習中心"

# 目錄規劃
dirs = [
    os.path.join(base_dir, "core"),
    os.path.join(base_dir, "subjects", "physics", "01_拋體運動"),
    os.path.join(base_dir, "subjects", "chemistry"),
    os.path.join(base_dir, "subjects", "math"),
    os.path.join(base_dir, "tools")
]

for d in dirs:
    os.makedirs(d, exist_ok=True)
    print(f"Created directory: {d}")

# 移動/複製 Markdown 文件至 subjects/physics/01_拋體運動/
md_files = [
    "補充習題二_1-27題精解指南.md",
    "補充習題二_28-60題精解指南.md",
    "補充習題二_61-72題精解指南.md"
]

target_physics_dir = os.path.join(base_dir, "subjects", "physics", "01_拋體運動")

for mf in md_files:
    src = os.path.join(base_dir, mf)
    dst = os.path.join(target_physics_dir, mf)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {mf} to {dst}")

# 複製 data.js 至 subjects/physics/01_拋體運動/
data_src = os.path.join(base_dir, "data.js")
data_dst = os.path.join(target_physics_dir, "data.js")
if os.path.exists(data_src):
    shutil.copy2(data_src, data_dst)
    print(f"Copied data.js to {data_dst}")

# 複製 style.css 與 app.js 至 core/
for asset in ["style.css", "app.js"]:
    src = os.path.join(base_dir, asset)
    dst = os.path.join(base_dir, "core", asset)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"Copied {asset} to {dst}")

# 建立化學與數學的 README 說明
with open(os.path.join(base_dir, "subjects", "chemistry", "README.md"), "w", encoding="utf-8") as f:
    f.write("# 化學科題庫資料夾\n\n可在此建立子單元（例如：`01_反應速率`），放入題庫 Markdown 與 data.js。\n")

with open(os.path.join(base_dir, "subjects", "math", "README.md"), "w", encoding="utf-8") as f:
    f.write("# 數學科題庫資料夾\n\n可在此建立子單元（例如：`01_三角函數`），放入題庫 Markdown 與 data.js。\n")

print("Migration completed successfully!")
