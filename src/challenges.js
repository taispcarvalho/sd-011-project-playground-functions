// Desafio 1
function compareTrue(valorA, valorB) {
  return valorA && valorB;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let lastIndex = arrayStrings.length-1;
  let lastFirst = arrayStrings[lastIndex] + ', ' + arrayStrings[0];
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let repetitions = 0;
  let higherValue = findHigherValue(numbers);
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherValue) {
      repetitions += 1;
    }
  }
  return repetitions;
}

function findHigherValue (numbers) {
  let higher = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= higher) {
      higher = numbers[index];
    }
  }
  return higher;
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
