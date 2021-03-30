// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));
// Desafio 3
function splitSentence(frase) {
  let space = ' ';
  let fraseParaSeparar = frase.split(space);
  return fraseParaSeparar;
}
console.log(splitSentence('go Trybe'));
// Desafio 4
function concatName(array) {
  let fraseConcatenada = '';
  fraseConcatenada += array[array.length - 1];
  fraseConcatenada += ', ';
  fraseConcatenada += array[0];
  return fraseConcatenada;
}
console.log(concatName(['captain', 'my', 'captain']));
// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3 * wins;
  let tiePoints = 1 * ties;
  let teamPoints = winPoints + tiePoints;
  return teamPoints;
}
console.log(footballPoints(14, 8));
// Desafio 6
function highestCount(array) {
  let highestNumberTimes = '';
  let actualHigherNumber = '';
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = ; index2 < array.length; index2 += 1) {
    }
  }
}

console.log(highestCount([1, 9, 2, 3, 9, 5, 7]));
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
