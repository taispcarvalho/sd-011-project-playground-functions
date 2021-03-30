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
      lastCommaFirst += arrayOfStrings[index] + ', ';
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
function highestCount(arrayOfNumbers) {
  return countRepetition(verifyHighest(arrayOfNumbers), arrayOfNumbers);
}

function verifyHighest(arrayOfNumbers) {
  let max = arrayOfNumbers.reduce(function(a, b) {
    return Math.max(a, b);
  });
  return max;
}

function countRepetition(value, arrayOfNumbers) {
  let count = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (value === arrayOfNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

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
