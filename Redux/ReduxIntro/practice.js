

// let myArray = [1,5,4,3,9];
// console.log(myArray);


// let myNewArray = myArray;
// console.log(myNewArray);

// myNewArray.push(44);

// console.log(myNewArray);
// console.log(myArray);

//pass by reference - pointing to same location in memory





// //Use spread operator to avoid above situation
// //spread operator allows you to make a copy of myArray, point to a new memory location rather than same memory location
// let myArray = [1,5,4,3,9];
// console.log(myArray);


// let myNewArray = [...myArray]; //spread operator
// console.log(myNewArray);

// myNewArray.push(44);

// console.log(myNewArray);
// console.log(myArray);





//another way to make a brand new memory copy of an array
let myArray = [1,5,4,3,9];

let myNewArray = [...myArray, 44]

console.log(myNewArray);
console.log(myArray);



//CONCAT
let oldState = [...myArray, 44]
let newState = oldState.concat(45)

console.log(newState)
console.log(myArray)