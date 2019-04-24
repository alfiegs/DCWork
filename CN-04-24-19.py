class Student:

    def __init__(self, firstName, lastName, campus):
        self.firstName = firstName
        self.lastName = lastName
        self.campus = campus
    
    def printStudent(self):
        print(f"{self.firstName} {self.lastName} campus: {self.campus}")

Alfie = Student('Alfie', 'Santos', 'Houston')

# Sabrina = Student('Sabrina', 'Goldfarb', 'Houston')

# Michael = Student('Michael', 'Dao', 'Houston')

# Cindy = Student('Cindy', 'Smith', 'Atlanta')

class Campus(object):
    def __init__(self):
        self.students = []

    def addStudent(self, firstName, lastName, campus):
        temp = Student(firstName, lastName, campus)
        self.students.append(temp)

    def showCurrentStudents(self):
        for studentObject in self.students:
            print(studentObject.firstName)





management = Campus()

management.addStudent('Alfie', 'Santos', 'Houston')
management.addStudent('Sabrina', 'Goldfarb', 'Houston')
management.addStudent('Michael', 'Dao', 'Houston')
management.addStudent('Cindy', 'Smith', 'Atlanta')

management.showCurrentStudents()

