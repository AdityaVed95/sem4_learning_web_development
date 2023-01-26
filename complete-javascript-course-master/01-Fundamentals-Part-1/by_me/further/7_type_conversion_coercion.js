// type conversion is when we manually convert
// from one type to another.
// One the other hand, type coercion
// is when JavaScript automatically converts types
// behind the scenes for us.

const birthYear = "1991"

console.log(birthYear + 18) // string output 

console.log(Number(birthYear)) // type conversion
console.log(Number(birthYear)+18) // Number output 
 
console.log(typeof birthYear) // Number function did not change 
// the data type of the input to the fxn
// it just returned the result in Number datatype

console.log(Number("Hey there"));//gives NaN(not a number) , meaning invalid number input
// NaN means an invalid number : its still a number somehow but invalid one

console.log(typeof(String(54))); // convert number to string 

// the plus operator triggers a ceorcion to string
console.log("I am "+20+" years old"); // number is converted to string by javascript

// the above step can be broken into two steps :
console.log("I am "+"20"+" years old");
console.log("I am 20 years old");

// the minus operator triggers the conversion of string to numbers
// eg : 
console.log("30"-"10"-3);
console.log("30"+"10"+3);
console.log("30"*"2");
console.log("30"/"2");

