// Desafio 1
function compareTrue(value1,value2) {
  return value1 && value2;
}



// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth)/2
}


// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}


// Desafio 4
let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let wins = wins * 3;
  let ties = 1;
  let winning = 
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
