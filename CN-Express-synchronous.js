


// //type in nfn and then tab
// const greeting = (fname, lname) => {
//     console.log(`${fname} ${lname}`);
// }

// //anfn shortcut for 
// //Set time out for 2 seconds will print after the functions below
// setTimeout(()=>{
//     console.log('inside time out');
// }, 2000)


// console.log('before the function call')
// greeting('Alfie', 'Santos')
// console.log('after the function call');

// let a = 4;

// if (a < 4){
//     console.log();
// }


// //callback function - function passed to another function as an argument




//nfn shortcut for named function
// const add = (a, b, callback) => {
//     let result = a + b;
//     callback(result)
// }

// add(4, 5, function(passedInResult){
//     console.log(passedInResult);
// })



const add = (pathURL, callback) => {
    let request = {
        url: pathURL,
        objType: 'request',
    };
    let response = {
        objType: 'response'
    };
    callback(request, response)
}

add('/something', (req, res)=>{
    console.log(req.url)
    console.log(req.objType)
    console.log(res.objType);

})