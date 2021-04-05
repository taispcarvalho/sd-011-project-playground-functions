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
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrNum) {
  let arrayFizzBuzz = [];

  for (let index = 0; index < arrNum.length; index += 1) {
    if ((arrNum[index] % 15 === 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrNum[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else if (arrNum[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}
function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
