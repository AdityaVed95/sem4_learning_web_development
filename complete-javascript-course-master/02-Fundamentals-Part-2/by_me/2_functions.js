'use strict'

function logger()
{
    console.log("My name is Aditya !!! ");
}

logger();// invoking,calling,running the logger() function


// console.log("Yo aditya");

let x = 5;

logger(); // weird : the function is getting called only 
//once if we call them simultaneously one after the another 
// but if we put any console.log(); between the two function calls 
// to the same function then both of them are getting called 