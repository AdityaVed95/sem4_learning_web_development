console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(0))
console.log(Boolean(NaN))

console.log(Boolean({}))
console.log(Boolean("false"))
console.log(Boolean(-342.432))

// using falsy truthy in if-else context  :

const money = 0;
if(money) // eg of implicit type coercion to boolean
// if the value in the if(condition) is not boolean then 
// JS will try to convert the condition into boolean

{
    console.log("Don't spend it all");
}
else
{
    console.log("Go get a job");
}


// using falsy truthy in logical context :

let height; // height is an undefined variable since it has
// not been assigned any value 

if(height) // undefined is falsy value
{
    console.log("Yay your height is defined");
}
else if(height === 0)
{
    console.log("Your height is zero");
}

else
{
    console.log("Your height is undefined");
}
