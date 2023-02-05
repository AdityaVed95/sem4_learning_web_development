'use strict'
let secretNumber = Math.trunc(Math.random() * 20 + 1) // state variable
let score = 20 // state variable : part of the applications state
let highScore = 0

function wrongGuess(decider) {

    if (score > 1) {

        // if guessed_number > secretNumber
        if (decider === true) {

            document.querySelector('.message').textContent = "Guess is High ! 📈"

        }

        // guessed_number < secretNumber
        else {
            document.querySelector('.message').textContent = "Guess is Low ! 📉"
        }

        score--
        document.querySelector('.score').textContent = score

    }
    else {
        document.querySelector('.message').textContent = "You lost the game 🤦🏻‍♂️ !, Bye bye"
        document.querySelector('.score').textContent = 0
        document.querySelector('body').style.backgroundColor = '#dc143c'
    }

}

let responseOnClickingCheck = function () {

    const guessed_number = Number(document.querySelector('.guess').value)

    // when there is not input 
    if (!guessed_number) {
        document.querySelector('.message').textContent = "No Number Inputted"
    }

    // when player wins 
    else if (guessed_number === secretNumber) {
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.message').textContent = "🎉 Correct Num 🎉"
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if (highScore < score) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }


    }
    else if (guessed_number > secretNumber) {
        wrongGuess(true)

    }
    else if (guessed_number < secretNumber) {

        wrongGuess(false)

    }


    // two ways to decrease the score : 
    // 1st way : read the score , decrease it by one , update its value
    // 2nd way : create a variable for the score in the code and then decrease
    //  the value of the variable by 1

    // if we use 1st way then our application doesnt know the value of score at all points of time
    // to ensure having value of score : it is good to have a variable in the application code 
    // and not just rely on the dom to hold our data 
}

let responseOnClickingAgain = function () {


    secretNumber = Math.trunc(Math.random() * 20 + 1)
    score = 20
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = 20
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''


}

document.querySelector('.check').addEventListener('click', responseOnClickingCheck)

document.querySelector('.again').addEventListener('click', responseOnClickingAgain)