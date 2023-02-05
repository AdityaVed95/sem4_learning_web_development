// on clicking check! : the number inside the box will 
// be printed on the console 
'use strict'


let response = function () {

    console.log(document.querySelector('.guess').value)
    document.querySelector('.message').textContent = "🎉 Correct Num 🎉"
    // message will turn to correct num when any no is inputed


}

document.querySelector('.check').addEventListener('click', response)

// check is the name of the class 
// click is the name of the event that is going to occur : you cant give your own 
// name , the name is one from the predefined set of valid inputs 
// response is the name of the function expression , we do not call the function in line 12 
// java script engine will call the function when the event happens
// the function is going to be executed when the button gets clicked

// the funciton will not be called immediately once the script is executed, it will 
// only be called as soon as the event happens