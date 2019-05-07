# ##### given an array of elements return a new array 
#containing only reepeated elements. 
#If two elements have the same value but different types 
#consider them the same.
#i.e. 1 = "1"

# my_array = [1, 2, 3, 4, 5, 1, 2, 'one', 'one']
# new_array = []
# duplicates = []
# #new_array = [1, 2, 3, 4, 5, 'one']


# for x in my_array:
#     if x in new_array:
#         duplicates.append(x)
#     else:
#         new_array.append(x)



# print(duplicates)
# print(new_array)








#There are three boxes of fruit. One contains only apples, one contains only oranges, 
#and one contains a mix of apples and oranges. 
#All of the boxes are mislabled. 
#How can you remove 1 fruit from 1 box and correct the labels?

#Remove one from mixed. Because mixed is mislabeled, you know that whatever you choose from the mixed box should be the box's true label. Then you just switch the other two labels.  










# Write a function that counts the number of given vowels in a string


the_string = input("Enter phrase: ")
vowels = "aeiou"
vowels_in_string = []
a_list = []
e_list = []
i_list = []
o_list = []
u_list = []

for x in the_string:
    if x in vowels:
        vowels_in_string.append(x)

for x in vowels_in_string:
    if x == "a":
        a_list.append(x)
    if x == "e":
        e_list.append(x)
    if x == "i":
        i_list.append(x)
    if x == "o":
        o_list.append(x)
    if x == "u":
        u_list.append(x)

Alength = len(a_list)
Elength = len(e_list)
Ilength = len(i_list)
Olength = len(o_list)
Ulength = len(u_list)


print("Total vowels = " + str(len(vowels_in_string)))
print("Number of A's = " + str(Alength))
print("Number of E's = " + str(Elength))
print("Number of I's = " + str(Ilength))
print("Number of O's = " + str(Olength))
print("Number of U's = " + str(Ulength))


