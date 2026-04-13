import urllib.request
import re

url = 'https://drive.google.com/drive/folders/1rmujQFKZvRazlqDf160Fu7Wzq6Obtpno'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    files = re.findall(r'"([^"]+\.(?:png|jpg|jpeg|svg|PNG|JPG|JPEG|SVG))"', html)
    print("Files found:", set(files))
    
    # Also find basic text that might be client names
    titles = re.findall(r'\["([^"]+)"', html)
    possible_names = [t for t in set(titles) if len(t) > 3 and len(t) < 30 and '\\' not in t]
    print("Possible names:", possible_names[:20])
except Exception as e:
    print("Error:", e)
