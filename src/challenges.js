// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(concatArray) {
  let ultiConcatString = concatArray[concatArray.length - 1];
  let firstConcatString = concatArray[0];

  return `${ultiConcatString}, ${firstConcatString}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(repeatNumber) {
  let higherNumber = 0;
  let counterNumber = 0;

  for (let firstIndex = 0; firstIndex < repeatNumber.length; firstIndex += 1) {
    if (repeatNumber[firstIndex] > higherNumber) {
      higherNumber = repeatNumber[firstIndex];
    }
  }

  for (let secondIndex = 0; secondIndex < repeatNumber.length; secondIndex += 1) {
    if (higherNumber === repeatNumber[secondIndex]) {
      counterNumber += 1;
    }
  }
  return counterNumber;
}

let a = [0, 4, 4, 4, 2, 1];
console.log(highestCount(a));

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
