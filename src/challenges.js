// Desafio 1

function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2

function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}

// Desafio 3

function splitSentence(palavra) {
  return palavra.split(' ');
}

// Desafio 4

function concatName(array) {
  let nameReturn = array[array.length - 1] + ' , ' + array[0];
  return nameReturn;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5

function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6

function highestCount(array) {
  let higherNumber = 0;
  let repeatNumber = 0;
  for (let highIndex = 0; highIndex < array.length; highIndex += 1) {
    let possibleHigherNumber = higherNumber;
    higherNumber = array[highIndex];
    if (higherNumber < possibleHigherNumber) {
      higherNumber = possibleHigherNumber;
    }
  }
  for (let countIndex = 0; countIndex < array.length; countIndex += 1) {
    if (higherNumber === array[countIndex]) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7

function catAndMouse(cat1, cat2) {
  if (cat1 > cat2) {
    return 'cat2';
  }
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
