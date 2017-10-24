import csv
import pickle
import re

from difflib import SequenceMatcher

class Cocktail():
	"""Class to make Cocktails"""
	def __init__(self, name, ingredients, recipe):
		self.name = name
		self.ingredients = ingredients
		self.recipe = recipe

	def __repr__(self):
		return self.name

class Bar():
	"""Class to make a bar stocked with ingredients"""
	def __init__(self, ingredients):
		self.ingredients = ingredients

	def __repr__(self):
		return self.ingredients

	def add_item(self, item_name):
		if item_name in self.ingredients:
			print('You already have {}'.format(item_name))
		else:
			ingredients.append(item_name)

	def remove_item(self, item_name, item_type):
		if item_name not in self.ingredients:
			print('{} does not exist'.format(item_name))
		else:
			self.ingredients.remove(item_name)



def make_cocktails(recipe_file):
	all_cocktails = []

	# Make Cocktails from file
	
	with open(recipe_file) as f:
		cocktailReader = csv.reader(f)
		
		for row in cocktailReader:
			ingredients = [x.strip() for x in row[1][2:-2].replace('\'', '').split(',') if x != ' ']
			if row[0] != [] and row[1] != [] and row[2] != []:
				cocktail_object = Cocktail(row[0], ingredients, row[2])
				all_cocktails.append(cocktail_object)

	return all_cocktails

	"""for cocktail in cocktails:
					# Get the elements of each cocktail
					elements = list(map(str.strip, cocktail.split(';')))
			
					name = elements[0]
					booze = elements[1].split(', ')
					mixers = elements[2].split(', ')
					garnish = elements[3].split(', ')
					attributes = elements[4].split(', ')
			
					print(booze, mixers, garnish)
					# Make the cocktail object and add it to a list of cocktail objects
					cocktail_object = Cocktail(name, booze, mixers, garnish, attributes)
					all_cocktails.append(cocktail_object)
			
				return all_cocktails"""

'''def make_bar_necessities(all_cocktails):
	# Make a list of all ingredients necessary to make all cocktails

	# Make an empty list to hold all ingredients for all cocktails
	bar_necessities = []

	# Check that every cocktail's ingredients are in the dictonary - 
	# if they're missing, add them
	for cocktail in all_cocktails:
		for item in cocktail.ingredients:
			print(item)
			if '(optional)' in item:
				check_item = item.replace(' (optional)', '')
			else:
				check_item = item
			if check_item not in bar_necessities:
				if check_sim(check_item, bar_necessities):
					bar_necessities.append(check_item)

	return bar_necessities'''

def check_sim(check_item, check_list):
	for element in check_list:
		if SequenceMatcher(None, check_item, element).ratio() > 0.625:
			if input('is {} the same as {}? '.format(check_item, element)) == 'y':
				return False
	return True


def make_master_bar(bar_file):
	with open(bar_file) as g:
		barReader = csv.reader(g)

		for row in barReader:
			row.sort(key=lambda x: x.lower())
			print(row)
			master_bar = Bar(row)
			#bar_items = [x.strip() for x in row.replace('\'', '').split(',')]

	return master_bar

def make_bar(master_bar):
	# Make a Bar
	bar_items = []

	# Find out which items are in the user's bar
	for item in master_bar.ingredients:
		if input('do you have {}? (y/n) '.format(item)) == 'y':
			bar_items.append(item)
	# Make a bar object with the above items	
	bar = Bar(bar_items)

	return bar


def save_bar(bar):
	if input('Do you want to save this bar? ') == 'y':
		file_name = input('Whose bar is this?' ) + '_bar.p'
		pickle.dump(bar, open(file_name, 'wb'))


def check_items(items_list, stock_list):
	# Check if cocktail ingredients are in the bar
	for item in list(items_list):
		if '*' in item:
			continue
		elif item not in stock_list:

			return False
		else:
			continue
	return True

def make_menu(all_cocktails, bar):
	# Make a menu of cocktail options, based on what ingredients are in the bar
	# Create an empty menu
	menu = []
	
	# Iterate through cocktail ingredients, if all are available,
	# add to the menu
	for cocktail in all_cocktails:
		if check_items(cocktail.ingredients, bar.ingredients):
			menu.append(cocktail)

	return menu

def print_menu(menu):
	# Print the menu nicely
	if menu == []:
		print('You can\'t make any cocktails :(')
	else:
		print('Menu | ', end=''),
		for cocktail in menu:
			print(cocktail, end=' | ')
		print()


all_cocktails = make_cocktails('master_cocktails.csv')
master_bar = make_master_bar('master_bar.csv')

if input('Do you have a saved bar? ') == 'n':
	bar = make_bar(master_bar)
	save_bar(bar)
else:
	bar_name = input('What is your name? ') + '_bar.p'
	bar = pickle.load(open(bar_name, 'rb'))

my_menu = make_menu(all_cocktails, bar)

print_menu(my_menu)


	













		