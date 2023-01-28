'use strict'

const markObject = {
    fullName : "Mark Miller",
    weight : 78,
    height : 1.69,
    calcBMI : function(){
        this.bmiValue = this.weight/(this.height ** 2);
        return this.bmiValue;
    }
}

const johnObject = {
    fullName : "John Smith",
    weight : 92,
    height : 1.95,
    calcBMI : function(){
        this.bmiValue = this.weight/(this.height ** 2);
        return this.bmiValue;
    }
}

// suppose if we have 1000 ppl and thus we would need 
// to create 1000 objects 
// now if we have to change the calcBMI function then 
// changing it at 1000 places would be inefficient , there
// should ideally be only one place in which we shall store and
// update the calcBMI function and all the other objects should
// also refer to the same function if required

// check out a way to solve the above problem

// console.log(markObject.calcBMI());
// console.log(johnObject.calcBMI());

if(markObject['calcBMI']() > johnObject['calcBMI']())
{
    console.log(`${markObject.fullName}'s BMI (${markObject.bmiValue}) is higher than ${johnObject.fullName}'s (${johnObject.bmiValue})`);

}

else if (markObject['calcBMI']() < johnObject['calcBMI']())
{
    console.log(`${johnObject.fullName}'s BMI (${johnObject.bmiValue}) is higher than ${markObject.fullName}'s (${markObject.bmiValue})`);
}

else
{
    console.log(`Both ${johnObject.fullName}'s and ${markObject.fullName}'s BMI value is the same (${johnObject.bmiValue})`);
}