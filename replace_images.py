import re
import random

# Unsplash Images
uk = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80'
usa = 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80'
canada = 'https://images.unsplash.com/photo-1548081689-d9441113a34a?w=800&q=80'
australia = 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80'

uni_images = [
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
    'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
    'https://images.unsplash.com/photo-1525926477800-7a39bfeee5e6?w=800&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    'https://images.unsplash.com/photo-1492538368677-f6e0afe31406?w=800&q=80'
]

testi_1 = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80'
testi_2 = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80'
testi_3 = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80'

blog_1 = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
blog_2 = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'
blog_3 = 'https://images.unsplash.com/photo-1558500220-410fb5cfbf8a?w=800&q=80'

with open('index.html', 'r', encoding='utf-8') as f:
    idx_content = f.read()

replacements_idx = {
    'https://picsum.photos/seed/country1/800/600': uk,
    'https://picsum.photos/seed/country2/800/600': usa,
    'https://picsum.photos/seed/country3/800/600': canada,
    'https://picsum.photos/seed/country4/800/600': australia,
    'https://picsum.photos/seed/country5/800/600': uni_images[0],
    'https://picsum.photos/seed/country6/800/600': uni_images[1],
    'https://picsum.photos/seed/country7/800/600': uni_images[2],
    'https://picsum.photos/seed/country8/800/600': uni_images[3],
    'https://picsum.photos/seed/country9/800/600': testi_1,
    'https://picsum.photos/seed/country10/800/600': testi_2,
    'https://picsum.photos/seed/country11/800/600': testi_3,
    'https://picsum.photos/seed/country12/800/600': blog_1,
    'https://picsum.photos/seed/country13/800/600': blog_2,
    'https://picsum.photos/seed/country14/800/600': blog_3,
}

for old, new in replacements_idx.items():
    idx_content = idx_content.replace(old, new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx_content)

with open('data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

def replace_data_img(match):
    return f'image: "{random.choice(uni_images)}"'

data_content_new = re.sub(r'image:\s*"https://picsum\.photos/seed/[a-zA-Z0-9\-]+/800/600"', replace_data_img, data_content)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(data_content_new)

print('Replaced images successfully!')
