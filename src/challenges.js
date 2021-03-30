// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let finalString = (arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0]);
  return finalString; 
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + (ties * 1));
  points = points || 0;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = Math.max(...numbers);
  let numberRepetitions = 0;
  for (i = 0; i < numbers.length; i += 1) {
    if (highestNumber === numbers[i]) {
      numberRepetitions += 1;
    }
  }
  return numberRepetitions;
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
