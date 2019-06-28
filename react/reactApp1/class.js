
// FUNCTION VS class





// // CLASS

// class myClass {
//     constructor(fName, lName, location){
//         this.fName = fName;
//         this.lName = lName;
//         this.location = location;
//         this.counter = 0;

//     }
//     greeting(){
//         this.counter++;
//         console.log(`Hello ${this.fName} ${this.lName}, ${this.counter}`);
//     }
// }

// let alfie = new myClass('Alfie', 'Santos', 'Houston')
// alfie.greeting()
// alfie.greeting()
// alfie.greeting()
// //alfie counter is 3

// let tarek = new myClass('Tarek', 'Beb', 'Houston')
// tarek.greeting()
// //tarek counter is 1 because this object keeps its own state, its own counter

// //a class can hold state and a function cannot, a class can remember the counter and keep incrementing




// //FUNCTIONS

// function myFunction(fName, lName){
//     let counter = 0;
//     counter++;
//     console.log(fName, lName, counter);
// }

// myFunction('Alfie', 'Santos');
// myFunction('Alfie', 'Santos');
// myFunction('Alfie', 'Santos');
// //in a regular function, a function doesn't hold state, so the counter goes back to 0 every time the function finishes executing



// //MAP
// //map executes function for each item in array and returns new array
// let myArray = [1,2,3,4,5]
// let newArray = myArray.map((index) => {
//     return index + 1;
// });

// console.log(myArray);
// console.log(newArray);




// //DESTRUCTURING
// let myObj = {
//     fName: 'Alfie',
//     lName: 'Santos',
//     location: 'Houston'
// }

// let {fName, lName} = myObj

// console.log(fName);
// console.log(lName);



class ElectricCar {
    constructor(){

    }
    carType(){
        console.log(`I am an electric car`);
    }
}

class Car extends ElectricCar{
    constructor(make, model){
        this.make = make;
        this.model = model

    }
}



let honda = Car('Honda', 'Accord');

honda.carType()
