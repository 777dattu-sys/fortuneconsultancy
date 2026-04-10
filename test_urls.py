import urllib.request
import re

with open('data.js', 'r', encoding='utf-8') as f:
    text = f.read()

urls = re.findall(r'image:\s*"(https://[^"]+)"', text)
urls = list(set(urls))

print(f"Found {len(urls)} unique image URLs to test.")
for u in urls[:5]:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print(f"{u} -> {res.getcode()}")
    except Exception as e:
        print(f"{u} -> Error: {e}")
