// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let stringsArray = sentence.split(' ');

  return stringsArray;
}

// Desafio 4
function concatName(stringsArray) {
  let concatenatedString = stringsArray[stringsArray.length - 1] + ', ' + stringsArray[0];

  return concatenatedString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);

  return totalPoints;
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
