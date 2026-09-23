import json
import re
import os

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data_path = os.path.join(base_dir, 'subjects', 'physics', '01_拋體運動', 'data.js')
if not os.path.exists(data_path):
    data_path = os.path.join(base_dir, 'data.js')

with open(data_path, 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'const (?:PHYSICS_QUESTIONS|UNIT_QUESTIONS) = (\[.*\]);', content, re.DOTALL)
if not m:
    print(f"Could not find questions in {data_path}")
    exit(1)

questions = json.loads(m.group(1))
print(f"Loaded {len(questions)} questions from {data_path}.")

issues = []
for q in questions:
    qid = q['id']
    for field in ['question', 'hint', 'solution', 'summary']:
        val = q[field]
        if not val:
            continue
            
        control_chars = [c for c in val if ord(c) < 32 and c not in '\n\r\t']
        if control_chars:
            issues.append(f"Q{qid} [{field}]: Contains control characters {[ord(c) for c in control_chars]}")
            
        without_blocks = re.sub(r'\$\$[\s\S]*?\$\$', '', val)
        single_dollars = re.findall(r'\$', without_blocks)
        if len(single_dollars) % 2 != 0:
            issues.append(f"Q{qid} [{field}]: Unmatched single dollar sign ($ count = {len(single_dollars)})")
            
        broken_sqrt = re.findall(r'\\?sqrt[^{0-9\s\\\(]', val)
        if broken_sqrt:
            issues.append(f"Q{qid} [{field}]: Potential broken sqrt: {broken_sqrt}")

print(f"\n--- Issues Found: {len(issues)} ---")
for issue in issues:
    print(issue)
