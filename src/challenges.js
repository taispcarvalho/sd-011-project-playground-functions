// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
function fizzBuzz(array) {
  let numeros = [];
  for (let index in array) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
    numeros.push ('fizzBuzz');
    } else if (array[index] % 5 === 0){
    numeros.push ('buzz');
    } else if  (array[index] % 3 === 0) {
    numeros.push ('fizz');
    } else {
    numeros.push('bug!');
    }
  }
  return numeros;
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
