// Desafio 1
function compareTrue(value, value2) {
  return value && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
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
function higherNumberOfArray(arrayNumbers) {
  let higherNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higherNumber) {
      higherNumber = arrayNumbers[index];
    }
  }
  return higherNumber;
}

function highestCount(arrayNumbers) {
  let higherNumber = higherNumberOfArray(arrayNumbers);
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (higherNumber === arrayNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1AndMouse = Math.abs(cat1 - mouse);
  let distanceCat2AndMouse = Math.abs(cat2 - mouse);

  if (distanceCat1AndMouse < distanceCat2AndMouse) {
    return 'cat1';
  }
  if (distanceCat2AndMouse < distanceCat1AndMouse) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzzBug = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    switch (true) {
    case (arrayNumbers[index] % 3 === 0):
      arrayFizzBuzzBug.push('fizz');
      if (arrayNumbers[index] % 5 === 0) {
        arrayFizzBuzzBug.pop();
        arrayFizzBuzzBug.push('fizzBuzz');
      }
      break;
    case (arrayNumbers[index] % 5 === 0):
      arrayFizzBuzzBug.push('buzz');
      break;
    default:
      arrayFizzBuzzBug.push('bug!');
    }
  }
  return arrayFizzBuzzBug;
}

// Desafio 9
function encode(string) {
  let chars = { a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  string = string.replace(/[aeiou]/g, (i) => chars[i]);
  return string;
}

function decode(string) {
  let chars = { 1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  string = string.replace(/[12345]/g, (i) => chars[i]);
  return string;
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
