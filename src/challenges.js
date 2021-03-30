// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
// let param1 = 'josan johnata'
function splitSentence(param1) {
  return param1.split(' ');
}
// console.log(splitSentence(param1));

// Desafio 4
function concatName(param1) {
  return param1[param1.length -1] + ', ' + param1[0];
}
// Desafio 5
let wins = 3;
let ties = 1;
function footballPoints(wins, ties) {
  
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
