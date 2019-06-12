


// console.log('this is before')

// setTimeout(() => {
//     console.log('inside of set time out');
// }, 2000);

// console.log('after set time out');





//CREATING A PROMISE
//resolve - pass code to next block
//reject - pass info to catch 
let myPromise = new Promise((resolve, reject)=>{
    //logic to execute
    setTimeout((params) => {
        let i = 45;
        if (i == 45){
            resolve(i)
        }
        else if (i < 45){
            reject('there was an error')
        }
    }, 1000);
});

//Executing a promise
myPromise.then((response)=>{
    console.log(response);
    return 'hello'
}).then((response2)=>{
    console.log(response2);
})
.catch((error) => {
    console.log(error);
});


//wait for multiple promises before executing then blocks
//Promise.all([promise1, promise2]).then


