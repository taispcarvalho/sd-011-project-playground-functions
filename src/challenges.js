// Desafio 1

function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2

function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}

// Desafio 3

function splitSentence(palavra) {
  return palavra.split(' ');
}

// Desafio 4

function concatName(array) {
  return {array[array.length - 1]} , ${array[0]};
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5

function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6

function highestCount(array) {
  let higherNumber = 0;
  let repeatNumber = 0;
  for (let highIndex = 0; highIndex < array.length; highIndex += 1) {
    let possibleHigherNumber = higherNumber;
    higherNumber = array[highIndex];
    if (higherNumber < possibleHigherNumber) {
      higherNumber = possibleHigherNumber;
    }
  }
  for (let countIndex = 0; countIndex < array.length; countIndex += 1) {
    if (higherNumber === array[countIndex]) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;


  if(Math.abs(distanceCat1) > Math.abs (distanceCat2)) {
    return 'cat2';
  } else if(Math.abs(distanceCat1) < Math.abs (distanceCat2)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let = fizzArrayStr = [];

  for (let fizziindex = 0; fizziindex < arrayOfNumbers.length; fizziindex += 1) {
    if (arrayOfNumbers[fizziindex] % 3 === 0 && arrayOfNumbers[fizziindex] % 5 === 0) {
      fizzArrayStr.push('fizz');
    } else if (arrayOfNumbers[fizziindex] % 5 === 0) {
      fizzArrayStr.push('buzz');
    } else if (arrayOfNumbers[fizziindex] % 3 === 0) {
      fizzArrayStr.push('fizzBuzz');
    } else {
      fizzArrayStr.push('bug');
    }
  }
  return fizzArrayStr;
}

let arrayOfNumbers = [2, 15, 7, 9, 45];
console.log(fizzBuzz(arrayOfNumbers));

// Desafio 9
function encode() {
  // seu código aqu
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
