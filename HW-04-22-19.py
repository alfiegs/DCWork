##### DICTIONARY EXERCISES #####



##### EXERCISE 1 #####
# phonebook_dict = { 
#     'Alice': '703-493-1834', 
#     'Bob': '857-384-1234', 
#     'Elizabeth': '484-584-2923'
# }

# ##### 1.1 #####
# print(phonebook_dict['Alice'])

# ##### 1.2 #####
# phonebook_dict['Kareem'] = "938-489-1234"
# print(phonebook_dict)

# ##### 1.3 #####
# del phonebook_dict['Alice']
# print(phonebook_dict)

##### 1.4 #####
# phonebook_dict['Bob'] = "968-345-2345"
# print(phonebook_dict)

##### 1.5 #####
# print(phonebook_dict)









##### EXERCISE 2 - NESTED DICTIONARIES #####

# ramit = { 
# 'name': 'Ramit', 
# 'email': 'ramit@gmail.com', 
# 'interests': ['movies', 'tennis'], 
# 'friends': [ 
#     { 
#     'name': 'Jasmine', 
#     'email': 'jasmine@yahoo.com', 
#     'interests': ['photography', 'tennis']
#     }, 
#     { 
#     'name': 'Jan', 
#     'email': 'jan@hotmail.com', 
#     'interests': ['movies', 'tv'] 
#     } 
# ] 
# }

##### 2.1 #####
# result = ramit['email']
# print(result)

##### 2.2 #####
# result = ramit['interests'][0]
# print(result)

##### 2.3 #####
# result = ramit['friends'][0]['email']
# print(result)

##### 2.4 #####
# result = ramit['friends'][1]['interests'][1]
# print(result)









##### LETTER SUMMARY #####

# word = input("Enter word here >> ")
# word = word.lower()
# word_dic = {}
# for letter in word:
#     if word_dic.get(letter) == None:
#         word_dic[letter] = 1
#     else:
#         word_dic[letter] += 1
# print(word_dic)


##### Original Stupid Method #####
# letter_dic = {"a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0, "m": 0, "n": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, 'z': 0}
# word = input("Enter a word:")
# number_of_a = 0
# number_of_b = 0
# number_of_c = 0
# number_of_d = 0
# number_of_e = 0
# number_of_f = 0
# number_of_g = 0
# number_of_h = 0
# number_of_i = 0
# number_of_j = 0
# number_of_k = 0
# number_of_l = 0
# number_of_m = 0
# number_of_n = 0
# number_of_o = 0
# number_of_p = 0
# number_of_q = 0
# number_of_r = 0
# number_of_s = 0
# number_of_t = 0
# number_of_u = 0
# number_of_v = 0
# number_of_w = 0
# number_of_x = 0
# number_of_y = 0
# number_of_z = 0

# for letter in word:
#     if letter == "a":
#         number_of_a = number_of_a + 1
#     elif letter == "b":
#         number_of_b = number_of_b + 1
#     elif letter == "c":
#         number_of_c = number_of_c + 1
#     elif letter == "d":
#         number_of_d = number_of_d + 1
#     elif letter == "e":
#         number_of_e = number_of_e + 1
#     elif letter == "f":
#         number_of_f = number_of_f + 1
#     elif letter == "g":
#         number_of_g = number_of_g + 1
#     elif letter == "h":
#         number_of_h = number_of_h + 1
#     elif letter == "i":
#         number_of_i = number_of_i + 1
#     elif letter == "j":
#         number_of_j = number_of_j + 1
#     elif letter == "k":
#         number_of_k = number_of_k + 1
#     elif letter == "l":
#         number_of_l = number_of_l + 1
#     elif letter == "m":
#         number_of_m = number_of_m + 1
#     elif letter == "n":
#         number_of_n = number_of_n + 1
#     elif letter == "o":
#         number_of_o = number_of_o + 1
#     elif letter == "p":
#         number_of_p = number_of_p + 1
#     elif letter == "q":
#         number_of_q = number_of_q + 1
#     elif letter == "r":
#         number_of_r = number_of_r + 1
#     elif letter == "s":
#         number_of_s = number_of_s + 1
#     elif letter == "t":
#         number_of_t = number_of_t + 1
#     elif letter == "u":
#         number_of_u = number_of_u + 1
#     elif letter == "v":
#         number_of_v = number_of_v + 1
#     elif letter == "w":
#         number_of_w = number_of_w + 1
#     elif letter == "x":
#         number_of_x = number_of_x + 1
#     elif letter == "y":
#         number_of_y = number_of_y + 1
#     elif letter == "z":
#         number_of_z = number_of_z + 1
# letter_dic['a'] = number_of_a
# letter_dic['b'] = number_of_b
# letter_dic['c'] = number_of_c
# letter_dic['d'] = number_of_d
# letter_dic['e'] = number_of_e
# letter_dic['f'] = number_of_f
# letter_dic['g'] = number_of_g
# letter_dic['h'] = number_of_h
# letter_dic['i'] = number_of_i
# letter_dic['j'] = number_of_j
# letter_dic['k'] = number_of_k
# letter_dic['l'] = number_of_l
# letter_dic['m'] = number_of_m
# letter_dic['n'] = number_of_n
# letter_dic['o'] = number_of_o
# letter_dic['p'] = number_of_p
# letter_dic['q'] = number_of_q
# letter_dic['r'] = number_of_r
# letter_dic['s'] = number_of_s
# letter_dic['t'] = number_of_t
# letter_dic['u'] = number_of_u
# letter_dic['v'] = number_of_v
# letter_dic['w'] = number_of_w
# letter_dic['x'] = number_of_x
# letter_dic['y'] = number_of_y
# letter_dic['z'] = number_of_z
# print(letter_dic)









##### WORD SUMMARY #####
# word_histogram = {}
# paragraph = input("Enter your text: ")
# paragraph = paragraph.lower()
# paragraph = paragraph.split()

# for word in paragraph:
#     if word_histogram.get(word) == None:
#         word_histogram[word] = 1
#     else:
#         word_histogram[word] += 1
# print(word_histogram)














########### PHONE BOOK #############

phonebook = {
    "Alfie": "111-111-1111",
    "Bart": "222-222-2222",
    "Charlie": "333-333-3333",
    "Dante": "444-444-4444",
    "Enrique": "555-555-5555"
}

menu_text = """
Electronic Phone Book 
===================== 
1. Look up an entry 
2. Set an entry 
3. Delete an entry 
4. List all entries 
5. Quit

Enter a number 1-5.
"""


# input("choose 1-5: ")


#Look Up An Entry#
def lookup():
    search_name = input("Enter name to look up: ")
    search_number = phonebook[search_name]
    print("{}'s phone number is {}.".format(search_name, search_number))


#Set an Entry#
def set_entry():
    name_to_enter = input("Enter name to add: ")
    number_to_enter = input("Enter {}'s phone number: ".format(name_to_enter))
    phonebook[name_to_enter] = number_to_enter
    print("{}'s number has been added to your phonebook.".format(name_to_enter))

#Delete an Entry#
def delete_entry():
    name_to_delete = input("Which entry would you like to delete? ")
    del phonebook[name_to_delete]
    print('{} has been deleted from your phonebook.'.format(name_to_delete))
    print(phonebook)

#List All Entries#
def all_entries():
    print("Here are all of your phonebook entries: ")
    for key, value in phonebook.items():
        print(key)
        print(value)

#Quit#
def quit():
    print("Goodbye!")



choice = input(menu_text)
if choice == "1":
    lookup()
if choice == "2":
    set_entry()
if choice == "3":
    delete_entry
if choice == "4":
    all_entries()
if choice == "5":
    quit()


