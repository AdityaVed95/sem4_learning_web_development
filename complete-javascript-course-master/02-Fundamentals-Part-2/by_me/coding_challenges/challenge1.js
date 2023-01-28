const calcAverage = arrayOfScores => (arrayOfScores[0] + arrayOfScores[1] + arrayOfScores[2])/3

function checkWinner(dolphinsAvgScore,koalasAvgScore) 
{
    if(dolphinsAvgScore>= 2*koalasAvgScore )
    {
        console.log(`Dolphins win (${dolphinsAvgScore} vs ${koalasAvgScore}) 🐬🏆`);
    }

    else if(koalasAvgScore >= 2*dolphinsAvgScore)
    {
        console.log(`Koalas win (${koalasAvgScore} vs ${dolphinsAvgScore}) 🐨🏆`);
    }
    
    else if(koalasAvgScore === dolphinsAvgScore)
    {
        console.log("Draw !!! , both of them wins 🏆");
    }
    else
    {
        console.log("No one wins ❌");
    }
}


const dolphinsAvgScore = calcAverage([ 85, 54, 41])
const koalasAvgScore = calcAverage( [23 , 34 , 27] )
checkWinner(dolphinsAvgScore,koalasAvgScore);