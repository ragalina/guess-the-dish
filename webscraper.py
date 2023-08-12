from bs4 import BeautifulSoup
import requests

URL = "https://xyuandbeyond.com/national-dishes/"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
results = soup.find(id="primary")
# items = results.find_all("div", class_="item-image-wrapper")
images = results.find_all("img")
# links = images['src']
names = results.find_all("h3", class_="wp-block-heading")

for image in images:
    print(image['src'])
for x in range(len(images)):
    print(names[x])

'''
for image in images:
    print(image)
    # link = item.find("img", class_="data-src")
    # caption = item.find("img", class_="alt")
    # try:
        # link = item['data-src']
    # except:
        # link = item['src']
    # print(link)
    # print(item['alt'])
    # print()

for name in names:
    print(name)
'''