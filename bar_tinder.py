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
			self.ingredients.append(item_name)

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
			if row[0] != [] and row[0] != 'Cinnamon Syrup' and row[1] != [] and row[2] != []:
				cocktail_object = Cocktail(row[0], ingredients, row[2])
				all_cocktails.append(cocktail_object)

	return all_cocktails


def make_master_bar(bar_file):
	# Make a master bar with the ingredients needed to make every cocktail
	with open(bar_file) as g:
		barReader = csv.reader(g)

		for row in barReader:
			row.sort(key=lambda x: x.lower())
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
	# Option to save an existing bar to file
	if input('Do you want to save this bar? ') == 'y':
		file_name = input('Whose bar is this?' ) + '_bar.p'
		pickle.dump(bar, open(file_name, 'wb'))


def check_items(items_list, stock_list):
	# Check if cocktail ingredients are in the bar
	for item in list(items_list):
		# Ignore optional items
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


cocktail_attributes = {
	'ingredient': {
		'brandy': ['Cognac', 'brandy'],
		'gin': ['gin'],
		'rum': ['rum'],
		'tequila': ['tequila'],
		'vodka': ['vodka'],
		'whiskey': ['bourbon', 'rye', 'whiskey'],
		'autumnal': ['cranberry', 'cinnamon'],
		'bitter': ['Campari', 'bitters'],
		'bubbly': ['sparkling', 'champagne', 'soda'],
		'citrus': ['lime', 'lemon', 'grapefruit'],
		'herbal': ['dry vermouth', 'bitters', 'chartreuse'],
		'tropical': ['pineapple', 'coco']
	},
	'preparation':{
		'refreshing': ['shake'],
		'boozy': ['stir']
	}
}


def tally_tastes(dictionary, pro, con):
	for key in dictionary:
		if input('{} '.format(key)) == 'y':
			use_dict = pro
		else:
			use_dict = con
		for item in dictionary[key]:
			if item.lower() not in use_dict:
				use_dict[item.lower()] = 1
			else:
				use_dict[item.lower()] += 1
	return pro, con


def print_my_cocktails(my_cocktails):
	print('\n\n')
	print('{0:25} {1:5} {2:5}'.format('Cocktail', 'Love', 'Hate'))
	for key in my_cocktails:
		print('{0:23} {1:5d} {2:5d}'.format(str(key), my_cocktails[key][0], my_cocktails[key][1]))
	print('\n\n')

def pick_cocktail(menu):
	# CLEAN THIS, and make the matching stuff case-sensitive

	pro_tastes = {'ingredient': {}, 'preparation': {}}
	con_tastes = {'ingredient': {}, 'preparation': {}}
	my_cocktails = {}

	print('what sounds good?')

	for item in ['ingredient', 'preparation']:
		pro_tastes[item], con_tastes[item] = tally_tastes(
			cocktail_attributes[item], pro_tastes[item], con_tastes[item])

	for cocktail in menu:

		matches, unmatches, appearances = 0, 0, 0

		for ingredient in pro_tastes['ingredient']:
			if ingredient in str(cocktail.ingredients) or ingredient.title() in str(cocktail.ingredients):
				matches += 1
				appearances += 1
		for ingredient in con_tastes['ingredient']:
			if ingredient in str(cocktail.ingredients) or ingredient.title() in str(cocktail.ingredients):
				unmatches += 1
				appearances += 1

		for key in pro_tastes['preparation']:
			if key in cocktail.recipe or key.title() in cocktail.recipe:
				matches += 1
				appearances += 1 
		for key in con_tastes['preparation']:
			if key in cocktail.recipe or key.title() in cocktail.recipe:
				unmatches += 1	
				appearances += 1	

		#my_cocktails[cocktail] = int((matches/(len(cocktail.ingredients) + 1)) * 100), int((unmatches/(len(cocktail.ingredients) + 1)) * 100)
		if appearances == 0:
			my_cocktails[cocktail] = 'no info', 'no info'
		else:
			my_cocktails[cocktail] = int((matches/appearances) * 100), int((unmatches/appearances) * 100)
	
	print_my_cocktails(my_cocktails)

	


# Interface for when there is an actual user

all_cocktails = make_cocktails('master_cocktails_2.csv')
master_bar = make_master_bar('master_bar.csv')

if input('Do you have a saved bar? ') == 'n':
	bar = make_bar(master_bar)
	save_bar(bar)
else:
	bar_name = input('What is your name? ') + '_bar.p'
	bar = pickle.load(open(bar_name, 'rb'))

	if input('do you want to update your bar? ') == 'y':
		print('Add items')
		answer = input('item to add:')
		while answer != 'done':
			bar.add_item(answer)
			answer = input('item to add:')
		print('Remove items')
		answer = input('item to remove:')
		while answer != 'done':
			bar.remove_item(answer)
			answer = input('item to remove:')
		save_bar(bar)


my_menu = make_menu(all_cocktails, bar)

pick_cocktail(my_menu)


"""if __name__ == "__main__":
	all_cocktails = make_cocktails('master_cocktails_2.csv')
	master_bar = make_master_bar('master_bar.csv')
	bar = pickle.load(open('Elly_bar.p', 'rb'))
	my_menu = make_menu(all_cocktails, bar)
	pick_cocktail(my_menu)
"""











		