##### given an array of elements return a new array 
#containing only reepeated elements. 
#If two elements have the same value but different types 
#consider them the same.
#i.e. 1 = "1"

my_array = [1, 2, 3, 4, 5, 1, 2, 'one', 'one']
new_array = []
duplicates = []
#new_array = [1, 2, 3, 4, 5, 'one']


for x in my_array:
    if x not in new_array:
        new_array.append(x)








print(new_array)
