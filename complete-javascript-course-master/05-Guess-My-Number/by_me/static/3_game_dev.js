'use strict'
let responseOnClickingCheck = function () {

    const guessed_number = Number(document.querySelector('.guess').value)
    console.log(guessed_number, typeof guessed_number);

    // if there is no input then the guessed_number is
    // by default 0 , and 0 is considered as false 

    if (!guessed_number) {
        document.querySelector('.message').textContent = "No Number Inputted"
    }

    if (guessed_number) {
        document.querySelector('.message').textContent = "Valid Number 👍"
    }




    // converting string to number using Number function
    // message will turn to correct num when any no is inputed

}

document.querySelector('.check').addEventListener('click', responseOnClickingCheck)