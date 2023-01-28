'use strict'
const adityaObject = {
    firstName : "Aditya",
    lastName : "Ved",
    birthYear : 2002, 
    role : 'Student',
    field : "Computer Engineering",
    friends : ['n1','n2','n3']
};
 
console.log(adityaObject.lastName); // dot notation
console.log(adityaObject['lastName']); // bracket notation

// 'lastName' in bracket notation can be computed from some other operation
// so its not necessary to explicitly write the string : 'lastName'
// inside the brackets
// basically we require an expression that produces a value which can be put inside []


// Eg :

const nameKey = 'Name'
console.log(adityaObject['first'+nameKey]);
console.log(adityaObject['last'+nameKey]);

const propertyName = "firstName"

console.log(adityaObject.propertyName);
console.log(adityaObject.randoms);
// if we use object.<key not defined in object>
// then undefined is returned  

console.log(adityaObject[propertyName]);
console.log(adityaObject[randoms]);


