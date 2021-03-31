// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayOfStrings) {
  let lastCommaFirst = '';
  for (let index = ((arrayOfStrings.length) - 1); index >= 0; index -= 1) {
    if (index === ((arrayOfStrings.length) - 1)) {
      lastCommaFirst += arrayOfStrings[index];
      lastCommaFirst += ', ';
    } else if (index === 0) {
      lastCommaFirst += arrayOfStrings[index];
    }
  }
  return lastCommaFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins + ties);
}

// Desafio 6
function countRepetition(value, arrayOfNumbers) {
  let count = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (value === arrayOfNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

function verifyHighest(arrayOfNumbers) {
  let max = arrayOfNumbers.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return max;
}

function highestCount(arrayOfNumbers) {
  return countRepetition(verifyHighest(arrayOfNumbers), arrayOfNumbers);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 0;
}

// Desafio 8

function fizzBuzz(arrayOfNumbers) {
   return arrayOfNumbers.map(number => {
    if (number % 3 === 0 && number % 5 !== 0) {
      return 'fizz';
    }
    if (number % 3 !== 0 && number % 5 === 0) {
      return 'buzz';
    }
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzBuzz';
    }
    if (number % 3 !== 0 && number % 5 !== 0) {
      return 'bug!';
    }
  });
}

// Arquivo /src/challenges.js
// Linha 73: Function 'fizzBuzz' has a complexity of 10. Maximum allowed is 5.
// Linha 73: Refactor this function to reduce its Cognitive Complexity from 13 to the 5 allowed.

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
