// Desafio 1
function compareTrue(param1, param2) {
  param1 && param2; return true
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');
  return arrayOfStrings;
}

// Desafio 4
function concatName(string) {
  let lastName = string[string.length - 1];
  let firstName = string[0];
  let newArray = [lastName, firstName];
  return newArray;
}
let string = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(string));

// Desafio 5
function footballPoints(string) {
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
