import json
import shutil
import os

rootdir = os.getcwd()

with open(rootdir + '/public/static/data/redirect.json') as file:
    data = json.load(file)

for i in data:
    filepath = rootdir + '/public/static/redirect/' + i['id'] + '.json'
    shutil.copyfile('./.github/workflows/redirect_template.json', filepath)