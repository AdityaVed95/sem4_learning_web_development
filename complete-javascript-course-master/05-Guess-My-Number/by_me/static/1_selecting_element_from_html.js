'use strict'

console.log(document.querySelector('.message')) // querySelector() 
// is a method
// available on the document object
// we want to select an element with the class name of :
//  message if we had to select an id instead of a class
// then we would have 
// used #message instead of .message .textContent will 
// print the actual text on that line i.e. : Start guessing...  

console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = "🎉 Correct Num 🎉"


console.log(document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 23
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 50
console.log(document.querySelector('.guess').value)


