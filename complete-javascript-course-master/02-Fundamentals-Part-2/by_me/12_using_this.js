'use strict'
const adityaObject = {
    firstName : "Aditya",
    lastName : "Ved", 
    birthYear : 2002, 
    role : 'Student',
    field : "Computer Engineering",
    friends : ['n1','n2','n3'],
    hasDriversLicense : true, 

    calcAge : function(){ 
        console.log(this); // this is the whole adityaObject
        return 2023 - this.birthYear;
        // we use this keyword to follow the DRY principle 
        // always advisable to use this keyword instead of hardcoding the name of the object 
    }
    
};

console.log(adityaObject.calcAge());
console.log(adityaObject['calcAge']());

// if we call the above function of the object repeatedly and 
// if the function is heavy on computation then it would be inefficient
//  to call the function again and again (wasting compute time)
// instead we should calculate the result of the computation 
// for the 1st time and then store the result in that object inside
// as a key value pair and then retrive that key value 
// pair whenever required
// its implementation is in 13.js

