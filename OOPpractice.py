


class Dog:

    species = "mammal"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def description(self):
        print("{} is {} years old.".format(self.name, self.age))

    def speak(self, sound):
        print("{} says {}.".format(self.name, sound))

    def trick(self, trick):
        print("{} can {}!".format(self.name, trick))


class BorderCollie(Dog):
    def run(self, speed):
        return "{} runs {}.".format(self.name, speed)

class BullDog(Dog):
    def run(self, speed):
        return '{} runes {}.'.format(self.name, speed)

# jim = BullDog('Jim', 9)
# print(jim.description())

# jess = BorderCollie('Jess', 2)
# print(jess.description())

# print(jess.run("super fast"))

# print(jim.run('pretty slow'))








philo = Dog('Philo', 5)
mikey = Dog('Mikey', 6)
maxy = Dog('Maxy', 7)
jess = Dog('Jess', 8)
pup = Dog('Pup', 9)

# doggers = [philo, mikey, maxy, jess, pup]

# # for x in doggers:
# #     x.description()


# # jess.speak('Ruff!')
# # pup.speak('Arrrooooooooo!')

# # maxy.trick("do a flip")
# # jess.trick("give paw")



