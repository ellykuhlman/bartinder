from selenium import webdriver

path_to_webdriver = '/Users/ellykuhlman/Downloads/chromedriver'
browser = webdriver.Chrome(executable_path = path_to_webdriver)

url = 'https://www.socialhourcocktails.com/recipes'
browser.get(url)

html = browser.page_source

print(html)
