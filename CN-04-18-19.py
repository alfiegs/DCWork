# ### CLASS NOTES - 04-18-19 ####

# #  def separateRuns():
# #     print('******************')
# #     print()      

# # def getGroceries():
# #     print('milk')
# #     print('flour')
# #     print('sugar')
# #     print('butter')
# #     separateRuns()

# # getGroceries()

# # def blend(power, minutes):
# #     print(power * minutes)

# # def addTwo(startingValue):
# #     print(startingValue + 2)
# #     return "hello world"


# # result = addTwo(5)

# # print(result)





# ##### Returning a Single Value #####
# # def square(number):
# #     answer = number * number
# #     return answer

# # result = square(4)

# # print(result + 4)





# ##### Returning Multiple Values #####

# # def square(n):
# #     return n*n, n*n*n, 2*n

# # result1, result2, result3 = square(4)
# # print(result1, result2, result3)

# # from math import sqrt ###import statement to import math function from other file###
# # def quadratic(a, b, c):
# #     x1 = -b / (2*a)

# #     x2 = sqrt(b**2 - 4*a*c) / (2*a)
# #     return (x1 + x2), (x1 - x2)

# # print(quadratic(a=31, b=93, c=62))

# # print('coma', 'separated', 'words', sep=" * ")

# # def HelloWorld(myString):
# #     return myString

# #     a = 3
# #     b = 4
# #     c = a + b

# # # print(HelloWorld("hey guys"))

# # def F2C(nDegreesF):
# #     nDegreesC = (nDegreesF - 32) * (5.0 / 9.0)
# #     return nDegreesC

# # def C2F(nDegreesC):
# #     nDegreesF = (1.8 * nDegreesC) + 32
# #     return nDegreesF

# # # usersTempF = input('Enter a value of degrees Fahrenheit: ')
# # # usersTempF = float(usersTempF)
# # # convertedTempC = F2C(usersTempF)
# # # print(f"temp in celsius is: {convertedTempC}")

# # usersTempC = input('Enter a value of degrees Celsius: ')
# # usersTempC = float(usersTempC)
# # convertedTempF = C2F(usersTempC)
# # print(usersTempC, 'degrees Centigrade is:', convertedTempF, 'degrees Fahrenheit.')


# # rectL = int(input('What is the length of rectangle: '))
# # rectH = int(input('What is the height of rectangle: '))

# # def area(length, height):
# #     return length * height

# # print(area(rectL, rectH))

# # def circumference(length, height):
# #     return 2*length + 2*height

# # print(circumference(rectL, rectH))

# # def area():
# #     length = 5
# #     height = 4
# #     print(length*height)
# #     return length * height
# # area()

# myList = [3, 7, 4, 9, 12]

# def something():
#     myList

# from turtle import *
# forward(100)
# right(90)
# forward(100)
# right(90)
# forward(100)
# right(90)
# forward(100)
# mainloop()

# from turtle import *
# # move into position
# up()
# forward(50)
# left(90)
# forward(50)
# left(90)
# down()
# # draw the square
# forward(100)
# left(90)
# forward(100)
# left(90)
# forward(100)
# left(90)
# forward(100)
# mainloop()

# from turtle import *
# pencolor('orange')
# width(10)
# circle(360)


# from turtle import *
# pencolor('blue')
# width(5)
# for i in range(5):
#     forward(100)
#     right(144)
# mainloop()

# from turtle import *
# pencolor('blue')
# width('10')
# forward(100)
# left(90)
# forward(100)
# left(90)
# forward(100)
# left(90)
# forward(100)
# left(145)
# forward(100)
# mainloop()


import matplotlib
matplotlib.use("Agg")
from matplotlib import pyplot
f_output = []
g_output = []
def f(x):
  return 2 * x + 1
def g(x):
  return x + 1
x_list = list(range(-3, 5))
for x in x_list:
  f_output.append(f(x))
  g_output.append(g(x))

print(x_list)
pyplot.plot(x_list, f_output, x_list, g_output)
pyplot.savefig('myplot.png')
pyplot.close() # start a new plot