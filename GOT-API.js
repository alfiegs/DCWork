

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






for(let i = 1; i < 20; i++){
    let url = "https://anapioficeandfire.com/api/characters/" + i;
    $.get(url).done((response) => {
        if(response.name === ""){
            printCharacter(response.aliases[0], i, response.allegiances[0])
        }
        else{
            printCharacter(response.name, i, response.allegiances[0])
        }



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