// 3 ways of declaring variables in js
// let , const, var 
// let , const : introduced in es 6 : modern : more preferred 
// var : old way 

// use let keyword to declare a variable that can change later during the
// exection of the program 

let age = 30
age = 31 // mutate the age variable 

// empty varaibles are declared using let , since we want to mutate them eventually
//   empty varaibles are used to declare variables at the top of the file and then use them later in the code below 
// const keyword to not change the value of a variable

const birthYear = 2002;
// birthYear = 2001; // this line will generate an error 
// Uncaught TypeError: invalid assignment to const 'birthYear'

// thus we cannot declare empty(or undefined) const variables 

// const birthDate;  this statement is illegal

// recommended to use const : its good to have as less variations as possible
// let is block scoped and var is function scoped 

// var is not used now, found in older codes

var job = "programmer"
job = "teacher"

// we can even avoid using any of the above 3 
lastName = "Ved"
console.log(lastName)
// this should be avoided since this doesnt create the variable in the scope, 
// instead javascript will create a property on the global object




