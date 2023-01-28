'use strict'

function fruitCutter(noOfFruits)
{
    const noOfFruitPieces = noOfFruits * 4;
    return noOfFruitPieces;
}

function juiceMaker(noOfPiecesOfEachFruitArray)
{
    return `Enjoy your fresh juice made of ${noOfPiecesOfEachFruitArray[0]} apple pieces and ${noOfPiecesOfEachFruitArray[1]} orange pieces`
}

function fruitProcessor(noOfApples,noOfOranges)
{
    const noOfApplePieces = fruitCutter(noOfApples);
    const noOfOrangePieces = fruitCutter(noOfOranges);
    const finalJuice = juiceMaker([noOfApplePieces,noOfOrangePieces])
    console.log(finalJuice);
}

fruitProcessor(4,5)