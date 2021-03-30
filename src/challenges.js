// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === bool2 && bool2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  if (base && height > 0) {
    let result = (base * height) / 2;
    return result;
  }

  return 'Insira valores maiores que zero!';
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let last_first = [];
  let first = array[0];
  let last = array[array.length -1];
  last_first = last + ' ' + first;
  return last_first;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

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
