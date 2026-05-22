import os, re

templates_dir = r"x:\biz499dotin_hostinger-main\templates"

for root, _, files in os.walk(templates_dir):
    for file in files:
        if file.endswith('.html'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            if '{% load static %}' not in content:
                content = '{% load static %}\n' + content

            # CSS
            content = re.sub(r'href=[\"\'](?!http|mailto|tel|#|{%)(.*?\.css.*?)[\"\']', r'href="{% static \'\1\' %}"', content)
            
            # JS
            content = re.sub(r'src=[\"\'](?!http|{%)(.*?\.js.*?)[\"\']', r'src="{% static \'\1\' %}"', content)

            # Images
            content = re.sub(r'src=[\"\'](?!http|{%)(.*?(?:\.png|\.jpg|\.jpeg|\.gif|\.svg|\.webp).*?)[\"\']', r'src="{% static \'\1\' %}"', content)
            
            # Links
            url_map = {
                'index.html': 'home',
                'digital-marketing.html': 'digital_marketing',
                'ecommerce.html': 'ecommerce',
                'graphics-designing.html': 'graphics',
                'location.html': 'location',
                'main.html': 'home',
                'website-design.html': 'website_design',
                'job.html': 'job'
            }
            
            for html_file, url_name in url_map.items():
                content = re.sub(rf'href=[\"\']{html_file}[\"\']', f'href="{{% url \'{url_name}\' %}}"', content)

            # Also fix things like href="img/..." or something if requested, but let's assume images are mostly src.
            # Fix any weird double nesting `{% static '{% static '...
            
            if content != original_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Updated {filepath}')
