// Desafio 1
function compareTrue(valorOne, ValorTwo) {
  return valorOne && ValorTwo;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(SeparateWords) {
  return (SeparateWords.split(' '));
}

// Desafio 4
function concatName(myArray) {
  let formatName = myArray[myArray.length - 1] + ', ' + myArray[0];
  return formatName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
//https://www.geeksforgeeks.org/c-program-find-largest-element-array/
function highestCount(listOfNumbers) {
let count = 0;
let highestNumber = listOfNumbers[0];
  for (let index = 1; index < listOfNumbers.length; index +=1) {
  if (listOfNumbers[index] > highestNumber) {
  highestNumber = listOfNumbers[index];
  }
}

for ( let index = 0; index < listOfNumbers.length; index +=1) {
  if (listOfNumbers[index] == highestNumber) {
    count +=1;
  }
}
  return count;
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
