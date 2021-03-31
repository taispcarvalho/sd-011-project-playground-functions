// Desafio 1
function compareTrue(value, value2) {
  return value && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base*height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return arrayString[arrayString.length - 1] + ', ' + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  function higherNumberOfArray(arrayNumbers) {
    let higherNumber = 0;
    for(let index= 0; index < arrayNumbers.length; index += 1) {
      if(arrayNumbers[index] > higherNumber) {
        higherNumber = arrayNumbers[index];
      }
    }
    return higherNumber;
  }

  let higherNumber = higherNumberOfArray(arrayNumbers);
  let highestCount = 0;
  for(let index = 0; index < arrayNumbers.length; index += 1) {
    if(higherNumber === arrayNumbers[index]) {
      highestCount += 1;
    }
  }
  return highestCount;
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
