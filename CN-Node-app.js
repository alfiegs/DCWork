

// // var obj = require("./CN-Node-class")

// // console.log(obj.fname)



// // var area = require('./CN-Node-class')

// // let radius = 100;

// // let result = area(radius)

// // console.log(result)






// var person = require('./CN-Node-class')

// var alfie = new person("Alfie", "Santos")




// let mike = new person('Mike', 'Smith')









// //SERVER
// let http = require('http');

// let dt = new Date();

// let server = http.createServer((request, response)=>{

//     response.writeHead(200, {'Content-Type': 'text/html'})
//     response.write('Hello World ' + dt.toDateString())

//     response.end();
// })

// server.listen(5000)

// console.log("web server is now running on port 5000")





// //WRITE FILE

// let fs = require('fs')


// let myContent = "I'm having a great day"
// let fileName = "myFile.txt"
// fs.writeFile(fileName, myContent, (error)=>{
//     if(error){
//         console.log(error.message)
//     }

//     console.log(`file: ${fileName}`)
// })




//READ FILE
// let fs = require('fs')

// fs.readFile('dec.txt', (error, buffer)=>{
//     if(error){
//         console.log(error.message);
//         return; //break out of this function, don't go further
//     }
//     console.log(buffer.toString())
// })




// //UNLINK / DELETE - deleted file created above
// var fs = require('fs');
// fs.unlink('dec.txt', (err) => {
//     if (err) throw err;
//     console.log('successfully deleted dec.txt');
//   });



let superHero = require("superheroes");
// console.log(superHero.all)
console.log(superHero.random())
