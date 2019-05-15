//ES6 PRACTICE



// //variables ES5 vs ES6

// //VAR VARIABLE 
// var a = 4; // original value of "a" (will change in if block)
// console.log(a)

// if (a < 5){    //area between brackets is "block"
//     var a = 24
// }

// console.log(a) //value of variable "a" has been changed by block of code in if statement

// //------------------------------------------------------------------

// //LET VARIABLE - define variables only within a block (LET IS A BLOCK SCOPE VARIABLE)
// //LET is only in ES6
// var a = 4; // original value of "a" (will change in if block)
// console.log(a)
// if (a < 5){    //area between brackets is "block"
//     let a = 24  // a=24 only within the block, then changes back after block executes
// }
// console.log(a) //value of variable "a" has been changed by block of code in if statement

// //------------------------------------------------------------------

// var a = 4; // original value of "a" 
// console.log(a)
// function fun1(){ //no need for LET in function block because variables in function block only exist within function
//     let a = 24;     //either VAR or LET in a function block will not change original VAR call
// }
// fun1();
// console.log(a)



//LET VARIABLE IN FOR LOOP
// var a = 3;
// console.log("original a = " + a)
// for (var a = 0; a < 10; a++){  //VAR in a for loop changes the global VAR a
//     console.log(a);
// }
// console.log("new value of a after for loop executes = " + a)

// var a = 3;
// console.log("original a = " +a)
// for (let a = 0; a < 10; a++){  //LET in a for loop doesn't change the global VAR a
//     console.log(a);
// }
// console.log("same value of a even after for loop executes = " + a)






//STRINGS
// //------------------------------------------------------------------
//STRINGS
//Concatenating using backticks -- ES5 or ES6
//AKA Interpolation
//TEMPLATE LITERALS

// let a = 4;
// let b = 45;
// let test = "a: " + a + ", b: " + b; //ES5 concatenation
// console.log(test);
// //OR
// let test2 = `a: ${a}, b: ${b}`; //ES6 concatenation/interpolation
// console.log(test2);




//Backticks in ES6
// let text = 'They\'re'; //ES5 backslash/escape out of ' if single quotes are used for string
// let text2 = "They're"; //ES5 different quote styles
// let text3 = `They're "they're" //` //ES6 anything in backticks gets read, regardless of character



//new lines in ES6

// //backslash n = new line in ES6
// var text = (
//     'cat\n' +
//     'dog\n'
// )
// console.log(text) //prints cat and dog on new lines

// let text2 = [
//     'cat',
//     'dog',
//     'snake'
// ].join('\n') // ES5 use join method to print each item in array on new line
// console.log(text2)

// let text3 = (  //ES6 uses backticks to print new lines
//     `cat
// dog
// snake`
// )
// console.log(text3)





//CODE INSIDE OBJECT LITERALS
// let today = new Date();
// console.log(today.toLocaleString())

// let text = `The time and day is ${today.toLocaleString()}.` //code to convert today function to time and day
// console.log(text)

// let text1 = `${4 + 5}` //code to add 4 and 5
// console.log(text1)





// //------------------------------------------------------------------

//ES5 adding variables to array
// var arr = [1, 2, 3, 4];
// var a = arr[0];
// var b = arr[1];
// var c = arr[2];
// var d = arr[3];
// console.log(a)


// let [e, f, g, h] = [1, 2, 3, 4]
// console.log(e)




//ES5 Manipulating objects
// var luke = {occupation: 'Jedi',
// father: 'Anakin'}

// var occupation = luke.occupation;
// var father = luke.father;
// console.log(occupation + father)

//ES6 manipulating objects
// let luke = {occupation: 'Jedi',
// father: 'Anakin'}
// let {occupation, father} = luke
// console.log(occupation);
// console.log(father)




// //------------------------------------------------------------------

//FUNCTIONS

//ES5 Creating Functions

// function fun1(){
//     return "Hello World"
// }
// console.log(fun1())

// //ES6 Creating Functions

// let fun2 = () => "Hello World"
// console.log(fun2())


//Function with argument in ES5
// function greeting(name){
//     return `hello ${name}`;
// }
// console.log(greeting('Bob'))

//Functoin with argument in ES6
// let greeting2 = (name) => `hello ${name}`;
// console.log(greeting('Alfie'))





// //ES5 version of MAP
// let materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium',
// ]
// let newMaterials = materials.map(function(element){
//     return `${element}s`
// })
// console.log(newMaterials);

// //ES6 version of MAP
// let materials2 = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium',
// ]
// let newMaterials2 = materials2.map(element => `${element}s`)
// console.log(newMaterials2);



//DEFAULT PARAMETERS

// function addTwoNumbers(x, y){
//     x = x || 0;
//     y = y || 0;
//     return x + y;
// }

// var result = addTwoNumbers();
// console.log(result)



// function addTwoNumbers2(x = 0, y = 0){
//     return x + y;
// }

// console.log(addTwoNumbers2())
// console.log(addTwoNumbers2(4, 5))






// //REST PARAMETERS
// //ES5
// var argument = [3, 4, 5, 1, 2, 7];
// function logArguments(){
//     for(let i = 0; i < argument.length; i++){
//         console.log(argument[i])
//     }
// }
// logArguments();





// //------------------------------------------------------------------

//CLASSES

//ES5 CLASSES

// function Person(name, age, gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;

//     // function incrementAge(){
//     //     return this.age++;
//     // }
// }

// Person.prototype.incrementAge = function(){
//     return this.age++;
// }


// let alfie = new Person("Alfie", "30", "male");
// console.log(alfie.age);
// alfie.incrementAge()
// console.log(alfie.age)
// let michael = new Person("Michael", "25", "male");

// console.log(alfie.name);
// console.log(michael.age);


//ES6 CLASSES

// class Person {
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;

//     }

//     incrementAge(){
//         this.age += 1;
//     }
// }

// let michael = new Person('Michael', 21, 'm')
// console.log(michael.age);
// michael.incrementAge();
// console.log(michael.age);