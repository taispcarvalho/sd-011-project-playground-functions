// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let stringsArray = sentence.split(' ');

  return stringsArray;
}

// Desafio 4
function concatName(stringsArray) {
  let concatenatedString = `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;

  return concatenatedString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);

  return totalPoints;
}

// Desafio 6
function highestValueNumber(numbers) {
  let highestValue = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestValue) {
      highestValue = numbers[index];
    }
  }

  return highestValue;
}

function highestCount(numbers) {
  let count = 0;

  for (let number of numbers) {
    if (number === highestValueNumber(numbers)) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let delta1 = Math.abs(cat1 - mouse);
  let delta2 = Math.abs(cat2 - mouse);
  let result = '';

  if (delta1 > delta2) {
    result = 'cat2';
  } else if (delta1 < delta2) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }

  return result;
}

// Desafio 8
function testElement(number) {
  let newElement = '';

  if (number % 3 === 0 && number % 5 === 0) {
    newElement = 'fizzBuzz';
  } else if (number % 3 === 0) {
    newElement = 'fizz';
  } else if (number % 5 === 0) {
    newElement = 'buzz';
  } else {
    newElement = 'bug!';
  }

  return newElement;
}

function fizzBuzz(arrayNumbers) {
  let newArray = [];

  for (let number of arrayNumbers) {
    newArray.push(testElement(number));
  }

  return newArray;
}

// Desafio 9
function testEncode(character) {
  switch (character) {
  case 'a':
    character = '1';
    break;
  case 'e':
    character = '2';
    break;
  case 'i':
    character = '3';
    break;
  case 'o':
    character = '4';
    break;
  case 'u':
    character = '5';
    break;
  default:
    character;
  }

  return character;
}

function encode(sentence) {
  let newSentence = '';

  for (let character of sentence) {
    newSentence += testEncode(character);
  }

  return newSentence;
}

function testDecode(character) {
  switch (character) {
  case '1':
    character = 'a';
    break;
  case '2':
    character = 'e';
    break;
  case '3':
    character = 'i';
    break;
  case '4':
    character = 'o';
    break;
  case '5':
    character = 'u';
    break;
  default:
    character;
  }

  return character;
}

function decode(sentence) {
  let newSentence = '';

  for (let character of sentence) {
    newSentence += testDecode(character);
  }

  return newSentence;
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
