// Desafio 1
function compareTrue(firstBool, secondBool) {
  return firstBool && secondBool;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arr) {
  let firstValue = arr[0];
  let lastValue = arr[arr.length - 1];
  return [firstValue, lastValue];
}

// Desafio 5
function footballPoints(wins, ties) {
  const winMultiplier = 3;
  return (wins * winMultiplier) + ties;
}

// Desafio 6
function highestCount(arr) {
  let highestNumber = Math.max(...arr);
  return arr.filter((value) => value === highestNumber).length;
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
