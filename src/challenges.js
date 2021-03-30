// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentece) {
  return sentece.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  return arrayNames[arrayNames.length - 1].concat(`, ${arrayNames[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = arrayNumbers[0];
  let repeater = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {

    if (arrayNumbers[index] > higherNumber) {
        higherNumber = arrayNumbers[index]
      }
    if (arrayNumbers[index] == higherNumber) {
        repeater += 1  
    }
  }
  return repeater
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))

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
