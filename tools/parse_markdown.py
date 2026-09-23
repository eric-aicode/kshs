import os
import re
import json
import sys

def parse_unit_directory(unit_dir):
    """
    掃描特定單元目錄下的所有 .md 檔案，解析成結構化題目，並匯出該目錄的 data.js
    """
    print(f"正在掃描單元目錄：{unit_dir}")
    if not os.path.exists(unit_dir):
        print(f"錯誤：目錄不存在 {unit_dir}")
        return

    md_files = [f for f in os.listdir(unit_dir) if f.endswith(".md") and not f.startswith("README")]
    md_files.sort()
    
    if not md_files:
        print(f"提示：該目錄下沒有找到 .md 題目檔案")
        return

    print(f"找到 {len(md_files)} 個題目 Markdown 檔案：{md_files}")

    questions = []

    for fname in md_files:
        fpath = os.path.join(unit_dir, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        parts = re.split(r'\n(?=###\s*(?:📌\s*)?第\s*\d+\s*題)', content)
        
        current_unit = os.path.basename(unit_dir)
        for part in parts:
            unit_match = re.search(r'##\s*(單元[一二三四五六七八九十\d]+[^\n]*)', part)
            if unit_match:
                current_unit = unit_match.group(1).strip()
                
            m = re.match(r'###\s*(?:📌\s*)?第\s*(\d+)\s*題\s*\n', part)
            if not m:
                continue
            
            q_num = int(m.group(1))
            body = part[m.end():].strip()
            
            markers = [
                (r'(\*\*【題目】\*\*|\*\*題目\*\*|【題目】)', 'question'),
                (r'(-?\s*\*\*?💡?【(?:核心思維\s*/\s*破題切入點|破題思維|核心思維)】\*\*?：?)', 'hint'),
                (r'(-?\s*\*\*?📝?【(?:詳細(?:算式與)?解析|詳細推導與解答)】\*\*?：?)', 'solution'),
                (r'(-?\s*\*\*?【解題小結】\*\*?：?|\*\*正解：?\*\*|【答案】)', 'summary')
            ]
            
            found = []
            for pat, tag in markers:
                for match in re.finditer(pat, body):
                    found.append((match.start(), match.end(), tag))
            
            found.sort(key=lambda x: x[0])
            
            sections = {'question': '', 'hint': '', 'solution': '', 'summary': ''}
            
            if not found:
                sections['question'] = body
            else:
                for i, (start, end, tag) in enumerate(found):
                    next_start = found[i+1][0] if i+1 < len(found) else len(body)
                    content_chunk = body[end:next_start].strip()
                    if sections[tag]:
                        sections[tag] += "\n\n" + content_chunk
                    else:
                        sections[tag] = content_chunk
                        
            for k in sections:
                sections[k] = re.sub(r'\n*---\s*$', '', sections[k]).strip()

            if not sections['solution'] and sections['hint']:
                if "1." in sections['hint'] and "2." in sections['hint']:
                    sections['solution'] = sections['hint']
                    sections['hint'] = "分析題意條件與物理量的核心關係式。"
                else:
                    sections['solution'] = sections['hint']

            answer_text = sections['summary']
            if not answer_text:
                ans_m = re.search(r'(?:選\s*(\([A-Ea-e\s,與]+\))|答案為\s*(\([A-Ea-e\s,與]+\)|[^\n。]+)|故\s*(\([A-Ea-e\s,與]+\))\s*正確)', sections['solution'])
                if ans_m:
                    answer_text = [g for g in ans_m.groups() if g][0].strip()
                
            questions.append({
                'id': q_num,
                'category': os.path.basename(unit_dir),
                'unit': current_unit,
                'question': sections['question'],
                'hint': sections['hint'],
                'solution': sections['solution'],
                'summary': sections['summary'],
                'answer': answer_text.strip(),
                'raw': body
            })

    questions.sort(key=lambda x: x['id'])
    print(f"成功解析共 {len(questions)} 道題目！")

    out_file = os.path.join(unit_dir, "data.js")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("// 自動產生的單元題庫資料集\n")
        f.write("const UNIT_QUESTIONS = ")
        json.dump(questions, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        f.write("// 兼容舊版全域變數\n")
        f.write("if (typeof PHYSICS_QUESTIONS === 'undefined') { var PHYSICS_QUESTIONS = UNIT_QUESTIONS; }\n")

    print(f"已成功產出：{out_file}")

if __name__ == "__main__":
    base_dir = r"g:\我的雲端硬碟\APPS\物理學習中心"
    target = sys.argv[1] if len(sys.argv) > 1 else os.path.join(base_dir, "subjects", "physics", "01_拋體運動")
    parse_unit_directory(target)
