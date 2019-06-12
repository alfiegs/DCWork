//PROMISE ALL using Axios
//how to get information from 2 APIs and waiting until we get the response to execute code

//npm instll axios


let axios = require('axios');

let api_url1 = "https://jsonplaceholder.typicode.com/todos";
let api_url2 = "https://jsonplaceholder.typicode.com/albums";

let p1 = axios.get(api_url1);
let p2 = axios.get(api_url2);

Promise.all([p1, p2])
.then((responses) => {
    console.log(responses[0]);
    console.log(responses[1]);
    return 'successful'
})
.then((results) => {
    console.log(results);
})
.catch((errors) => {
    console.log(errors[0]); //errors from first promise
    console.log(errors[1]); //errors from second promise
})

