Bartinder is a little program to match a user to their ideal cocktail, based on the ingredients they have in their home bar.

bar_tinder.py intakes two files - one with a list of cocktails, their ingredients, and their recipes, and the other with a list of all ingredients needed to make the cocktails in the first file.  To create these files, I wrote a short web scraper to scrape content off my favorite cocktail website (webscraper_socialhour.ipynb)

Using the two files, bar_tinder generates a set of cocktail objects. The user then either loads their own bar or creates a new bar object with the ingredients they have.  Once the bar is created, the program creates a menu of cocktails that can be made with the particular bar.

Finally, the user is prompted to indicate their taste preferences.  (In true Tinder fashion, they ‘swipe right’ on things in which they’re interested.)  Then, the program returns the users match percentages to the cocktails in that bar’s menu.

The UI for the program is currently built using Tkinter.