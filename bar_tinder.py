import csv
import pickle
import re
import tkinter.messagebox
import tkinter.simpledialog
from difflib import SequenceMatcher
from tkinter import * 
from tkinter_test import Checklist, SwipeScreen

window = Tk()
window.minsize(width=750, height=500)
middle = Frame(height=475, width=300)

window.update()

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

	var = IntVar()
	# Find out which items are in the user's bar
	bar_checklist = Checklist(window, master_bar.ingredients)
	done_button = Button(window, text='Done', command=lambda: var.set(1))
	done_button.place(relx=.98, rely=.98, anchor='se')
	
	# Wait until the user is done inputting ingredients
	done_button.wait_variable(var)
	
	bar_checklist.clear_list()
	done_button.destroy()

	# Make a bar object with the above items	
	bar_items = bar_checklist.check_vars()
	bar = Bar(bar_items)

	return bar


def save_bar(bar):
	# Option to save an existing bar to file

	window.update()
	save_message = tkinter.messagebox.askyesno(message='Do you want to save this bar?', 
	title='Save Bar?')

	if save_message:
		window.update()
		name = simpledialog.askstring('Input', 'Whose bar is this?', parent=window)
		file_name = str(name) + '_bar.p'
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
	title = Label(window, text='What Sounds Good?\nSwipe Left or Right')
	title.place(relx=.5, rely=.1, anchor='n')
	for key in dictionary:
		swipe = SwipeScreen(window, middle, key)
		if swipe.make_swipe():
		#if input('{} '.format(key)) == 'y':
			use_dict = pro
		else:
			use_dict = con

		for item in dictionary[key]:
			if item.lower() not in use_dict:
				use_dict[item.lower()] = 1
			else:
				use_dict[item.lower()] += 1

	title.destroy()

	return pro, con


def print_my_cocktails(my_cocktails):
	row = 3
	window.update()

	cocktail = Label(middle, text='Cocktail').grid(row=row, column=1)
	love = Label(middle, text='Love').grid(row=row, column=2)
	hate = Label(middle, text='Hate').grid(row=row, column=3)

	for key in my_cocktails:
		row += 1
		label1 = Label(middle, text=str(key)).grid(row=row, column=1)
		label2 = Label(middle, text=my_cocktails[key][0]).grid(row=row, column=2)
		label3 = Label(middle, text=my_cocktails[key][1]).grid(row=row, column=3)


def pick_cocktail(menu):
	# CLEAN THIS, and make the matching stuff case-sensitive

	pro_tastes = {'ingredient': {}, 'preparation': {}}
	con_tastes = {'ingredient': {}, 'preparation': {}}
	my_cocktails = {}

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


window.update()
bar_message = tkinter.messagebox.askyesno(message='Do you have a saved bar?', 
	title='Welcome to Bartinder')

if not bar_message:
	bar = make_bar(master_bar)
	save_bar(bar)
else:
	name = simpledialog.askstring('Input', 'What is your name?', parent=window)
	bar_name = str(name) + '_bar.p'
	bar = pickle.load(open(bar_name, 'rb'))

'''	window.update()
	update_message = tkinter.messagebox.askyesno(message='Do you want to update your bar?', 
	title='Update Bar')

	if update_message:
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
		save_bar(bar)'''



my_menu = make_menu(all_cocktails, bar)

middle.place(relx=0.5, rely=0.5, anchor='center')
window.update()

pick_cocktail(my_menu)


"""if __name__ == "__main__":
	all_cocktails = make_cocktails('master_cocktails_2.csv')
	master_bar = make_master_bar('master_bar.csv')
	bar = pickle.load(open('Elly_bar.p', 'rb'))
	my_menu = make_menu(all_cocktails, bar)
	pick_cocktail(my_menu)
"""



window.wait_window()



		