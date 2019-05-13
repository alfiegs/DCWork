
//√√√√√
// //POSITIVE NUMBERS - filter function to move negative numbers from old array to new array

// var numberArray = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

// var posNumArr = numberArray.filter(function(element){
//     return element < 0;
// })

// console.log(posNumArr)





//√√√√√√
//// EVEN NUMBERS 

// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var evenNums = nums.filter(function(element){
//     return (element % 2 == 0);
// })
// console.log(evenNums)





//√√√√√√
//SQUARE THE NUMBERS - forEach function (question: why is squareNums printing to console even though I didn't call it?)

//------forEach method
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// sqrs = []
// squareNums = nums.forEach(function(element){
//     sqrs.push(element * element);
// })
// console.log(sqrs)

//-----map method
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// variable = nums.map(function(element){
//     return (element*element)
    
// })
// console.log(variable)

//??????
// //CITIES 1
// var cities = [ 
//     { name: 'Los Angeles', temperature: 60.0}, 
//     { name: 'Atlanta', temperature: 52.0 }, 
//     { name: 'Detroit', temperature: 48.0 }, 
//     { name: 'New York', temperature: 80.0 } ];



// cities.filter(function(element){
//     console.log(element['temperature'])
// })








//??????
//CITIES 2

// var cities = [ 
//     { name: 'Los Angeles', temperature: 60.0}, 
//     { name: 'Atlanta', temperature: 52.0 }, 
//     { name: 'Detroit', temperature: 48.0 }, 
//     { name: 'New York', temperature: 80.0 } ];
// citiesArray = []

//     cities.filter(function(element){
//     citiesArray.push(element['name'])
// })
// console.log(citiesArray)

//USE A MAP HERE ^^^



//√√√√√√
// //GOOD JOB

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var goodJobPeeps = people.forEach(function(element){
//     console.log('Good job ' + element + '!')
// })



//√√√√√
// SORT AN ARRAY
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// function sortPeople(peeps){
//     console.log(peeps.sort())
// }
//  sortPeople(people)






//√√√√√√
// //SORT AN ARRAY 2

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// people.sort(function(a, b) {
//   return a.length - b.length;
// });
// console.log(people);








//√√√√√√
//SORT AN ARRAY 3
//3 Steps with 3 being the complete answer

// 1. sum the contents of an array
// var sum = 0
// for (var i = 0; i < myArr.length; i++) {
//     sum += myArr[i]
// }
// console.log(sum)


// // 2. function to sum the contents of an array
// function sumArray(array){
//     var sum = 0;
//     for (var i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     console.log(sum)
// }
// sumArray([1, 2, 3])


// 3. function to apply (function to sum the contents of an array) forEach of the arrays in an array
// FINAL ANSWER

// var sumArray = function(array){
//     var sum = 0;
//     for (var i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     console.log(sum)
// }

// var arrayOfArrays = [[1,2,3],[4,5,6],[5,5,5]]
// arrayOfArrays.forEach(function(element){
//     sumArray(element);
// })


//USE REDUCE METHOD HERE ^^^




//√√√√√√
// 3 TIMES

// function fun(){
//     console.log('Hello World')
// }

// function call3Times(fun) { fun(); fun(); fun(); }

// call3Times(fun)


// ??????
// CALL N TIMES






///SUM AN ARRAY
// let arr = [1,2,3,4];









//ACRONYM
