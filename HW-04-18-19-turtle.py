##### TURTLE EXERCISES #####

##### Exercise 0 #####




# from turtle import *

# up()
# forward(50)
# left(90)
# forward(50)
# left(90)
# down()

# forward(100)
# right(90)
# forward(100)
# right(90)
# forward(100)
# right(90)
# forward(100)
# mainloop()





##### Exercise 1 #####


# #EQUILATERAL TRIANGLE#
# from turtle import *
# forward(100)
# right(120)
# forward(100)
# right(120)
# forward(100)
# mainloop()

#SQUARE#
# from turtle import *
# forward(100)
# right(90)
# forward(100)
# right(90)
# forward(100)
# right(90)
# forward(100)
# mainloop()

#PENTAGON#
# from turtle import *
# forward(100)
# right(72)
# forward(100)
# right(72)
# forward(100)
# right(72)
# forward(100)
# right(72)
# forward(100)
# right(72)
# mainloop()

#HEXAGON#
# from turtle import *
# forward(100)
# right(60)
# forward(100)
# right(60)
# forward(100)
# right(60)
# forward(100)
# right(60)
# forward(100)
# right(60)
# forward(100)
# right(60)
# mainloop()

#OCTAGON#
# from turtle import *
# forward(100)
# right(45)
# forward(100)
# right(45)
# forward(100)
# right(45)
# forward(100)
# right(45)
# forward(100)
# right(45)
# forward(100)
# right(45)
# forward(100)
# right(45)
# forward(100)
# right(45)
# mainloop()

#STAR#
# from turtle import *
# forward(100)
# right(144)
# forward(100)
# right(144)
# forward(100)
# right(144)
# forward(100)
# right(144)
# forward(100)
# right(144)
# mainloop()

#CIRCLE#
# from turtle import *
# circle(50, 180)
# mainloop()











##### STARRY NIGHT #####

from turtle import *
speed(10)

#night sky#
up()
backward(300)
down()
begin_fill()
color('DeepSkyBlue4')
forward(600)
left(90)
forward(200)
left(90)
forward(600)
left(90)
forward(200)
end_fill()

#grass field#
begin_fill()
color('green')
forward(200)
left(90)
forward(600)
left(90)
forward(200)
end_fill()

#star1#
up()
goto(-260, 160)
down()
begin_fill()
color('gold')
def star():
    for i in range(5):
        forward(30)
        right(144)
print(star())
end_fill()

#star2#
up()
goto(-240, 100)
down()
begin_fill()
color('gold')
def star():
    for i in range(5):
        forward(50)
        right(144)
print(star())
end_fill()


#star3#
for x in range(-200, -100, 20):
    up()
    goto(x, 150)
    down()
    begin_fill()
    color('gold')
    def star():
        for x in range(5):
            forward(10)
            right(144)
    print(star())
    end_fill()


#house#

up()
goto(50, -50)
right(90)
down()
begin_fill
color('black')
forward(100)
left(90)
forward(90)
right(90)
forward(20)
left(135)
forward(100)
left(90)
forward(100)
left(135)
forward(23)
right(90)
forward(100)
end_fill()


mainloop()
