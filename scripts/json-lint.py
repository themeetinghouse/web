import glob
import json

path = "../public/static/**/*.json"

def assert_standard_text(item):
    assert('style' in item and isinstance(item['style'], str))
    for i in item:
        if 'header' in i or 'text' in i:
            assert(isinstance(item[i], str))

def assert_image(images, check_link_to = False):
    assert(isinstance(images, list))
    for image in images:
        assert(isinstance(image['src'], str))
        assert(isinstance(image['alt'], str))
        if (check_link_to):
            assert('linkto' not in image or isinstance(image['linkto'], str))

def assert_content_link_or_button(link_or_button, check_new_tab = False):
    assert(isinstance(link_or_button['navigateTo'], str))
    assert(isinstance(link_or_button['title'], str))
    if (check_new_tab):
        assert('openNewBrowser' not in link_or_button or isinstance(link_or_button['openNewBrowser'], bool))

for json_file in glob.glob(path):
    with open(json_file) as f:
        try:
            current_json = json.load(f)
            if (isinstance(current_json, dict) and 'page' in current_json):
                page = current_json['page']
                page_config = page['pageConfig']
                content = page['content']

                try:
                    # check page details
                    assert(isinstance(page['name'], str))
                    assert(isinstance(page['title'], str))
                    assert(isinstance(page['keywords'], str))
                    assert(isinstance(page['description'], str))

                    # check page config
                    assert(isinstance(page_config['showLive'], bool))
                    assert(isinstance(page_config['movingMenu'], bool))
                    assert(isinstance(page_config['showLogoText'], bool))
                    assert(page_config['logoColor'] == 'black' or page_config['logoColor'] == 'white')
                    assert(isinstance(page_config['showSearch'], bool))
                    assert(isinstance(page_config['showFooter'], bool))
                    assert(isinstance(page_config['showMenu'], bool))
                    assert('weatherAlert' not in page_config or isinstance(page_config['weatherAlert'], bool))

                    # check page content
                    for item in content:
                        assert(isinstance(item, dict))
                        item_type = item['type']

                        if item_type == 'og-tags':
                            assert(isinstance(item, dict))
                            og_keys = ['type', 'image', 'url', 'title', 'description']
                            for i in og_keys:
                                assert(i in item)
                                assert(isinstance(item[i], str))
                            
                        elif item_type == 'hero':
                            assert(isinstance(item, dict))
                            assert_standard_text(item)
                            for i in item:
                                if i == 'image1':
                                    assert_image(item[i])
                                if i == 'button1':
                                    assert(isinstance(item[i], dict))
                                    assert(isinstance(item[i]['text'], str))
                                    assert(isinstance(item[i]['action'], str))
                                    assert(isinstance(item[i]['description'], str))
                                if 'link1' in i:
                                    assert(isinstance(item[i], str))
                                if i in ['addToCalendar', 'showCovid', 'contactPastor', 'showLocationSearch', 'hasFooter']:
                                    assert(isinstance(item[i], bool))

                        elif item_type == 'content':
                            assert(isinstance(item, dict))
                            assert_standard_text(item)
                            for i in item:
                                if i == 'image1':
                                    assert_image(item[i])
                                elif i == 'list':
                                    assert(isinstance(item[i], list))
                                    for list_item in item[i]:
                                        if list_item['type'] == 'button':
                                            assert_content_link_or_button(list_item)
                                        elif list_item['type'] == 'link':
                                            assert_content_link_or_button(list_item, check_new_tab=True)
                                        elif list_item['type'] == 'text':
                                            assert(isinstance(list_item['title'], str))
                                elif i == 'pieChart':
                                    assert(isinstance(item[i], dict))
                                    assert(isinstance(item[i]['raised'], int))
                                    assert(isinstance(item[i]['goal'], int))
                                    assert(isinstance(item[i]['text'], str))
                                elif i == 'images':
                                    assert_image(item[i], check_link_to=True)

                except AssertionError:
                    print(f"Invalid JSON: {f.name}")
                    exit(1)
        except json.decoder.JSONDecodeError:
            print(f"Invalid JSON: {f.name}")
            exit(1)
        