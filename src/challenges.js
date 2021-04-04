// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let arrayPhrase = phrase.split (' ');
  return arrayPhrase;
}

// Desafio 4
let name = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

function concatName(name) {
  for (let index = 0; index <= name.length; index++) {
    return name.toString ((index = name.length - 1) + (index = 0))
  }  
}

// Desafio 5
nPoint = 3
function footballPoints(wins = 3, ties = 1) {
  if (nPoint === wins) {
    return wins * nPoint
  } else if (nPoint === ties) {
    return ties * nPoint
  } else {}
  return wins + ties 
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
