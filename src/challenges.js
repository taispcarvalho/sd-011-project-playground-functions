// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceSplited = sentence.split(' ');
  return sentenceSplited;
}

// Desafio 4
function concatName(array) {
  let firstPosition = array[0];
  let lastPosition = array[array.length - 1];
  let pontuation = ', ';

  return lastPosition + pontuation + firstPosition;
}

// Desafio 5
function footballPoints(wins, ties) {
  let numberOfWins = wins * 3;
  let numberOfTies = ties * 1;

  return numberOfWins + numberOfTies;
}

// Desafio 6
function highestCount(numbersArray) {
  let biggerNumber = Math.max.apply(null, numbersArray);
  let timesOfBiggerNumberAppears = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (biggerNumber === numbersArray[index]) {
      timesOfBiggerNumberAppears += 1;
    }
  }
  return timesOfBiggerNumberAppears;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 === distanceCat2) {
    return 'os gatos trobam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbersofArray) {
  let arrayFizzBuzz = [];

  for (let index = 0; index < numbersofArray.length; index += 1) {
    if ((numbersofArray[index] % 3 === 0) && (numbersofArray[index] % 5 === 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (numbersofArray[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else if (numbersofArray[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
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
