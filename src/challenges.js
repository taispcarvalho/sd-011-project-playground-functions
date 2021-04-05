// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2) {
    return true;
  }
  return false;
}
let param1 = 2;
let param2 = '';
compareTrue(param1, param2);
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
// Desafio 3
function splitSentence(goTrybe) {
  // seu código aqui
  let result = goTrybe.split(' ');
  return result;
}
splitSentence('Go trybe');
// Desafio 4
function concatName(names) {
  // seu código aqui
  let first = names.shift();
  let last = names.pop();
  return `${last}, ${first}`;
}
let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
concatName(names);
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let vitoria = 14;
  let empate = 8;
  let score = (vitoria * wins) + (empate * ties);
  return score;
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
