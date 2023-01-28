'use strict'
let rep = 1;

while(rep<=5)
{
    console.log(`this is ${rep}`);
    rep++;
}
// while loop does not always need a counter variable 
// keep rolling a dice till we get a 5
let dice1 = Math.random();
let dice2 =dice1*6;
let dice3 = Math.trunc(dice2);
// trunc method to removes decimal part of number and returns an integer
console.log(dice1);
console.log(dice2);
console.log(dice3);

console.log(`You rolled : ${dice3}`);

while(dice3 != 5)
{
    dice3 = Math.trunc((Math.random()*6))
    console.log(`You rolled : ${dice3}`);    
}

