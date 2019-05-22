


//WORKING CODE
// let url = "https://anapioficeandfire.com/api/characters?page=1&pageSize=500"

// $.get(url).done((response) => {
//     console.log(response)


//     for(let i = 0; i < response.length + 1; i++){
//         if (response[i].aliases[0] === ""){
//             printCharacter(response[i].name, i + 1, response[i].allegiances[0])
//         }
//         else{
//         printCharacter(response[i].aliases[0], i + 1, response[i].allegiances[0])
//         }

//     }
// })

// function printCharacter(character, number, house){
//     $("#names").append(`<p>${number}: ${character}</p>`)
//     $("#houses").append(`<p>${house}</p>`)
// }



//CREATING THE DICTIONARY
var housesDict = {}  //Dictionary of all the Houses in the following form: {URL-number: House Name}
//each House has a unique URL with a number on the end. I sliced off the number from the end and made it the key in a dictionary, with a corresponding value of House Name
// https://anapioficeandfire.com/api/houses/1 = House Algood. I sliced off the 1 on the end
for(let i = 1; i < 445; i++){ //445 max houses
    let url2 = "https://anapioficeandfire.com/api/houses/" + i; //loop through API Houses list
    $.get(url2).done((response) => {
        let number = response.url.slice(41, response.url.length); //slicing off number from end of URL and adding it to variable (each URL had 41 characters before the number, so I started the slice there and ended it at the length of the URL)
            housesDict[number] = response.name; //creating the Houses Dictionary object
    })
}

//With the URL number in a dictionary paired with the House Name, I can retrieve the House Name value from the dictionary by URL Number key


//RETRIEVING THE CHARACTERS FROM THE API
for(let i = 1; i < 50; i++){ //1005 max charaters?
    let url = "https://anapioficeandfire.com/api/characters/" + i;
    $.get(url).done((response) => {

        let houseNumber = response.allegiances[0].slice(41, response.url.length); //slice of the House URL number at the end like above so that I can retrieve a House Name from the dictionary above via URL Number key

        printCharacter(response.name, i, housesDict[houseNumber])

        // if(response.name){ //if there is no Name, print Alias
        //     printCharacter(response.name, i, housesDict[houseNumber])

        // }
        // else{ //or else print Name
        //     printCharacter(response.aliases[0], i, housesDict[houseNumber]) //passes three arguments to the function printCharacter below

        // }

console.log(response)
    })
    function printCharacter(character, number, house){
        $("#names").append(`<p>${number}: ${character}</p>`)
        $("#houses").append(`<p>${house}</p>`)
    }
    }





// function printCharacter(character, number, house){
//     $("#names").append(`<p>${number}: ${character}</p>`)
//     $("#houses").append(`<p>${house}</p>`)
// }

// }





// let url = "https://anapioficeandfire.com/api/characters/2";
// $.get(url).done((response) => {
// console.log(response.name)
// })