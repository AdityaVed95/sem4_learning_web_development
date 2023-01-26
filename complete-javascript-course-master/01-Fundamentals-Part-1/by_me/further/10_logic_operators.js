const hasGoodVision = true;
const hasDriversLicense = true;
const isTired = true;

console.log(hasGoodVision && hasDriversLicense);
console.log(!hasDriversLicense);
console.log(hasGoodVision || hasDriversLicense);

if(hasGoodVision && hasDriversLicense && !isTired)
{
    console.log("You should drive");
}
else
{
    console.log("you should not drive");
}

