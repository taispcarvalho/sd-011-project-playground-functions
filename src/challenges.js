// Matheus Antonio - Zeonnatios
// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let aux = '';
  let index = 0;
  let arrayStr = [];
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase.charAt(i) !== ' ') {
      aux += phrase.charAt(i);
    } else {
      arrayStr[index] = aux;
      aux = '';
      index += 1;
    }
  }
  arrayStr[index] = aux;
  return arrayStr;
}

// Desafio 4
function concatName(arrStr) {
  let strConcatenated = arrStr[arrStr.length - 1];
  strConcatenated += ', ';
  strConcatenated += arrStr[0];
  return strConcatenated;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount() {}

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
