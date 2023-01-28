'use strict'

// arrow fxn is the 3rd type of fxn came in ES6 (2015)
// is shorter and therefore faster to write.

// function expression 
const calcAge2 = function (birthYear)
{
    return 2023 - birthYear;
}

// arrow function 
const calcAge3 = birthYear => 2023-birthYear; // exactly one parameter and only one return statement (one line of code)
const age3 = calcAge3(2002)


const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const yearsLeftTillRetirement = 65 - age; // assuming 65 is retirement age.
    return yearsLeftTillRetirement;
}
// arrow fxn with 1 argument and multiple lines
// can omit the return keyword and {} only if 1 sentence in fxn
// otherwise compulsory to write them down


const yearsUntilRetirementDescription = (birthYear,firstName) => {
    const age = 2023 - birthYear;
    const yearsLeftTillRetirement = 65 - age; // assuming 65 is retirement age.
    
    if(yearsLeftTillRetirement>0)
    {
        return [`${firstName} has ${yearsLeftTillRetirement} years until retirement` , 95]
        // returning array of values
    }

    else
    {
        return -1; // return will immediately exit the function 
    }
     
}
// multiple parameters and multiple reutrn values


// arrow fxn used when less parameters and less code in fxn 

// ***************arrow function do not get the 'this' keyword

console.log(calcAge2(2002));    
console.log(calcAge3(2002));
console.log(yearsUntilRetirement(2002));
const arrayOfReturnedValues = yearsUntilRetirementDescription(2002,"Aditya")
console.log(arrayOfReturnedValues[0]);
console.log(arrayOfReturnedValues[1]);
