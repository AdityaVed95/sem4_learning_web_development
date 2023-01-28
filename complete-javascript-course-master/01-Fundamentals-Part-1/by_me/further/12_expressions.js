// an expression is a piece of code
// that produces a value.

3+4 
1991
true
false && !true
// above lines are expression 

// statement is like a bigger piece of code

// that is executed

// and which does not produce a value on itself.
// And we can compare this with normal spoken language.

// And so in this example,

// a declaration is like a complete sentence

// and expressions are like the words

// that make up the sentences.


if(23>10)
{
    console.log("23 is big");
}
// above 4 lines are statement


// expressions produce values,

// and that statements are like full sentences

// that translate our actions.
// So the actions that we want the program to perform, okay?
// so basically, whenever something ends with a semicolon,

// that's then a statement.

// JavaScript expects

// statements and expressions in different places.

// For example, in a template literal,

// we can only insert expressions, but not statements.

const age = 20;
console.log(`My age is ${age} and ${if(23>10)
    {
        console.log("23 is big");
    }}`);
// the if block is a statement and thus statements are not allowed in the console.log();
    