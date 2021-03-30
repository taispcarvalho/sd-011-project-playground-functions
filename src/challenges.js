// Desafio 1
function compareTrue(older18, hasLicense) {
  return older18 && hasLicense;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayName) {
  return (arrayName[arrayName.length - 1] + ', ' + arrayName[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1)); 
}

// Desafio 6
function highestCount(arrayNumbers) {
  let numberX = calculateHighestNumber(arrayNumbers);
  let amountHighestNumber = mostRepeatedNumber(arrayNumbers, numberX);

  return amountHighestNumber;
}

console.log(highestCount([0, 0, 0]))

function calculateHighestNumber(arrayNumbers) {
  let highest = arrayNumbers[0];

  for (number of arrayNumbers) {
    if (number > highest) {
      highest = number;
    }
  }
  return highest;
}

function mostRepeatedNumber(arrayNumbers, numberX) {
  let amountNumberX = 0;
  for (number of arrayNumbers) {
    if (numberX === number) {
      amountNumberX += 1;
    }
  }
  return amountNumberX;
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
