'use strict'

function fruitProcessor(noOfApples, noOfOranges)
{
    console.log(noOfApples,noOfOranges);
    const juice = `Juice with ${noOfApples} apples and ${noOfOranges} oranges`;
    return juice;
}

function logNOw()
{
    console.log("Logging");
}


const returnedJuice = fruitProcessor(5,2);
console.log(returnedJuice);

console.log(fruitProcessor(5,2));    

const output = logNOw();
console.log(output);
console.log(typeof output);
// that console dot log here is actually also just a function
// but a built in function