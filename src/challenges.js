// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(arrayOfStrings) {
  let firstItem = arrayOfStrings[0];
  let lastItem = arrayOfStrings[arrayOfStrings.length - 1];
  let stringConcat = lastItem + ' , ' + firstItem;
  return stringConcat;
}

console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let championshipResult = (wins * 3) + (ties * 1);
  return championshipResult;
}

console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNum = arrayNumbers[0];
  for (let index = 1; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higherNum) {
      higherNum === arrayNumbers[index];
    }
  }
  let repetHigherNum = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === higherNum) {
      repetHigherNum + 1;
  }
  }
  return repetHigherNum;
  }

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(repetHigherNum);
console.log(higherNum);

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
