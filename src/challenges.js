// Desafio 1
function compareTrue(boolValue1, boolValue2) {
  if (boolValue1 && boolValue2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangArea;
  triangArea = (base * height) / 2;
  return triangArea;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let splitResult;
  splitResult = stringToSplit.split(' ');
  return splitResult;
}

// Desafio 4
function concatName(arrayConcat) {
  let qtyElements = arrayConcat.length;
  let qtyPositionsArray = qtyElements - 1;
  let concatResult;
  concatResult = arrayConcat[qtyPositionsArray] + ', ' + arrayConcat[0];
  return concatResult;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
