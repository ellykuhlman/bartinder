import bs4
from selenium import webdriver

path_to_webdriver = '/Users/ellykuhlman/Downloads/chromedriver'
browser = webdriver.Chrome(executable_path = path_to_webdriver)

url = 'https://www.socialhourcocktails.com/recipes'
browser.get(url)

html = browser.page_source

print(html)

soup = bs4.BeautifulSoup(html)





recipe_soup = soup.find_all('div', class_='style-iwqinworimageItemzoom')

recipes = {}

for recipe in recipe_soup:
    name = recipe.find(itemprop='name').contents[0]
    ingredient_soup = recipe.find(itemprop="description").find_all("span")
    recipes[name] = [i.contents[0] for i in ingredient_soup if i.contents]