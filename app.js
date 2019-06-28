//

let pbkdf2 = require('pbkdf2');
let crypto = require('crypto');

let password = "some password";


// //password + salt then apply crypto algorithm then store in database


// //a salt is a random string of characters
let salt = crypto.randomBytes(20).toString('hex');


let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256');

let hash = key.toString('hex');

// //this will be stored in our database
let stored_pass = `pbkdf2_sha256$3600$${salt}$${hash}`

//1. validating user password

//checking a password

let pass_parts = stored_pass.split('$') //split on dollar sign delimiter, an array of items split up where there is a $
//['pbkdf2_sha256', 'salt', 'hash']


let newPassword = "some password";
let keyNewLogin = pbkdf2.pbkdf2Sync(
    'some password',
    pass_parts[2],
    parseInt(pass_parts[1]),
    256, 'sha256'
);

let hashNewLogin = keyNewLogin.toString('hex')

if(hashNewLogin == pass_parts[3]){
    console.log('passwords match');
}
else{
    console.log('you suck, try again');
}