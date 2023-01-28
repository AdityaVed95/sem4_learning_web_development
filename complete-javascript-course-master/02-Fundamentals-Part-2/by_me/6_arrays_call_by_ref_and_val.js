const arrayOfFriends1 = ["friend1"];

const arrayOfFriends2 = arrayOfFriends1; // call by ref : shallow copy
arrayOfFriends2.push("friend2");

console.log("Call by reference : original array changed ")
console.log(`Array1 : ${arrayOfFriends1}`);
console.log(`Array2 : ${arrayOfFriends2}`);

// const arrayOfFriends3 = ["Yo"];
// arrayOfFriends3 = arrayOfFriends1.slice(); 
// the above two lines generate error because once the array is made ,
// we cannot assign the array to a completly new array

const arrayOfFriends3 = arrayOfFriends1.slice(); // call by value : deep copy
arrayOfFriends3.push("friend3")

console.log("Call by value : original array unchanged ")
console.log(`Array1 : ${arrayOfFriends1}`);
console.log(`Array2 : ${arrayOfFriends2}`);
console.log(`Array3 : ${arrayOfFriends3}`);


