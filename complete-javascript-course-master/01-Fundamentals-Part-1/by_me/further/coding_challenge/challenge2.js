const markHeight = prompt("Enter mark's height ")
const markWeight = prompt("Enter mark weight")
const johnHeight = prompt("Enter john height")
const johnWeight = prompt("Enter john weight")

const bmiMark = markWeight / (markHeight**2)
const bmiJohn = johnWeight / (johnHeight**2)

console.log("Mark's BMI is : "+bmiMark)
console.log("John's BMI is : "+bmiJohn)

if(bmiJohn>bmiMark)
{
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`)
}
else
{
    console.log(`Mark's BMI(${bmiMark}) is higher than John's!(${bmiJohn})!`)
}
