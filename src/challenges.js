// Desafio 1
const compareTrue = (boolean, boolean2) => {
  return boolean && boolean2
};

console.log(compareTrue(false, false));

// Desafio 2
const calcArea = (a, b) => {
  return (a * b) / 2;
}
console.log(calcArea(10, 20));

// Desafio 3
const splitSentence = (str) => {
  return str.split(" ")
}

console.log(splitSentence('Vamo que vamo'));

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
