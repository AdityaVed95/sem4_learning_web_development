// const ds1 = Number(prompt("Enter Dolphin score 1"));
// const ds2 = Number(prompt("Enter Dolphin score 2"));
// const ds3 = Number(prompt("Enter Dolphin score 3"));

// const ks1 = Number(prompt("Enter Koalas score 1"));
// const ks2 = Number(prompt("Enter Koalas score 2"));
// const ks3 = Number(prompt("Enter Koalas score 3"));

const ds1 = 97
const ds2 = 112
const ds3 = 101
const ks1 = 109
const ks2 = 95
const ks3 = 123

const da = (ds1+ds2+ds3)/3
const ka = (ks1+ks2+ks3)/3

if(da>ka)
{
    if(da>=100)
    {
        console.log("Dolphins win 🏆");
    }

    else
    {
        console.log("dolphin avg score is higher but doesnt win ");
    }
    
}
else if(ka>da)
{
    if(ka>=100)
    {
        console.log("Koalas win 🏆");
    }

    else
    {
        console.log("Koalas avg score is higher but doesnt win");
    }
    

}
else
{
    if(ka>=100)
    {
            console.log("Draw : both teams win the game 🏆");   
    }

    else
    {
        console.log("each team has avg score less than 100 : No team wins the game");
    }
    
}