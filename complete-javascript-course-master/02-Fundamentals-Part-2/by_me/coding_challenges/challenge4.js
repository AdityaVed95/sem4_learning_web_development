'use strict'

// function declarations :
function calcTip(bill) 
{
    if(bill>=50 && bill<=300)
    {
        return 0.15*bill;
    }
    else
    {
        return 0.2*bill;
    }
}

function calcAverage(arr) 
{
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum = sum+arr[i];
    }
    
    const avg = sum/(arr.length)
    return avg;    
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ]
const tips = []
const totals = []

for(let i=0;i<bills.length;i++)
{
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);
    console.log(`Total Value of bill ${i+1} is ${totals[i]}`);
}   

console.log(`Average bill value is : ${calcAverage(totals)}`);


