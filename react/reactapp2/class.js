class Person {
    constructor(fName, lName, location){
        this.fName = fName;
        this.lName = lName;
        this.location = location;
    }

    printName(){
        console.log(this.fName, this.lName, this.location);
    }
}

let person1 = new Person('Alfie', 'Santos', 'Houston');
let person2 = new Person('Joe', 'Blough', 'London');

person1.printName()
person2.printName()