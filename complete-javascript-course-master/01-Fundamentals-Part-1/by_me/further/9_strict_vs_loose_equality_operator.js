// one with the three equals
// is called the strict equality operator.
// It's strict,
// because it does not perform type coercion.
// And so it only returns
// true when both values are exactly the same.
// On the other hand,
// there's also the loose equality operator,
// which is only two equals,
// and the loose equality operator
// actually does type coercion.

console.log(18===18);
console.log(18==='18');
console.log(18=='18');
console.log(18 == 'true number');

const favourite = Number( prompt("Enter your favourite number ") );
console.log(favourite);
console.log(typeof favourite);


// === is more adviced

if(favourite === 23)
{
    console.log("Yo 23 is cool");
}

// !== : strict version , != : loose version 
