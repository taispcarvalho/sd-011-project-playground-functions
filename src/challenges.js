/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-unused-vars */
// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  array = [array[array.length - 1], array[0]];
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = wins * 3 + ties * 1;
  return score;
}

// Desafio 6
function highestCount(array) {
  let biggestNumber = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (biggestNumber < array[i]) {
      biggestNumber = array[i];
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j] === biggestNumber) {
      counter += 1;
    }
  }
  return counter;
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
