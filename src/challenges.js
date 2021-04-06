// Desafio 1

function compareTrue(valueA, valueB) {
  return (valueA && valueB);
}
// Oliva fez a demonstração em aula desse desafio

// Desafio 2

function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
/** source https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */

// Desafio 4

function concatName(anyArray) {
// return ([anyArray[anyArray.length - 1], anyArray[0]]); // ESSA FUNCIONA PARA OBJETO


// // Desafio 5
// function footballPoints(wins, ties) {
//   return ((wins + ties) * 3)
// };

// // Desafio 6
// function highestCount(anyNumberArray) {
//   let higherNumber = 0;
//   let repetitions = 0;
//   for (let anyNumber of anyNumberArray) {
//     if (anyNumber > higherNumber) {
//       higherNumber = anyNumber;
//     }
//     if (higherNumber === anyNumber) {
//       repetitions += 1;
//     }
//   }
//   return repetitions;
// }

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