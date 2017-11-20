from tkinter import * 
import tkinter.messagebox

import time

window = Tk()


class Checklist():
	def __init__(self, parent=None, list_options=[]):
		self.parent = parent
		self.vars = []
		self.list_options = list_options
		self.check_items = []

		row = 1
		col = 1

		for option in self.list_options:
			var = IntVar()
			check_item = Checkbutton(window, text=option, variable=var)
			check_item.grid(row=row, column=col)
			self.check_items.append(check_item)
			self.vars.append(var)

			if row < len(self.list_options)/2:
				row += 1
			else:
				row = 1
				col += 1

	def check_vars(self):
		have_items = []

		for item, var in zip(self.list_options, self.vars):
			if var.get():
				have_items.append(item)

		print(have_items)
		return have_items

	def clear_list(self):
		for item in self.check_items:
			item.destroy()



def show_message():
	answer = tkinter.messagebox.showinfo(message='Here is the question?', title='Question', icon='question')
	if answer == 'ok':
		print('correct!')



# This chunk checks for swipes left and right
# 1. captures the motion of the mouse and appends it to moves
# 2. check if the mouse has left the swipe area
# 3. once the mouse has left, checks if it went left or right
moves = []
likes = []
dislikes = []

my_list = ['hello', 'hi', 'purple', 'grapefruit', 'peanut']

checklist_over = False

class SwipeScreen():

	def __init__(self, parent=None, widget=None, item=None):
		self.parent = parent
		self.widget = widget
		self.item = item
		self.likes = []
		self.dislikes = []
		self.x_value = 0

		print('made a swipe screen')

	def read_swipe(self, event):
		self.x_value = event.x

	def make_swipe(self):
		title = Label(text=self.item)
		title.grid(column=2)

		print(self.item)

		self.widget.bind('<Leave>', self.read_swipe)

		while self.x_value == 0:
			self.parent.update()

		print(self.x_value)

		if self.x_value > 200:
			self.likes.append(self.item)
		elif self.x_value < 200:
			self.dislikes.append(self.item)

		title.destroy()

		return self.likes, self.dislikes


def clear_checklist_popup():
	message = tkinter.messagebox.askokcancel(message='Are you done?', title='Question')
	if message:
		my_checklist.check_vars()
		my_checklist.clear_list()
		test_button.destroy()
		window.update()

		launch_swipe()


def draw_swipe_screen():
	middle = Frame(width=300, height=400, bg='blue')
	middle.grid(row=0, column=1, rowspan=5, columnspan=3)

	left = Label(text='left')
	right = Label(text='right')

	left.grid(row=0, column=0)
	right.grid(row=0, column=4)

	return middle, left, right


def swipe_items(my_list, window, widget):
	for item in my_list:
		swipe = SwipeScreen(window, widget, item)
		like, dislike = swipe.make_swipe()
		if like != []:
			likes.append(like[0])
		
		if dislike != []:
			dislikes.append(dislike[0])

	print('likes: {}\n dislikes: {}'.format(likes, dislikes))


def launch_swipe():
	middle, left, right = draw_swipe_screen()
	swipe_items(my_list, window, middle)

my_checklist = Checklist(window, my_list)
test_button = Button(text='I am a button', command=clear_checklist_popup)
test_button.grid(row=8, columnspan=2)



window.update()
window.mainloop()

