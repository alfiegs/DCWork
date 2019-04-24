
##### OBJECT ORIENTED PROGRAMMING #####


# student1 = "Tarek"
# student2 = "Chris"
# student3 = "Michael"


# def students():
#     print(f"{student1} {student2} {student3}")

# students()

# student1 = "Glen"

# students()





# class Students:
#     def Print_students():
#         print("Tarek Chris Michael")


# class Students:
#     def students(self):
#         print("Tarek Chris Michael")

# Michael = Students()
# Michael.students()

# Chris = Students()
# Chris.students()

# class MyClass(object):
#     def __init__(self, first_name, last_name):
#         print("Hello World")
#         self.first_name = first_name
#         self.last_name = last_name
    
#     def printName(self):
#         print(f'{self.first_name} {self.last_name}')

# dc = MyClass("Alfie", "Santos")
# dc.printName()

# dc_houston = MyClass("Mohamad", "Azam")
# dc_houston.printName()

# def Person(name, count):
#     print(f"my name is {name} {count}")
#     count = count  + 1
#     return count

# count = Person("Lisa", 0)
# print(count)
# count = Person('Alfie', count)
# print(count)

# countPeter = Person("Peter", 5)
# print(countPeter)



# class Person(object):
#     def __init__(self, name, whoAmI):
#         self.name = name
#         self.count = 0
#         self.whoAmI = whoAmI
#         # print(f"hello {self.name}")

#     def change_name(self, new_name):
#         self.name = new_name
#         self.count = self.count + 1
#         print(f"name: {self.name} count: {self.count} who: {self.whoAmI}")


# student = Person("Alfie", "student")
# atlanta_students = Person("Michael")
# student.change_name("Matt")
# student.change_name("Katie")
# student.change_name("Chris")

# atlanta_students.change_name("Jake")

# student.change_name("Andrew")
# student.change_name("Sabrina")

# atlanta_students.change_name("Boris")








#############################################PHONE CLASS#############################################

# class Phone(object):
#     def __init__(self, phone_type):
#         self.phone_type = phone_type
#         self.status = "off"

#     def print_phone(self):
#         print(self.phone_type)

#     def on(self):
#         print('on')
#         self.status = "on"
#     def off(self):
#         print('off')
#         self.status = "off"

#     def get_status(self):
#         print(f"Your {self.phone_type} phone is currently {self.status}")

# android = Phone("android")
# iphone = Phone('iphone')
# blackberry = Phone('blackberry')

# android.get_status()
# android.on()
# android.get_status()
# android.off()
# android.get_status()
# iphone.get_status()



#########################################################################################################


######## CAR ########

# class Car(object):


#     def __init__(self, make, model, color):
#         self.make = make
#         self.model = model
#         self.color = color
#         self.door_status = 'closed'
#         print(f"make: {self.make}, model: {self.model}, color: {self.color}")
    
#     def change_color(self, new_color):
#         self.color = new_color
#         return (self.color)
    
#     def open_door(self):
#         self.door_status = 'open' 

#     def display_color(self):
#         print(f"The color of your {self.make} is {self.color}")



# toyota = Car("toyota", "prius", "green")
# honda = Car('honda', 'civic', 'purple')
# jeep = Car('jeep', 'wrangler', 'white')
# f150 = Car('ford', 'f150', 'marble')

# f150.change_color('midnight red')
# f150.display_color()

# fleet = [toyota, honda, jeep, f150]
# for x in fleet:
#     print(x.display_color())



















#################################################

# import datetime # we will use this for date objects
# class Person:
#     def __init__(self, name, surname, birthdate, address, telephone, email):
#         self.name = name
#         self.surname = surname
#         self.birthdate = birthdate
#         self.address = address
#         self.telephone = telephone
#         self.email = email
#     def age(self):
#         today = datetime.date.today()

#         age = today.year - self.birthdate.year

#         if today < datetime.date(today.year, self.birthdate.month, 
#         self.birthdate.day):
#             age -= 1
#         return age


# person = Person(
#     "Jane",
#     "Doe",
#     datetime.date(1992, 3, 12), # year, month, day
#     "No. 12 Short Street, Greenville",
#     "555 456 0987",
#     "jane.doe@example.com"
# )

# print(person.name)
# print(person.email)
# print(person.age())













##### INSTANTIATION #####

# class Animal:
#     def __init__ (self, name):
#         self.name = name

#     def fourlegs(self):
#         print('I have four legs')


# class Dog(Animal):
#     def woof(self):
#         print('woof')

# puppy = Dog('pickle')
# print(puppy.name)
# puppy.woof()

# puppy2 = Dog('henry')
# print(puppy2.name)

# class Cat(Animal):
#     def meow(self):
#         print('meow')

# cat = Cat('misty')
# cat2 = Cat('bubbles')

# print(cat.name)
# print(cat2.name)

# cat.meow()

# cat.fourlegs()
# puppy.fourlegs()




class Car(object):


    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color
        self.door_status = 'closed'
        print(f"make: {self.make}, model: {self.model}, color: {self.color}")
    
    def change_color(self, new_color):
        self.color = new_color
        return (self.color)
    
    def open_door(self):
        self.door_status = 'open' 

    def display_color(self):
        print(f"The color of your {self.make} is {self.color}")

    def override(self):
        print('override of car class')

    def altered(self):
        print('altered of car class')

#######INHERIT CAR CLASS#######
class ElectricCar(Car):

    def printCarType(self):
        print('Im an electric car')

    def override(self):
        print('override of x class')
    
    def altered(self):
        print('BEFORE altered of electric car class')
        super(ElectricCar, self).alered()


class HybridCar(Car):

    def printCarType(self):
        print('Im a hybrid')


ec = ElectricCar('Tesla', 'S', 'red')
ec.printCarType()
ec.override()
ec.altered()

# toyota = Car("toyota", "prius", "green")
# honda = Car('honda', 'civic', 'purple')
# jeep = Car('jeep', 'wrangler', 'white')
# f150 = Car('ford', 'f150', 'marble')

# f150.change_color('midnight red')
# f150.display_color()

# fleet = [toyota, honda, jeep, f150]
# for x in fleet:
#     print(x.display_color())