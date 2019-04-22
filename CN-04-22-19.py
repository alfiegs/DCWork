



# my_dictionary = {
#     "Item 1" : "Thing A",
#     "Item 2" : "Thing B"
# }

# print(my_dictionary["Item 1"])

# phone_dictionary = {
#     "first_name" : "Alfie",
#     "last_name" : "Santos",
#     "is_cool" : True,
#     "is lame" : False
# }

# entry = phone_dictionary["is_cool"]
# print(entry)

# result = phone_dictionary.get("first_name")
# print(result)

# if result != None:
#     print(f"key was found: {result}")
# else:
#         print(f"key was not found")

# my_dictionary = {
#     "hello" :   "world",
#     "sqareOfTwo" : 4,
#     "theMeaningOfLife" : 42,
#     0 : 1
# }
# isItThere = "hello" in my_dictionary
# print(isItThere)

# if "wat" in my_dictionary:
#     print("found")
# else:
#     print("not found")

# print(my_dictionary)

# my_dictionary["hello"] = "Digital Crafts"

# print(my_dictionary)

# my_dictionary["school"] = "Digital Crafts"

# print(my_dictionary)

# results = my_dictionary.keys()
# print(results)

# for result in results:
#     print(result)

# results = my_dictionary.values()
# print(results)

# for result in results:
#     print(result)

# print(my_dictionary)
# del my_dictionary['hello']
# print(my_dictionary)

# results = my_dictionary.items()
# print(results)

# for key, value in my_dictionary.items():
#     # print(key)
#     # print(value)
#     print(f"my key is {key} and my value is {value}")

# contactList = [{
#     "first_name" : "Alfie",
#     "last_name" : "Santos",
#     "email" : "alfie@alfie.com",
#     "phone" : {
#         "work" : "555-555-5555",
#         "home" : "444-444-4444"
#     }
# }, {
#     "first_name" : "Mike",
#     "last_name" : "Mikeson",
#     "email" : "mikemikeson@mike.com",
#     "phone" : {
#         "work" : "555-555-5555",
#         "home" : "444-444-4444"
#     }
# }, {
#     "first_name" : "Joe",
#     "last_name" : "Joeson",
#     "email" : "joejoe@mike.com",
#     "phone" : {
#         "work" : "555-555-5555",
#         "home" : "444-444-4444"
#     }
# }]

# result = contactList[0]["first_name"]
# print(result)

# result = contactList[1]["last_name"]
# print(result)

# result = contactList[0]["phone"]["work"]
# print(result)

# while True:
#     try: 
#         x = int(input("Enter in a number: "))
#         break

#     except ValueError:
#         print("Oops, try again.")

# x = 10

# if x > 5:
#     raise Exception('this is a custom error')


import pickle
data = {'name' : 'paul'}
with open('data.pickle', 'wb') as fh:
    pickle.dump(data, fh)

with open('data.pickle', 'rb') as fh:
    data = pickle.load(fh)
    print(data)

print(data['name'])
