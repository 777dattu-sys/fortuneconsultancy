import re
import itertools

images = ["./uni1.png", "./uni2.png", "./uni3.png", "./uni4.png"]
cycle_iter = itertools.cycle(images)

def repl(match):
    return match.group(1) + next(cycle_iter) + match.group(3)

# Update data.js
with open('data.js', 'r', encoding='utf-8') as f:
    data = f.read()

# Match: "image": "https://images..."
data = re.sub(r'("image":\s*")([^"]+)(")', repl, data)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(data)

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# We only want to replace unsplash images in the universities section.
# The universities section starts around "uni-slider" and has <div class="uni-img"> <img src="...">
def html_repl(match):
    return match.group(1) + next(cycle_iter) + match.group(3)

# Match <img src="https://images.unsplash..." alt="University...">
# To be safe, just replace unsplash images inside <div class="uni-img">
# Since it's HTML, let's just find and replace the 4 specific ones in index.html based on context.
# Wait, let's just parse the file and replace any unsplash link inside uni-img block.

html_new = re.sub(r'(<div class="uni-img">\s*<img src=")(https://images\.unsplash[^"]+)(")', html_repl, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_new)

print("Images replaced successfully.")
