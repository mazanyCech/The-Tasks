//Discription...
// Have you ever played the lottery? A lottery is a game in which the winner is randomly
// to determine the winner and give him or her the winnings. Your task now will be to develop
// the logic for such a game.

let applicants = {
    "001":{
        name: "Vasya",
        age: 20,
    },
    "013": {
        name: "Tom",
        age: 15,
    },
    "102": {
        name: "Ivan",
        age: 35,
    }
}

let winnerObject = {
    prize: "15000$",
}

//add count 
//compare count and randomNumber
//the count will be increase in the range of the number of object properties
//also merged the objects into one
function getWinner(applicants, winnerObject, getRandomNumberInRange){
    let count = 0;
    let randomNumber = getRandomNumberInRange(0, 3);
    for(let keys in applicants){     
        if(randomNumber === count){
            let resultWinner = Object.assign({}, applicants[keys], winnerObject);
            console.log(resultWinner);
        }
        count++;     
    }
}

//Function get random number for function startGame
function getRandomNumberInRange(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

getWinner(applicants, winnerObject, getRandomNumberInRange);