"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons

var inputString = ""


var seven = document.getElementById('7')
var eight = document.getElementById('8')
var nine = document.getElementById('9')
var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')
var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')

seven.addEventListener('click', function(e){
    input.textContent += "7"
    inputString += "7";
    })
eight.addEventListener('click', function(e){
    input.textContent += "8";
    inputString += "8";
    })
nine.addEventListener('click', function(e){
    input.textContent += "9";
    inputString += "9";
    })
four.addEventListener('click', function(e){
    input.textContent += "4";
    inputString += "4";
    })
five.addEventListener('click', function(e){
    input.textContent += "5";
    inputString += "5";
    })
six.addEventListener('click', function(e){
    input.textContent += "6";
    inputString += "6";
    })
one.addEventListener('click', function(e){
    input.textContent += "1";
    inputString += "1";
    })
two.addEventListener('click', function(e){
    input.textContent += "2";
    inputString += "2";
    })
three.addEventListener('click', function(e){
    input.textContent += "3";
    inputString += "3";
    console.log(inputString)
    })




// adding click handlers to the operation buttons

var plus = document.getElementById('+')
var minus = document.getElementById('-')
var times = document.getElementById('&times;')
var divide = document.getElementById('&divide;')


plus.addEventListener('click', function(e){
    inputString + newInputString; 
    })



console.log(inputString)

// on click of 'equal' button

// clearing the input on press of clear


