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

function biggestNumber(numbersArray) {
  let highestNumber = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
    }
  }
  return highestNumber;
}

// Desafio 6
function highestCount(arrayCountBiggest) {
  let highestValue = biggestNumber(arrayCountBiggest);
  let countHighestValue = 0;
  for (let index = 0; index < arrayCountBiggest.length; index += 1) {
    if (arrayCountBiggest[index] === highestValue) {
      countHighestValue += 1;
    }
  }
  return countHighestValue;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);
  if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  } if (distMouseCat2 < distMouseCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(inputArray) {
  let emptyArray = [];
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index] % 15 === 0) { // number divisible by 3 and 5 = divisible by 15
      emptyArray[index] = 'fizzBuzz';
    } else if (inputArray[index] % 5 === 0) {
      emptyArray[index] = 'buzz';
    } else if (inputArray[index] % 3 === 0) {
      emptyArray[index] = 'fizz';
    } else {
      emptyArray[index] = 'bug!';
    }
  }
  return emptyArray;
}

// Desafio 9
function encode(inputString) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = [1, 2, 3, 4, 5];
  let outputString = '';
  let storeNumber = 0;
  for(let index = 0; index < inputString.length; index += 1) {
    for (let index2 = 0; index2 < vowels.length; index2++) {
      if (inputString[index] === vowels[index2]) {
        storeNumber = numbers[index2];
      }
    }
    if (storeNumber !== 0) {
      outputString += storeNumber;
      storeNumber = 0;
    } else {
      outputString += inputString[index];
    }
  }
  return outputString;
}
console.log(encode('Hai thereou!'));

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
