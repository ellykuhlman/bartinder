# Bartinder 
A little program to match a user to their ideal cocktail, based on the ingredients they have in their home bar.

## bar_tinder.py
The Python Version

### Getting Started
- Download `bar_tinder.py`, the two csv files `master_bar.csv` and `master_cocktails_2.csv`, and `tkinter_helpers.py`
- you will need [tkinter](https://docs.python.org/3.6/library/tkinter.html) installed
- run `bar_tinder.py` and enjoy

### How It Works
`bar_tinder.py` intakes two files - one with a list of cocktails, their ingredients, and their recipes, and the other with a list of all ingredients needed to make the cocktails in the first file.  To create these files, I wrote a short web scraper to scrape content off my favorite cocktail website (`webscraper_socialhour.ipynb`)

Using the two files, bar_tinder generates a set of cocktail objects and a bar object. The user then either loads their own bar or creates a new bar object with the ingredients they have.  Once the bar is created, the program creates a menu of cocktails that can be made with the particular bar.\
<img width="350" alt="screen shot 2018-03-22 at 3 35 03 pm" src="https://user-images.githubusercontent.com/26753690/37796488-d1c6e838-2ded-11e8-8134-62ae81e570ee.png">
<img width="350" alt="screen shot 2018-03-22 at 3 47 41 pm" src="https://user-images.githubusercontent.com/26753690/37796497-d6f3f2e2-2ded-11e8-8058-f1d9b683700b.png">


Finally, the user is prompted to indicate their taste preferences.  (In true Tinder fashion, they ‘swipe right’ on things in which they’re interested.)  
![swipe](https://user-images.githubusercontent.com/26753690/37796600-0c901b56-2dee-11e8-885e-646094715e01.gif)

Then, the program returns the users match percentages to the cocktails in that bar’s menu.
<img width="350" alt="screen shot 2018-03-22 at 3 37 23 pm" src="https://user-images.githubusercontent.com/26753690/37796595-0949b254-2dee-11e8-8643-63a6dad8ef01.png">

