

// MADLIB
function madLib(name, subject){
    return(name + "'s favorite subject in school is " + subject + ".")
}

madLib("Alfie", "English")

//TIP CALCULATOR 1

function tipAmount(bill, service){
    var tip = 0;
    if (service == "good"){
        tip = .2
    }

    else if (service == "fair"){
        tip = .15
    }

    else if (service == "bad"){
        tip = .1
    }

    else{
        console.log("what?")
    }

    return(bill * tip)
}

tipAmount(100, "bad")


// TIP CALCULATOR 2

function totalAmount(bill, service){
    var tip = 0;
    if (service == "good"){
        tip = .2
    }

    else if (service == "fair"){
        tip = .15
    }

    else if (service == "bad"){
        tip = .1
    }

    else{
        console.log("what?")
    }

    return((bill * tip) + bill)
}

totalAmount(100, "good")



// PRINT NUMBERS

function printNumbers(start, end){
    while (start < (end + 1)){
console.log(start)
start++
    }
}
printNumbers(5, 10)

function printNumbers(start, end){
    for (i = start; i < (end + 1); i++){
        console.log(i)
    }
}
printNumbers(10, 15)


// PRINT A SQUARE

function printSquare(height){
    for (i = 0; i <= (height - 1); i++){
        console.log("x x x x x")
        }
    }       
printSquare(5)


//PRINT A BANNER
myString = "* Welcome to Digital Crafts *"
myLength = myString.length
console.log("*" * myLength)
console.log(myString)
console.log("*" * myLength)