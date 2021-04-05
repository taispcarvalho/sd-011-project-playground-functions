// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(splitString) {
  return splitString.split(' ');
}

// Desafio 4
function concatName(inintialtArray) {
  return inintialtArray[inintialtArray.length - 1].concat(', ') + inintialtArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function seekGreaterNumber(numbersArray) {
  let higherNumber = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > higherNumber) {
      higherNumber = numbersArray[index];
    }
  }
  return higherNumber;
}
function highestCount(numbersArray) {
  let largestAccountant = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === seekGreaterNumber(numbersArray)) {
      largestAccountant += 1;
    }
  }
  return largestAccountant;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  if ((cat2) < (cat1)) {
    return 'cat2';
  }
  if ((cat1) < (cat2)) {
    return 'cat1';
  }
}

// Desafio 8
function conditionForFizzBuzz(value) {
  if (value % 15 === 0) {
    return 'fizzBuzz';
  }
  if (value % 3 === 0) {
    return 'fizz';
  }
  if (value % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(numbers) {
  let newArrayFizBuzz = [];
  for (let index = 0; index < numbers.length; index += 1) {
    newArrayFizBuzz.push(conditionForFizzBuzz(numbers[index]));
  }
  return newArrayFizBuzz;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, 1);
  string = string.replace(/e/g, 2);
  string = string.replace(/i/g, 3);
  string = string.replace(/o/g, 4);
  string = string.replace(/u/g, 5);
  return string;
}

function decode(newString) {
  newString = newString.replace(/1/g, 'a');
  newString = newString.replace(/2/g, 'e');
  newString = newString.replace(/3/g, 'i');
  newString = newString.replace(/4/g, 'o');
  newString = newString.replace(/5/g, 'u');
  return newString;
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
