
// function name(){
//     console.log('hello world')
// }

// name()

//SELF INVOKING FUNCTION - encapsulates function names in case they are used by another imported module

// (function (){
// console.log('hello world')
// })()



//ASSIGN (ANONYMOUS) FUNCTION TO VARIABLE - name is now variable name for the function
// var name = function (name){
//     console.log('my name is ' + name)
// }

// name('Alfie')



//
// function adamsFunction(name){
//     return 'whats up ' + name
// }

// var result = adamsFunction('Ollie')

// console.log(result)



//ADD FUNCTION

// var add = function(num1, num2){
//     return num1 + num2
// }

// console.log(add(3, 4))


//SUBTRACT FUNCTION

// var subtract = function(num1, num2){
//     return num1 - num2
// }

// console.log(subtract(4, 2))


//CALL BACK FUNCTION - pass a function to another function as a parameter

// var calc = function(num1, num2, operation){
//     return operation(num1, num2)
// }

// //see add function above, add function is being passed to calc along with 4 and 5
// var result = calc(4, 5, add)
// console.log(result)

// //VOCAB - in the above function, the following terms are:
// //add = callback
// //calc = higher order function




// var myArray = [5, 6, 3, 9, 12, 8, 3]
// //function can be written outside or inside parentheses
// //higher order function executes inner function for each item in array
// //this function logs each item that is in myArray
// myArray.forEach(function(element){
//     console.log(element)
// })




// //map function allows me to modify each element in myArray and assign new element to newArray
// //map function returns something, forEach does not return it
// var myArray = [5, 6, 3, 9, 12, 8, 3]

// var newArray = myArray.map(function(element){
//     return element * 10
// })

// console.log(newArray)



// //FILTER FUNCTION - filters elements from myArray and adds them to newArray
// //if element in myArray is greater than 5 it will be added to newArray

// var myArray = [5, 6, 3, 9, 12, 8, 3]
// newArray = myArray.filter(function(element){
// return element > 5;
// })
// console.log(newArray)


// //FILTER DAYS OF THE WEEK AND RETURN NEW ARRAY
// var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// var filteredWeek = daysOfWeek.filter(function(days){
//     return days != 'Monday' && days !='Tuesday' //use && operator for multiple days
// })

// console.log(filteredWeek)




// //SOME FUNCTION
// var arr = [0, 1, 2, 3, 4, 5]

// var test = arr.some(function(element){
//     return element < 2; //is there an element less than 2 in arr? If so, it will return boolean True
// })

// console.log(test)





// Greeting('Alfie') //can call regular function before you define it (call is above definition)
// function Greeting(name){
//     console.log('hello ' + name)
// }

//But you cant call anonymous function inside a variable before defining function

// Greeting('Alfie')  //calling function variable before function defined
//  var Greeting = function(name){
//      console.log('hello ' + name)
//  }




//VAR VS. LET
//BLOCK SCOPE VARIABLES
//an if statement changes the original value of a variable forever;
//let makes the variable change in an if statement temporary 
//const makes the variable never change at all

// var a = 5;
// console.log('original value: ' + a)
// if(true){
//     var a = 34;
//     console.log('inside if statement: ' + a)
// }

// console.log('outside if statement: ' + a)



//LET INSIDE AN IF STATEMENT
var a = 5;
console.log('original value: ' + a)
if(true){
    let a = 34; //LET INSTEAD OF VAR
    console.log('inside if statement: ' + a)
}

console.log('outside if statement: ' + a)