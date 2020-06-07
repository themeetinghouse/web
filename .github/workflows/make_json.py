import json
import shutil

with open('../../public/static/data/redirect.json') as file:
    data = json.load(file)

for i in data:
    filepath = '../../public/static/redirect/' + i['id'] + '.json'
    shutil.copyfile('redirect_template.json', filepath)
