import json
j_str = {'5': 8, '6': 9, '2': 3, '1': 5}
print(json.dumps(j_str, sort_keys=True, indent=4))