// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function higherthNumber(arrayNumbers) {
  let bigNumber = arrayNumbers[0];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > bigNumber) {
      bigNumber = arrayNumbers[index];
    }
  }
  return bigNumber;
}
function highestCount(arrayNumbers) {
  let timesNumberAppears = 0;
  let higherth = higherthNumber(arrayNumbers);
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === higherth) {
      timesNumberAppears += 1;
    }
  }
  return timesNumberAppears;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position1 = Math.abs(cat1 - mouse);
  let position2 = Math.abs(cat2 - mouse);
  let response = '';
  if (position1 > position2) {
    response = 'cat2';
  } else if (position1 < position2) {
    response = 'cat1';
  } else {
    response = 'os gatos trombam e o rato foge';
  }
  return response;
}

// Desafio 8
function fizzBuzz(myArray) {
  let returnArray = [];
  for (let index = 0; index < myArray.length; index += 1) {
    returnArray[index] = 'bug!';
    if (myArray[index] % 15 === 0) {
      returnArray[index] = 'fizzBuzz';
    } else if (myArray[index] % 3 === 0) {
      returnArray[index] = 'fizz';
    } else if (myArray[index] % 5 === 0) {
      returnArray[index] = 'buzz';
    }
  }
  return returnArray;
}

// Desafio 9

function encode(transformString) {
  for (let index = 0; index < transformString.length; index += 1) {
    transformString = transformString.replace('a', '1');
    transformString = transformString.replace('e', '2');
    transformString = transformString.replace('i', '3');
    transformString = transformString.replace('o', '4');
    transformString = transformString.replace('u', '5');
  }
  return transformString;
}

function decode(transformString) {
  for (let index = 0; index < transformString.length; index += 1) {
    transformString = transformString.replace('1', 'a');
    transformString = transformString.replace('2', 'e');
    transformString = transformString.replace('3', 'i');
    transformString = transformString.replace('4', 'o');
    transformString = transformString.replace('5', 'u');
  }
  return transformString;
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
