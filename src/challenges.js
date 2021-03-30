// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, altura) {
  return base * altura / 2;
}

console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('foguete marlon'));

// Desafio 4
let arrr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

function concatName(arr) {
  return arr[arr.length - 1].concat(', ', arr[0]);
}

console.log(concatName(arrr));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

console.log(footballPoints(7, 2));

// Desafio 6
function highestCount() {

}

let numberr = [0, 4, 4, 4, 9, 2, 1];

console.log(highestCount(numberr));

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
