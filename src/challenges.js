// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(splitString) {
  return splitString.split(' ');
}
console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(inintialtArray) {
  return inintialtArray[inintialtArray.length - 1].concat(', ' + inintialtArray[0]);
}
console.log(concatName(['Lucas', 'Cassiano', 'ferraz', 'Paolilo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

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
