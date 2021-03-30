// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  let totalArea = ((base * height)/2);
  return totalArea;
}

// Desafio 3
function splitSentence(string) {
  array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let nameReturn = array[array.length - 1] + ', ' + array[0];
  return nameReturn;
}

function footballPoints(wins, ties) {
  let result = (3 * wins) + ties;
  return result; 
}

console.log(footballPoints(0,0))

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
