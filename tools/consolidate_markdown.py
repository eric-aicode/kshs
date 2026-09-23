import os
import shutil
import re

base_dir = r"g:\我的雲端硬碟\APPS\物理學習中心"
target_dir = os.path.join(base_dir, "subjects", "physics", "01_拋體運動")
split_dir = os.path.join(target_dir, "分單元講義")
os.makedirs(split_dir, exist_ok=True)

md_names = [
    "補充習題二_1-27題精解指南.md",
    "補充習題二_28-60題精解指南.md",
    "補充習題二_61-72題精解指南.md"
]

# 讀取三個檔案的內容
contents = []
for name in md_names:
    src_in_root = os.path.join(base_dir, name)
    src_in_target = os.path.join(target_dir, name)
    chosen_path = src_in_target if os.path.exists(src_in_target) else src_in_root
    
    with open(chosen_path, "r", encoding="utf-8") as f:
        text = f.read()
    contents.append(text)
    
    # 移動分單元檔案到「分單元講義」資料夾中妥善保存
    dst_split = os.path.join(split_dir, name)
    with open(dst_split, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Archived {name} to {dst_split}")

    # 若根目錄還有該檔案，移除以保持根目錄整潔
    if os.path.exists(src_in_root):
        os.remove(src_in_root)
        print(f"Cleaned up {name} from root directory")

# 建立 1~72 題完整精解整合版 Markdown
master_header = """# 高中物理：二維拋體運動（補充習題二 1~72 題）全單元精解手冊

> **本指南特色**：整合「水平拋體運動（1~27題）」、「斜向拋體運動（28~60題）」與「斜面拋體及相對運動進階（61~72題）」三大核心板塊。每題均提供**【題目】**、**【核心思維 / 破題切入點】**、**【詳細算式推導】**與**【解題小結】**。

---

## 📋 總體目錄導覽
1. [第一單元：水平拋體運動（第 1 ~ 27 題）](#第一單元水平拋體運動第-1--27-題)
   - 平拋基本定量計算（第 1 ~ 8 題）
   - 加速度投影與速度分解（第 9 ~ 15 題）
   - 斜面與階梯平拋問題（第 16 ~ 21 題）
   - 軌跡方程式與多物體平拋（第 22 ~ 27 題）
2. [第二單元：斜向拋體運動（第 28 ~ 60 題）](#第二單元斜向拋體運動第-28--60-題)
   - 基本運動量與打擊標的（第 28 ~ 33 題）
   - 對稱性與夾角變化（第 34 ~ 45 題）
   - 斜面斜拋與極值條件（第 46 ~ 60 題）
3. [第三單元：斜面拋體與相對運動進階（第 61 ~ 72 題）](#第三單元斜面拋體與相對運動進階第-61--72-題)
   - 斜面旋轉坐標系與大三角形正弦定理（第 61 ~ 69 題）
   - 垂直撞擊斜面與空中相遇相撞（第 70 ~ 71 題）
   - 慣性系與車載拋體相對運動（第 72 題）

---

## 📐 核心公式與解題心法快速複習

### 1. 水平拋體運動 (Horizontal Projectile)
- 運動獨立性：水平等速 $v_x = v_0$、鉛直自由落體 $v_y = gt$。
- 飛行時間由鉛直高度單獨決定：$t = \sqrt{\frac{2h}{g}}$。
- 水平射程：$x = v_0 t = v_0 \sqrt{\frac{2h}{g}}$。
- 位移夾角正切與速度夾角正切的「二倍關係」：
  $$\\tan\\theta_{\\text{速度}} = \\frac{gt}{v_0} = 2 \\left(\\frac{\\frac{1}{2}gt^2}{v_0 t}\\right) = 2 \\tan\\phi_{\\text{位移}}$$

### 2. 斜向拋體運動 (Oblique Projectile)
- 飛行時間：$T = \\frac{2v_0 \\sin\\theta}{g} = \\frac{2v_{0y}}{g}$。
- 最大高度：$H = \\frac{v_0^2 \\sin^2\\theta}{2g} = \\frac{v_{0y}^2}{2g}$。
- 水平射程：$R = \\frac{v_0^2 \\sin 2\\theta}{g} = \\frac{2v_{0x}v_{0y}}{g}$。
- 互餘角射程相等性質：同初速下，仰角 $\\theta$ 與 $90^\\circ - \\theta$ 射程相同。

### 3. 斜面拋體與相對運動 (Advanced / Rotated Frame)
- **旋轉坐標法**：設沿斜面為 $x$ 軸、垂直斜面為 $y$ 軸，分解重力為 $g\\sin\\theta$ 與 $g\\cos\\theta$。
- **大三角形正弦定理法**：以初速度位移向量 $\\vec{v}_0 t$、自由落體位移向量 $\\frac{1}{2}\\vec{g}t^2$ 與斜面位移向量 $\\vec{s}$ 組成封閉三角形。
- **車載拋體**：不同慣性系測得之停留時間與最大高度必定相同。

---
"""

# 清理各部分的標題層級，合成主文檔
part1_body = contents[0]
part1_body = re.sub(r'^#\s+.*?\n', '', part1_body)
part1_body = re.sub(r'>\s+\*\*學習目標\*\*.*?\n---\n', '', part1_body, flags=re.DOTALL)
part1_body = re.sub(r'##\s+📋\s*目錄.*?\n---\n', '', part1_body, flags=re.DOTALL)

part2_body = contents[1]
part2_body = re.sub(r'^#\s+.*?\n', '', part2_body)
part2_body = re.sub(r'>\s+本指南涵蓋.*?\n---\n', '', part2_body, flags=re.DOTALL)
part2_body = re.sub(r'##\s+核心觀念快速複習.*?\n---\n', '', part2_body, flags=re.DOTALL)

part3_body = contents[2]
part3_body = re.sub(r'^#\s+.*?\n', '', part3_body)
part3_body = re.sub(r'##\s+核心學習目標與單元導覽.*?\n---\n', '', part3_body, flags=re.DOTALL)
part3_body = re.sub(r'##\s+逐題精解與破題思維\s*\n', '', part3_body)

full_master_content = (
    master_header + "\n\n"
    + "# 第一單元：水平拋體運動（第 1 ~ 27 題）\n\n" + part1_body.strip() + "\n\n---\n\n"
    + "# 第二單元：斜向拋體運動（第 28 ~ 60 題）\n\n" + part2_body.strip() + "\n\n---\n\n"
    + "# 第三單元：斜面拋體與相對運動進階（第 61 ~ 72 題）\n\n" + part3_body.strip() + "\n"
)

master_output_path = os.path.join(target_dir, "二維拋體運動_1-72題完整精解指南.md")
with open(master_output_path, "w", encoding="utf-8") as f:
    f.write(full_master_content)

print(f"Generated unified master guide at: {master_output_path}")
