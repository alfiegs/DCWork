##### BANK APP #####

#### BANK CLASS ####
class Bank:
    def __init__(self, bankName, bankAddress):
        self.bankName = bankName
        self.bankAddress = bankAddress

    def printBankInfo(self):
        print(f'{self.bankName} at {self.bankAddress}')



AlfieBank = Bank('Alfie Bank', '5555 Main')


AlfieBank.printBankInfo()

#### MEMBER CLASS ####

class Member:
    def __init__(self, firstName, lastName, accountNum):
        self.firstName = firstName
        self.lastName = lastName
        self.accountNum = accountNum


    def printMember(self):
        print(f'{self.firstName} {self.lastName} {self.accountNum}')

mike = Member('Mike', 'Smith', '1234')
joe = Member('Joe', 'Jones', '1234')
mike.printMember()




#### ACCOUNT CLASS #####

class Account:
    def __init__(self, balance, withdrawal, deposit):
        self.balance = balance
        self.withdrawal = withdrawal
        self.deposit = deposit

    def withdraw(self):
        balance = balance - withdrawal

    def deposit(self):
        balance = balance + deposit




##### SAVINGS ACCOUNT #####

class Savings:
    def __init__(self)





##### CHECKING ACOUNT #####

