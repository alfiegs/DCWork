//OBJECT CONSTRUCTOR

// function Course(courseName, instructor, campus){
//     this.courseName = courseName;
//     this.instructor = instructor;
//     this.campus = campus;
// }

// var course1 = new Course("javascript bootcamp", "Jason", "Honolulu");
// var course2 = new Course("ruby", "Azam", "Sugarland");
// var course3 = new Course("cobol", "Chris", "Seattle");


// var myArray = [
//     new Course("javascript bootcamp", "Jason", "Honolulu"),
//     new Course("ruby", "Azam", "Sugarland"),
//     new Course("cobol", "Chris", "Seattle")
// ]



// console.log(myArray[0].instructor)



//////////////////////////////////////////////////////////////////////////////////////////////////
//FOR IN LOOP

// function Course(courseName, instructor, campus){
//     this.courseName = courseName;
//     this.instructor = instructor;
//     this.campus = campus;
// }
// var course1 = new Course("javascript bootcamp", "Jason", "Honolulu");
// var course2 = new Course("ruby", "Azam", "Sugarland");
// var course3 = new Course("cobol", "Chris", "Seattle");

// //Loop through keys or values in object
// for(k in course1){
//     console.log(k); //loop through keys
//     console.log(course1[k]); //loop through values    
// }







//////////////////////////////////////////////////////////////////////////////////////////////////
//PROTOTYPES

// var x = function(j){
//     this.i = 0;
//     this.j = j;
//     this.getJ = function(){
//         return this.j;
//     }
// }

// x.prototype.getJ = function(){
//     return this.j;
// }
// // var x1 = new x(2);
// // console.log(x1.getJ())
// // var x2 = new x(4);
// // console.log(x2.getJ())

// var x1 = x(2);
// console.log(x1.getJ)





//////////////////////////////////////////////////////////////////////////////////////////////////
//PROTOTYPE INHERITANCE

// var paul = {
//     fname: 'Paul',
//     lname: 'Bailey',
//     greet: function () {
//         console.log(`Hello ${this.fname} ${this.mName} ${this.lname}`);
//         }
//     };

// paul.__proto__ = {
//     mName: "Charles"
// }

//     var shannon = {fname: "Shannon"}
//     shannon.__proto__ = paul;

// shannon.greet()

// class Testing{
//     constructor(test){
//         this.test = test;
//     }

//     printTest(){
//         console.log()
//     }
// }

// class Person{
//     constructor(fname, lname, location){
//         this.fname = fname;
//         this.lname = lname;
//         this.location = location;
//     }

//     greeting(){
//         console.log(`my name is ${this.fname}`)
//     }
// }

// var Chase = new Person("Chase", "Brumfield", "Houston")

// Chase.greeting()









//////////////////////////////////////////////////////////////////////////////////////////////////
//CLOSURES

// function doSomeMath(){
//     var a = 4;
//     var b = 5;
//     var sum = a + b;
//     return sum;
// }

// var result = doSomeMath();
// console.log(result)



// function doSomeMath(){
//     var a = 4;
//     var b = 5;
//     function sum(){
//         return a + b;
//     }
//     return sum();
// }

// var result = doSomeMath();
// console.log(result)



//SET TIMEOUT
function doSomeMath(){
    var a = 4;
    var b = 5;
    var sum = function(){
        console.log(a + b)
        return a + b;
    }
    setTimeout(sum, 3000)

    console.log('Im done executing')

    return 'im done'
}

doSomeMath()