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
function funtionHigherNumber(repeatNumber) {
  let higherNumber = 0;
  for (let firstIndex = 0; firstIndex < repeatNumber.length; firstIndex += 1) {
    if (repeatNumber[firstIndex] > higherNumber) {
      higherNumber = repeatNumber[firstIndex];
    }
  }
  return higherNumber;
}

function highestCount(repeatNumber) {
  let higherNumber = funtionHigherNumber(repeatNumber);
  let counterNumber = 0;

  for (let secondIndex = 0; secondIndex < repeatNumber.length; secondIndex += 1) {
    if (higherNumber === repeatNumber[secondIndex]) {
      counterNumber += 1;
    }
  }
  return counterNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = 0;
  let positionCat2 = 0;
  let result = "";

  if (mouse > cat1) {
    positionCat1 = mouse - cat1;
  } else {
    positionCat1 = cat1 - mouse;
  }

  if (mouse > cat2) {
    positionCat2 = mouse - cat2;
  } else {
    positionCat2 = cat2 - mouse;
  }

  if (positionCat1 > positionCat2) {
    result = "cat1";
    return result;
  } else {
    result = "cat2";
    return result;
  }
}

console.log(catAndMouse(7, 5, 8));

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
