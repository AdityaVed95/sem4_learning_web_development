const bill = Number(prompt("Enter Bill Value"));

// let tip;
// if(bill>=50 && bill<=300)
// {
//     tip = 0.15*bill;
// }
// else
// {
//     tip = 0.2*bill;
// }

const tip = bill>=50 && bill<=300 ? 0.15*bill : 0.2*bill;

console.log(`The bill is ${bill}, the tip is ${tip}, and the total value is ${bill+tip}💰`);