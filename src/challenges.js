// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}


// Desafio 2
function calcArea(base, height) {
  let multiply = base * height;
  let result = multiply / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];
  let result = last.concat(', ', first);
  return result;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let resultWins = wins * 3;
  return resultWins + ties;
}

// Desafio 6 [1, 2, 3, 4, 5, 1];
function getHighNumber (array){
  let bigNumber = 0;
  for (let index in array){
    if (array[index] > bigNumber){
      bigNumber = array[index];
    }
  }
  return bigNumber;
}

function getNumberOfOcurrences(array, number){
  let counter = 0;
  for (let index in array){
    if (array[index] === number){
      counter++;
    }
  }
  return counter;
}

function highestCount(array) {
  let highNumber = getHighNumber(array);
  let result = getNumberOfOcurrences(array, highNumber);
  return result;
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
