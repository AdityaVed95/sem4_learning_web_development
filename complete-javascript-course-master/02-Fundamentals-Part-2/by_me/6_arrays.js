'use strict'
// arrays and objects are data structures in java script 
// arrays can be hetrogenous 
// literal syntax : 
const arrayOfFriends = ["friend1","friend2","friend3"];
console.log(arrayOfFriends);

const years = new Array(2000,2001,2002);
console.log(years);

console.log(arrayOfFriends[0]); 

console.log(arrayOfFriends.length);

console.log(`Last friend in the array is : ${arrayOfFriends[arrayOfFriends.length-1]}`);


// arrayOfFriends[*] , javascript expects an expression in * and not a statement 

arrayOfFriends[2] = "friend3.2"
console.log(arrayOfFriends);

// arrayOfFriends was const then how did we change it 
// only primitive values are immutable when const is used
// array is non primitive and is thus mutable even if const is used 

arrayOfFriends[3] = "friend4"
// above line and this line have the same effect : arrayOfFriends.push("friend4")
console.log(arrayOfFriends);

arrayOfFriends[3] = undefined
console.log(arrayOfFriends);

arrayOfFriends.pop();
console.log(arrayOfFriends);

// so we understand this :
// in a const array :
// we can add new values to array 
// we can modify existing values in the array 
// we can remove the existing values from the array 
// but we cant completely assign the variable to a new array using =
// for this we use .slice method

// arrayOfFriends = ["new1",'new2','new3'];
// the above line generates error : 
// Uncaught TypeError: invalid assignment to const 'arrayOfFriends'



// an array of numbers minus a number gives NaN
console.log(years-94);
console.log(years+95);
console.log(typeof (years+95));