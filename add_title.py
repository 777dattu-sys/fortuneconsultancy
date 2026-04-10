import glob

def do_replacements():
    files = glob.glob('*.html')
    for f in files:
        with open(f, 'r', encoding='utf-8') as file:
            data = file.read()
        
        # 1. Navbar Replacement
        img_str = '<img src="./logo.png" alt="Fortune Educational Consultancy" style="height: 55px; width: auto; object-fit: contain;">'
        new_img_str = '''<img src="./logo-transparent.png" alt="Fortune Logo" style="height: 55px; width: auto; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">
                <div class="logo-text">
                    <span class="logo-main" style="color: var(--primary-dark)">FORTUNE</span>
                    <span class="logo-sub" style="color: var(--text-muted)">Educational Consultancy</span>
                </div>'''

        # 2. Footer Replacement
        img_str_footer = '<img src="./logo.png" alt="Fortune Educational Consultancy" style="height: 65px; width: auto; object-fit: contain;">'
        new_img_str_footer = '''<img src="./logo-transparent.png" alt="Fortune Logo" style="height: 65px; width: auto; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                    <div class="logo-text">
                        <span class="logo-main" style="color: white">FORTUNE</span>
                        <span class="logo-sub" style="color: #cbd5e1">Educational Consultancy</span>
                    </div>'''

        data = data.replace(img_str, new_img_str)
        data = data.replace(img_str_footer, new_img_str_footer)
        
        # Fix white text colors for dark navbars
        if f == 'university-detail.html':
            data = data.replace('span class="logo-main" style="color: var(--primary-dark)"', 'span class="logo-main" style="color: white"')
            data = data.replace('span class="logo-sub" style="color: var(--text-muted)"', 'span class="logo-sub" style="color: #cbd5e1"')
            
        with open(f, 'w', encoding='utf-8') as out:
            out.write(data)

do_replacements()
