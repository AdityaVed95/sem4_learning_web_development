const age = 10
const isOldEnough = age >= 18

if(isOldEnough)
{
    console.log("Aditya can start driving 🚗")
    // for emoji : 
    // on mac : command + control + space
    // on windows : windows key + .
}

if (age >= 18) 
{
    console.log("YO !!")    
}
else
{
    const yearsLeft = 18 - age
    console.log(`Too young kid , wait for another ${yearsLeft} years :)`)
}

const birthYear = 1991;
let century;
if(birthYear <= 2000)
{
     century = 20;
}

else
{
     century = 21;
}

console.log(`you belong to ${century} century`)
