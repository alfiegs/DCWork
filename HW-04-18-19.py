##### 1. Hello #####

# def Hello(name):
#     print("Hello " + name)

# Hello("Igor")









##### 2. y = x + 1 #####

# import matplotlib.pyplot as plot 

# def f(x): 
#     # put your code here
#     return (x + 1)
# xs = list(range(-3, 4)) 
# ys = [] 

# for x in xs: 
#     ys.append(f(x)) 

# plot.plot(xs, ys) 
# plot.show()







##### 3. Square of x #####

# import matplotlib.pyplot as plot 

# def f(x): 
#     # put your code here
#     return (x * x)
# xs = list(range(-100, 100, 1)) 
# ys = [] 

# for x in xs: 
#     ys.append(f(x)) 

# plot.plot(xs, ys) 
# plot.show()







##### 4. Odd or Even #####

# import matplotlib.pyplot as plot 

# def f(x): 
#     # put your code here
#     if (x % 2 == 0):
#         return 1
#     if (x % 2 != 0):
#         return -1
# xs = list(range(-5, 5, 1)) 
# ys = [] 

# for x in xs: 
#     ys.append(f(x)) 

# plot.bar(xs, ys) 
# plot.show()







#### 5. Sine #####
# import matplotlib.pyplot as plot 
# import math


# def f(x): 
#     # put your code here
#     return math.sin(x)
# xs = list(range(-5, 5, 1)) 
# ys = [] 

# for x in xs: 
#     ys.append(f(x)) 

# plot.plot(xs, ys) 
# plot.show()








#####################################################################################
#CAN'T INSTALL NUMPY
##### Sine 2 #####

# import matplotlib.pyplot as plot 
# import math
# from numpy import arange

# def f(x): 
#     # put your code here
#     return math.sin(x)
# xs = list(arrange(-5, 5, 0.1)) 
# ys = [] 

# for x in xs: 
#     ys.append(f(x)) 

# plot.plot(xs, ys) 
# plot.show()
#########################################################################################








##### 7. Degree Conversion #####


# import matplotlib.pyplot as plot 


# def CtoF(tempC):
#     tempF = (1.8 * int(tempC)) + 32 
#     return (tempF)

# temps_in_c = range(0, 11)
# temps_in_f = []

# for temp in temps_in_c:
#     temps_in_f.append(CtoF(temp))

# print(temps_in_c)
# print(temps_in_f)


# plot.plot(temps_in_c, temps_in_f)
# plot.xlabel('Temp in C')
# plot.ylabel('Temp in F')
# plot.show()










#@@@@@@@@@@@@@@@@@@@@@@@
#Check

##### 8. Play again? #####


# def play_again(answer):
#     if answer == "y" or "yes":
#         return True
#     else:
#         return False

# answer = input("Play again? ")
# play_again(answer)










##### 9. Play again? Again. #####


# def play_again(answer):
#     if answer == "y":
#         return True
#     elif answer == "n":
#         return False
#     else:
#         return "invalid input"

# answer = input("Play again? ")
# play_again(answer)
