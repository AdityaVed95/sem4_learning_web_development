let myName= "Aditya"
console.log(myName === "Aditya")

let boolVal = true
console.log(boolVal)
console.log(typeof(myName))
console.log(typeof myName)

console.log(typeof 23)
console.log(typeof boolVal)

myName = 95
// use let only when you define the variable for the 1st time
// assigning new value to the variable : no need to use let 

let children; // this variable is undefined
console.log(children)
console.log(typeof children) // undefined is both 
// the value and the type of the value 

children = 5;
console.log(children)
console.log(typeof children)

console.log(null)
console.log(typeof null) // bug in javaScript which is not corrected for legacy reasons 
