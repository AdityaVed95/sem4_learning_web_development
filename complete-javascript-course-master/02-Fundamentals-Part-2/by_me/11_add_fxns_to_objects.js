'use strict'
const adityaObject = {
    firstName : "Aditya",
    lastName : "Ved", // string value
    birthYear : 2002, 
    role : 'Student',
    field : "Computer Engineering",
    friends : ['n1','n2','n3'],
    hasDriversLicense : true, // boolean value 

    calcAge : function(birthYear){ // function value 
        return 2023 - birthYear
    }
    // here the calcAge is a variable used to refer to a
    // function expression 
    // function attached to an object is called a method 
    // function declaration does not work since it does not make
    // the function refernceable from a varible name (although 
    // function names exists but that is not taken as a varible name)


};


// sample function expression 
const calcAge2 = function (birthYear)
{
    return 2023 - birthYear
}


console.log(adityaObject.calcAge(adityaObject.birthYear));
console.log(adityaObject['calcAge'](adityaObject.birthYear))
// this keyword is equal to the object on which the method is called 
// or is equal to the object calling the method 