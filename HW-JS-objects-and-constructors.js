//OBJECTS AND CONSTRUCTORS EXERCISES




//FIRST SECTION
//////////////////////////////////////////////////////////////////////////////////////////////////////
// function Person(name, email, phone) { 
//     this.name = name; 
//     this.email = email; 
//     this.phone = phone; 
// } 

// Person.prototype.greet = function(other) { 
//     console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
// };


// //1 and 2.
// var sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");
// var jordan = new Person("Jordan", "jordan@aol.com", "495-586-3456");



// //3 and 4.
// sonny.greet(jordan);
// jordan.greet(sonny);



// //5 and 6.
// console.log(`${sonny.name}'s email is ${sonny.email} and his phone number is ${sonny.phone}.`)
// console.log(`${jordan.name}'s email is ${jordan.email} and his phone number is ${jordan.phone}.`)






//SECOND SECTION - CARD CONSTRUCTOR
//////////////////////////////////////////////////////////////////////////////////////////////////////

function Card(point, suit){
    this.point = point;
    this.suit = suit;
}

var card1 = new Card(2, "diamonds")

console.log(card1.point)
console.log(card1.suit)

console.log(`This card is the ${card1.point} of ${card1.suit}.`)

