let age = 18;

age>=18 ? console.log("I like to drive 🚘") : console.log("I like to play all day 🏀");
// the above line is an expression : thus it returns a value 
// thus it can be used directly in console.log();
age = 15;

const activity = age>=18 ? "drive🚘" : "play🏀"; // ternary operator returns accordingly 
console.log(`I like to ${activity}`);

console.log(`I like to ${age>=18 ? "drive🚘" : "play🏀"}`);