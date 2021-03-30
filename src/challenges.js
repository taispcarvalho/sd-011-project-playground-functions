// Desafio 1
function compareTrue(input1, input2) {
  // seu código aqui
  if (input1 && input2) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let stringArray = string.split(' ');
  return stringArray;
}
// console.log(splitSentence('Vamo que vamo'));

// Desafio 4
// let testArrayD4 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']; // Array de teste
function concatName(arrayD4) {
  // seu código aqui
  return `${arrayD4[arrayD4.length - 1]}, ${arrayD4[0]}`;
}
// console.log(concatName(testArrayD4));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = (wins * 3) + ties;
  return totalPoints; 
}
// console.log(footballPoints(0,0))

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
