// // var greeting = "rubadubdub"


// var myObject = {
//     fname: "Alfie",
//     lname: "Santos",
//     city: "Houston",
//     gender: "male",
//     age: "21",
// }

// module.exports = myObject;


// let pi = 3.14;

// let areaCircle = (r) => {
//     return pi * r * r
// }

// module.exports = areaCircle;



class Person {
    constructor(fname, lname){
        this.fname = fname;  //instance variable is equal to variable passed in when object instantiated from this class
        this.lname = lname;
    }
    printName(){
        console.log(`${fname} ${lname}`)
    }
}

module.exports = Person