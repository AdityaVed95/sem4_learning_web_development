const markHeight = prompt("Enter mark's height ")
const markWeight = prompt("Enter mark weight")
const johnHeight = prompt("Enter john height")
const johnWeight = prompt("Enter john weight")

const bmiMark = markWeight / (markHeight**2)
const bmiJohn = johnWeight / (johnHeight**2)

console.log("Mark's BMI is : "+bmiMark)
console.log("John's BMI is : "+bmiJohn)

const markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)