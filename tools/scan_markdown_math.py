import os
import re

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
target_dir = os.path.join(base_dir, "subjects", "physics", "01_拋體運動")

md_files = [f for f in os.listdir(target_dir) if f.endswith(".md")]
all_issues = []

for fname in md_files:
    fpath = os.path.join(target_dir, fname)
    with open(fpath, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    for i, line in enumerate(lines, 1):
        ctrl = [(j, ord(c)) for j, c in enumerate(line) if ord(c) < 32 and c not in '\n\r\t']
        if ctrl:
            all_issues.append((fname, i, f"Control characters {ctrl}", line.strip()))
            
        broken_tags = re.findall(r'(?<!\\)\b(rac\{|qrt\{|implies|text\{)', line)
        if broken_tags:
            all_issues.append((fname, i, f"Broken LaTeX syntax: {broken_tags}", line.strip()))

print(f"掃描完成！發現問題數：{len(all_issues)}")
for fname, line_num, desc, content in all_issues:
    print(f"[{fname}:{line_num}] {desc}\n  --> {content[:100]}")
