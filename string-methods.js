function getRandomInt1(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

/*
    Possible inclusive of min and less than max
*/
function getRandomInt2(min, max) {
    return (
        Math.floor(Math.random() * (max - min) + min)
    )
}

/*
    Ranges inclusive of min and max value
*/
function getRandomInt3 (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let rand3 = getRandomInt3(0, 10)

/*
    Guessing game 
*/

let guessMe = function(guessNumber) {
    let min = 1
    let max = 5
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`Your guessed number is ${randNum} : ${guessNumber === randNum}`)
    return (guessNumber === randNum)
}
let guessedNumber = guessMe(2)