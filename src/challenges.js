// Desafio 1 - OK
function compareTrue(value1, value2) {
  return value1 && value2;
}
console.log('teste 1');
console.log(compareTrue(true, true));

// Desafio 2 - OK
function calcArea(base, height) {
  return ((base * height) / 2);
}
console.log(calcArea(35, 30));

// Desafio 3 - OK
function splitSentence(frase) {
  let arrayFrase = frase.split(' ');
  return arrayFrase;
}

// Desafio 4
function concatName(array) {
  let string = array[array.length - 1].concat(', ' + array[0]);
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
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
