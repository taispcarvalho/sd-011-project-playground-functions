// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence, separator) {
  return sentence.split(separator);
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function biggest(array) {
  let higher = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > higher) {
      higher = array[index];
    }
  }
  return higher;
}
function highestCount(array) {
  let target = biggest(array);
  let counter = 0;
  for (let index in array) {
    if (array[index] === target) {
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
