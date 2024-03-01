import requests
import json
import shutil
import time
import os.path

iconFolder = "D:\\OsrsActivityMap\\OsrsActivityMap\\src\\assets\\Icons"

file = open('ItemMapping.json')
data = json.load(file)
file.close()

for i in data:
    i['icon'] = i['icon'].replace(" ", "_")
    url = 'https://oldschool.runescape.wiki/images/' + i['icon']
    path = iconFolder + "\\" + i['icon']
    #print(path)
    if not os.path.isfile(path):
        r = requests.get(url, stream=True)
        print("Fetching: " + url)
        if r.status_code == 200:
            
            print("Saving file to: " + path)
            with open(path, 'wb+') as f:
                r.raw.decode_content = True
                shutil.copyfileobj(r.raw, f)
            time.sleep(1)
    else:
        print("skipping: " + path + " File already exists")