import re
import itertools

images = ["./uni1.png", "./uni2.png", "./uni3.png", "./uni4.png"]
cycle_iter = itertools.cycle(images)

def repl(match):
    return match.group(1) + next(cycle_iter) + match.group(3)

# Update data.js
with open('data.js', 'r', encoding='utf-8') as f:
    data = f.read()

# Match: image: "https://images..."
data, count = re.subn(r'(image:\s*")([^"]+)(")', repl, data)
print(f"Replaced {count} images in data.js")

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(data)

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

def html_repl(match):
    return match.group(1) + next(cycle_iter) + match.group(3)

html_new, count_html = re.subn(r'(<div class="uni-img">\s*[\r\n\s]*<img src=")(https://images\.unsplash[^"]+)(")', html_repl, html)
print(f"Replaced {count_html} images in index.html")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_new)
