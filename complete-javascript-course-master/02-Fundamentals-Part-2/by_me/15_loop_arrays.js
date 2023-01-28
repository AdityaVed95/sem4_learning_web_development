'use strict'
const adityaArray =[
    "Aditya",
    "Ved",
    2002,
    'Student',
    "Computer Engineering",
    ['n1','n2','n3']
];

const types = []
types[0] = "aditya"
types.push(95)
console.log(types);
types.pop()
types.pop()

for(let i=0;i<adityaArray.length;i++)
{
    console.log(adityaArray[i], typeof adityaArray[i]);
    types[i] = typeof adityaArray[i]
}

console.log(types);

