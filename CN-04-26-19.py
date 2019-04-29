
#Class Notes - 04/26/19

###################################################

##### Practice Problem #####

# "Given a string, reverse each word in the sentence"
# "Hello World! >> \'olleH !dlroW\'"

# word = "Hello World!"
# word_list = []

# # split_string = word.split()

# # print(split_string)

# # for x in split_string:
# #     x.reverse()

# # print(split_string)

# for x in split_string:
#     print 

# for x in word:
#     word_list.append(x)

# word_list.reverse()

# # print(word_list)

# for x in word_list:
#     print(x, end = " ")


###################################################


#### Katie's Solution ####
# def reverse_words(sentance):
#     reversed = ""
#     for i in sentance:
#         reversed = i+reversed
#     split = reversed.split(" ")
#     new_sentance = ""
#     for i in split:
#         new_sentance = i + " " + new_sentance
#     print(new_sentance)


# reverse_words("hello world")



###################################################
# Inheritance Practice #

class Character(object):
    def __init__(self, health, power):
        self.health = health
        self.power = power

    def print_self(self):
        print("I am a hero.")


class Hero(Character):
    def __init__(self, health, power):
        super(Hero, self).__init__(health, power)



class Goblin(Character):
    pass

hero = Hero(100, 10)
goblin = Goblin(4, 1)


hero.print_self()
goblin.print_self()

print(hero.health)
print


