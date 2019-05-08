

// // MADLIB
// function madLib(name, subject){
//     return(name + "'s favorite subject in school is " + subject + ".")
// }

// madLib("Alfie", "English")

// //TIP CALCULATOR 1

// function tipAmount(bill, service){
//     var tip = 0;
//     if (service == "good"){
//         tip = .2
//     }

//     else if (service == "fair"){
//         tip = .15
//     }

//     else if (service == "bad"){
//         tip = .1
//     }

//     else{
//         console.log("what?")
//     }

//     return(bill * tip)
// }

// tipAmount(100, "bad")


// // TIP CALCULATOR 2

// function totalAmount(bill, service){
//     var tip = 0;
//     if (service == "good"){
//         tip = .2
//     }

//     else if (service == "fair"){
//         tip = .15
//     }

//     else if (service == "bad"){
//         tip = .1
//     }

//     else{
//         console.log("what?")
//     }

//     return((bill * tip) + bill)
// }

// totalAmount(100, "good")



// // PRINT NUMBERS

// function printNumbers(start, end){
//     while (start < (end + 1)){
// console.log(start)
// start++
//     }
// }
// printNumbers(5, 10)

// function printNumbers(start, end){
//     for (i = start; i < (end + 1); i++){
//         console.log(i)
//     }
// }
// printNumbers(10, 15)


// // PRINT A SQUARE

// function printSquare(height){
//     for (i = 0; i <= (height - 1); i++){
//         console.log("x x x x x")
//         }
//     }       
// printSquare(5)


//PRINT A BOX
// function boxy(h, l){
//     console.log("*".repeat(l))
//     for (i = 0; i < (h-2); i++){
//     console.log("*" + " ".repeat(l-2) + "*")
//     }
//     console.log("*".repeat(l))


// }

// boxy(5, 5)


//PRINT A BANNER
// myString = "* Welcome to Digital Crafts *"
// myLength = myString.length

// console.log("*".repeat(myLength))
// console.log(myString)
// console.log("*".repeat(myLength))


//LEETSPEAK

// function leet(str){
// a_str = str.replace("a", "4")
// e_str = a_str.replace(/e/g, "3")
// g_str = e_str.replace(/g/g, "6")
// l_str = g_str.replace(/l/g, "1")
// o_str = l_str.replace(/o/g, "0")
// s_str = o_str.replace(/s/g, "5")
// t_str = s_str.replace(/t/g, "7")
// console.log(t_str)
// }

// leet("This is the most leet string that ever existed!")


//LONG VOWELS

// function longVowels(str){
//     o_str = str.replace(/oo/g, "ooooo");
//     e_str = o_str.replace(/ee/g, "eeeee");
//     console.log(e_str)
// }
// longVowels("Wookies like beer")


//POSITIVE NUMBERS
arr = [-3, -2, -1, 0, 1, 2, 3]
posArr = []

for(var i = arr[0], i < 3, i++){
    if (i - 1 >= 0){
        posArr.push(x);
    }
}

console.log(posArr);
