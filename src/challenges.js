// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');

  return array;
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  let newArray = `${array[array.length - 1]}, ${array[0]}`;

  return newArray;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let finalPoints = (wins * 3) + ties;

  return finalPoints;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  let higherValue = 0;
  let repeatValue = 0;

  for (let highestIndex = 0; highestIndex < array.length; highestIndex += 1) {
    if (higherValue < array[highestIndex]) {
      higherValue = array[highestIndex];
    }
   // return higherValue;
  }

  for (let countIndex = 0; countIndex < array.length; countIndex += 1) {
    if (higherValue === array[countIndex]) {
      repeatValue += 1;
    }
  }
  return repeatValue;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));



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
