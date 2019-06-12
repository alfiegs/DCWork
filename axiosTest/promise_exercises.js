//PROMISE ALL using Axios
//how to get information from 2 APIs and waiting until we get the response to execute code

//npm instll axios


var rp = require('request-promise');
const fse = require('fs-extra')


rp('https://en.wikipedia.org/wiki/Futures_and_promises')
    .then(function (htmlString) {
        console.log(htmlString)
    })
    .catch(function (err) {
        console.log('Crawling Failed');
    });

