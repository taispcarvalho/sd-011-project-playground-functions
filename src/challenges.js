// Desafio 1
function compareTrue(boolValue1, boolValue2) {
  if (boolValue1 && boolValue2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangArea = (base * height) / 2;
  return triangArea;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let splitResult = stringToSplit.split(' ');
  return splitResult;
}

// Desafio 4
function concatName(arrayConcat) {
  let concatResult = `${arrayConcat[arrayConcat.length - 1]}, ${arrayConcat[0]}`;
  return concatResult;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score;
  let pointWins = 3;
  let pointTies = 1;
  score = wins * `${pointWins}` + ties * `${pointTies}`;
  return score;
}

// Desafio 6
function highestCount(arrayCountBiggest) {
  let highestValue = biggestNumber(arrayCountBiggest);
  let countHighestValue = 0;
  for(let index = 0; index < arrayCountBiggest.length; index+= 1) {
    if (arrayCountBiggest[index] === highestValue) {
      countHighestValue += 1;
    }
  }
  return countHighestValue;
}

function biggestNumber(numbersArray) {
  let biggestNumber = 0;
  for (let index = 0; index < numbersArray.length; index+=1) {
    if (numbersArray[index] > biggestNumber) {
      biggestNumber = numbersArray[index];
    }
  }
  return biggestNumber;
}

console.log(highestCount([9, 1, 2, 9, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
