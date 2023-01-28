'use strict'
const adityaObject = {
    firstName : "Aditya",
    lastName : "Ved",
    birthYear : 2002, 
    role : 'Student',
    field : "Computer Engineering",
    friends : ['n1','n2','n3']
};
const propertyName = prompt("Intrested in ?")

if(adityaObject[propertyName])
{
    console.log(adityaObject[propertyName]);
}

else
{
    console.log("Wrong request !!!");
}

// adding key value pairs to the object :
adityaObject.location = "India"
adityaObject["gmail"] = "adityaved95@gmail.com"
console.log(adityaObject);

console.log(`${adityaObject.firstName} has ${adityaObject.friends.length} friends and his best friend is called ${adityaObject.friends[2]}`); 
// dot is an operator 
// dot : member access
// [] : computer member access 