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

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let encodeString = '';
  string.toLowerCase();
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case 'a':
      encodeString += '1';
      break;
    case 'e':
      encodeString += '2';
      break;
    case 'i':
      encodeString += '3';
      break;
    case 'o':
      encodeString += '4';
      break;
    case 'u':
      encodeString += '5';
      break;
    default:
      encodeString += string[index];
      break;
    }
  }
  return encodeString;
}

function decode(string) {
  let decodeString = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case '1':
      decodeString += 'a';
      break;
    case '2':
      decodeString += 'e';
      break;
    case '3':
      decodeString += 'i';
      break;
    case '4':
      decodeString += 'o';
      break;
    case '5':
      decodeString += 'u';
      break;
    default:
      decodeString += string[index];
      break;
    }
  }
  return decodeString;
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
