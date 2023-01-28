'use strict'

// Function declaration : 
function calcAge1(birthYear) // birthYear : formal arguments or parameters
{
    return 2023 - birthYear
}

const age1 = calcAge1(2002) // actual arguments
console.log(age1);


// const age2 = calcAge2(2002) : this creates error


// Function Expression :
const calcAge2 = function(birthYear) // function without a name : anonymous function 
{
    return 2023 - birthYear 
}

// So all of this here: 

// function(birthYear)
// {
//     return 2023 - birthYear 
// }

// is basically an expression

// and remember that an expression produces a value.

// And so we use that value and store it into calcAge2

// and this will then be the function.

// in function expressions : 
// function is a value and we can store it in a variable : calcAge2



const age2 = calcAge2(2002)

console.log(age2);

// we can call a function declaration before they are 
// defined in the code but we cannot call a function expression 
// before they are defined in the code 

// internally this happens because of a process called as a hoisting


// prefer function expressions but its optional 
// define 1st and then call them 
// you should like to have everything in variables : both values and functions