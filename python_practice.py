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