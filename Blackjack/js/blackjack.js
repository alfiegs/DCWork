
// suits.forEAch(function(element){
//     var imgCode = "";
//     switch(element){
//         case "hearts":
//         imgCode = "H";
//         break;
//     switch(element){
//         case "diamonds":
//         imgCode = "D";
//         break;
//     switch(element){
//         case "clubs":
//         imgCode = "C";
//         break;
//     switch(element){
//         case "spades":
//         imgCode = "S";
//         break;
//     }
//     for (var i = 2; i < 13; i++);
//         var imgURLPath = ""
//         card= {
//             suit: element;
//             value: i;
//             imgURL: imgURLPath;
//         }
// })


// console.log(deck)


// deck = []


// for (i = 2; i < 11; i++){
//     deck.push({value: i, suit: "s", imgURL: "JPEG/" + i.toString() + "S.jpg"});
//     deck.push({value: i, suit: "h", imgURL: "JPEG/" + i.toString() + "H.jpg"});
//     deck.push({value: i, suit: "d", imgURL: "JPEG/" + i.toString() + "D.jpg"});
//     deck.push({value: i , suit: "c", imgURL: "JPEG/" + i.toString() + "C.jpg"});
// }

// var faceCards = ["K", "Q", "J"]
// faceCards.forEach(function(element){
//     deck.push({value: 10, suit: "h", imgURL: "JPEG/" + element + "H.jpg"});
//     deck.push({value: 10, suit: "d", imgURL: "JPEG/" + element + "D.jpg"});
//     deck.push({value: 10, suit: "c", imgURL: "JPEG/" + element + "C.jpg"});
//     deck.push({value: 10, suit: "s", imgURL: "JPEG/" + element + "S.jpg"});
// })

// var aces = ["H", "D", "C", "S"];
// aces.forEach(function(element){
//     deck.push({value: 11, suit: element, imgURL: "JPEG/A" + element + ".jpg"})
// })

// console.log(deck)
// console.log(deck.length)


function standFunction(){
    var standRandomNum = Math.floor((Math.random() * deck.length) + 0); //generates random number (from 0 through length of deck)
    var dealerStandCard = document.createElement('img'); //creates card image to display on DOM
    dealerStandCard.src = deck[standRandomNum]['imgURL']; //retrieves image URL from card in deck based on random number index
    dealerHand.appendChild(dealerStandCard); // appends card to DOM
    dealerPoints = dealerPoints + parseInt(deck[standRandomNum]['value']); //adds value of card to dealerPoints
    deck.splice(standRandomNum, 1); //removes index(card) from deck based on random number above
    if (dealerPoints > 21){
        messageCenter.textContent = "YOU WIN!";
        turnOver = "yes";
    }
    else if (dealerPoints > playerPoints){
        messageCenter.textContent = "MAN YOU SUCK AT THIS GAME!";
        turnOver = "yes";
    }

    else if (dealerPoints == playerPoints){
    messageCenter.textContent = "TIE GAME!";
    turnOver = "yes";
    }

    else if(dealerPoints < playerPoints){
        messageCenter.textContent = "YOU WIN!";
        turnOver = "yes";
    }
}











backCardImage = "backcard.jpg"
firstDealerCard = ""


//DEAL FIRST CARD TO DEALER

var firstDealerCard = deck[0]['imgURL'];

dealerHand.appendChild(backCardImage)


//STAND

backCardImage.src = firstDealerCard














// var c2 = {
//     suit: "clubs",
//     value: "2",
//     imgURL: "JPEG/2C.jpg"
// }
// var d2 = {
//     suit: "diamonds",
//     value: "2",
//     imgURL: "JPEG/2D.jpg"
// }
// var h2 = {
//     suit: "hearts",
//     value: "2",
//     imgURL: "JPEG/2H.jpg"
// }
// var s2 = {
//     suit: "spades",
//     value: "2",
//     imgURL: "JPEG/2S.jpg"
// }
// var c3 = {
//     suit: "clubs",
//     value: "3",
//     imgURL: "JPEG/3C.jpg"
// }
// var d3 = {
//     suit: "diamonds",
//     value: "3",
//     imgURL: "JPEG/3D.jpg"
// }
// var h3 = {
//     suit: "hearts",
//     value: "3",
//     imgURL: "JPEG/3H.jpg"
// }
// var s3 = {
//     suit: "spades",
//     value: "3",
//     imgURL: "JPEG/3S.jpg"
// }


// var deck = [c2, d2, h2, s2, c3, d3, h3, s3]
















//NOTES
// for (i = 0; i < deck.length; i++){
//     console.log(deck[i]['imgURL'])
// }



//pick random item from array
// var randomCard = deck[Math.floor(Math.random() * deck.length)];
// console.log(randomCard['imgURL'])



//retrieve an object value from and object within an array - arrayName[arrayIndex]['objectKey']
// console.log(deck[1]['suit'])



//generate random number from 1-52 and store in variable called 'randomCard'
// var randomCard = Math.floor((Math.random() * 8) + 1);
// console.log(randomCard)
// console.log(deck[randomCard]['imgURL'])