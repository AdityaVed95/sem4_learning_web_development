'use strict'
const adityaObject = {
    firstName : "Aditya",
    lastName : "Ved", 
    birthYear : 2002, 
    role : 'Student',
    field : "Computer Engineering",
    friends : ['n1','n2','n3'],
    hasDriversLicense : true, 
    gender : "male",

    calcAge : function(){ 
        this.age =  2023 - this.birthYear;
        return this.age;
    },

    getSummary : function(){
        return `${this.firstName} is a ${this.age}-year old ${this.role}, and ${this.gender == "male" ? 'he' : 'she'} has ${this.hasDriversLicense ? 'a' :'no'} driver's license `;
    }
    
};

console.log(adityaObject.age); // this line would return undefined as age property has still not been made 
console.log(adityaObject.calcAge());
console.log(adityaObject.age);
console.log(adityaObject.getSummary());

// arrays are also objects , we can use their methods to manipulate them
// here we created our own objects and our own methods to manipulate them and access them 
 