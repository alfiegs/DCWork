import { fstat } from "fs";

// console.log('HELLO WORLD')

// console.log(process.argv)

// sum = 0
// for(i = 2; i < process.argv.length; i++){
//     sum += Number(process.argv[i])
// }
// console.log(sum)


// var fs = require('fs')
// var buf = fs.readFileSync(process.argv[2])
// var text = buf.toString()
// var splitText = text.split('\n')
// console.log(splitText.length - 1) 

var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])
var text = buf.toString()
var splitText = text.split('\n')
console.log(splitText.length - 1) 







