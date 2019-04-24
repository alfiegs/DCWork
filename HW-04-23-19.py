##### PYTHON OBJECTS EXERCISES #####








##### 1. BASICS #####

class Person:

    def __init__(self, name, email, phone): 
        self.name = name 
        self.email = email 
        self.phone = phone
        self.friends = []
        self.greeting_count = 0
        self.unique_greets = []
        self.unique_count = 0

    def greet(self, other_person): 
        print('Hello {}, I am {}!'.format(other_person.name, self.name))
        self.greeting_count += 1
        self.unique_greets.append(friend.name)

    def print_contact(self):
        print(f'{self.name}\'s email is {self.email} and phone number is {self.phone}.')

    def add_friend(self, friend):
        self.friends.append(friend.name)
        print(self.friends)

    def friends_number(self):
        print(len(self.friends))
        
    def __str__(self): 
        return (
        f'''
        Here is the information you requested about {self.name}:
        His/her email address is {self.email}.
        His/her telephone number is {self.phone}.
        ''')

    def num_unique_people_greeted(self):
        if friend in self.unique_greets:
            self.unique_count += 1
            print(f'Unique greets = {self.unique_count}')





#Instantiating the Objects
#1-2
sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')


#Using the Methods
#3-5
# sonny.greet(jordan)
# jordan.greet(sonny)
# sonny.print_contact()
# jordan.print_contact()


#Add a Friend
# sonny.add_friend(jordan)
# jordan.add_friend(sonny)


#Get number of friends
# sonny.friends_number()


#Count Greetings
sonny.greet(jordan)
sonny.greet(jordan)
sonny.greet(jordan)

jordan.greet(sonny)

# print(sonny.greeting_count)
# print(jordan.greeting_count)


#Print String
# print(sonny)
# print(jordan)


#Bonus
sonny.num_unique_people_greeted()






##### 2. MAKE YOUR OWN CLASS #####

# class Vehicle:
#     def __init__(self, make, model, year):
#         self.make = make
#         self.model = model
#         self.year = year
    
#     def print_info(self):
#         print(f'{self.year} {self.make} {self.model}')


# car = Vehicle('Nissan', 'Leaf', 2015)
# print(car.make, car.model, car.year)

# car.print_info()