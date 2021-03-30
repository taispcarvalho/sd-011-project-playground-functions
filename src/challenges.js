// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  let totalArea = ((base * height) / 2);
  return totalArea;
}

// Desafio 3
function splitSentence(string) {
  array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let nameReturn = array[array.length - 1] + ', ' + array[0];
  return nameReturn;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (3 * wins) + ties;
  return result;
}

let highestArray = [0, 0, 0];

// Desafio 6
function highestCount(array) {
  let higherNumber = 0;
  let repeatNumber = 0;
  for (let highIndex = 0; highIndex < array.length; highIndex += 1) {
    let possibleHigherNumber = higherNumber
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

  if (Math.abs(distanceCat1) > Math.abs(distanceCat2)) {
    return 'cat2';
  } else if (Math.abs(distanceCat1) < Math.abs(distanceCat2)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8

let array1 = [9,25];

function fizzBuzz(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      newArray.push('fizz');
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      newArray.push('buzz');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else {
      newArray.push('bug!')
    }
  }
  return newArray;
}

console.log (fizzBuzz(array1))

// Desafio 9
function encode() {
  
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
