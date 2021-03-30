// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  let totalArea = ((base * height) / 2);
  return totalArea;
}

// Desafio 3
function splitSentence(string) {
  array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let nameReturn = array[array.length - 1] + ', ' + array[0];
  return nameReturn;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (3 * wins) + ties;
  return result;
}

let highestArray = [0, 0, 0];

// Desafio 6 Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
function highestCount(array) {
  let higherNumber = 0;
  let repeatNumber = 0;
  for (let highIndex = 0; highIndex < array.length; highIndex += 1) {
    let possibleHigherNumber = higherNumber
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
