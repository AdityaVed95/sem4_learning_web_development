const currentYear = 2022
const birthYear = 2002
const myName = "Aditya"
const role = "Student" 

const profile = "I'm "+myName+" and I'm a "+role+" and my age is "+(currentYear-birthYear)

// java script will convert the number to a string in order to concatenate it
console.log(profile)

// we use template literals while concatinating strings to clearly present
// final string which would take 
//care of the spacing between pieces of string related issue
// template literals are implemented using backticks above the tab key ``

const profileNew = `I'm ${myName} and I'm a ${role} and my age is ${currentYear-birthYear}`
console.log(profileNew)
console.log(`Just a string`)

const string1 = `String with \n\multiple \n\lines in it`
console.log(string1)

// \n\ is compulsory for new line if we use ' or " but not if we use `
// while using template literals : we dont need to use \n\ for multiline strings
// simply write on new line to mean that it is a new line 

const string2 = `Efficient String with
multiple lines
in it 
!!!`

console.log(string2)
