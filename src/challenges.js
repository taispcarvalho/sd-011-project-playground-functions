// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(value1, value2) {
  let base = value1;
  let height = value2;
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1];
  let firstItem = array[0];
  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = (3 * wins) + ties;
  return points;
}

// Desafio 6

function findHighest(array) {
  let highest = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (highest < array[index]) {
      highest = array[index];
    }
  }
  return highest;
}

function counterHighest(highest, array) {
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (highest === array[index]) {
      counter += 1;
    }
  }
  return counter;
}

function highestCount(array) {
  return counterHighest(findHighest(array), array);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  let message = 'os gatos trombam e o rato foge';

  if (distance1 > distance2) {
    return 'cat2';
  }

  if (distance1 < distance2) {
    return 'cat1';
  }

  if (distance1 === distance2) {
    return message;
  }
}

// Desafio 8
function fizzBuzzChecker(result, array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 15 === 0) {
      result[index].push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result[index].push('fizz');
    } else if (array[index] % 5 === 0) {
      result[index].push('buzz');
    }
    result[index].push('bug!');
  }
  return result;
}

function fizzBuzz(array) {
  let result = [];
  fizzBuzzChecker(result, array);
  console.log(result);
}

// Desafio 9
function encodeA(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      string[index] = '1';
    }
  }
  return string;
}

function encodeE(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'e') {
      string[index] = '2';
    }
  }
  return string;
}

function encodeI(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'i') {
      string[index] = '3';
    }
  }
  return string;
}

function encodeO(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'o') {
      string[index] = '4';
    }
  }
  return string;
}

function encodeU(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'u') {
      string[index] = '5';
    }
  }
  return string;
}

function decode1(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      string[index] = 'a';
    }
  }
  return string;
}

function decode2(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '2') {
      string[index] = 'e';
    }
  }
  return string;
}

function decode3(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '3') {
      string[index] = 'i';
    }
  }
  return string;
}

function decode4(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '4') {
      string[index] = 'o';
    }
  }
  return string;
}

function decode5(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '5') {
      string[index] = 'u';
    }
  }
  return string;
}

function encode(string) {
  let sentence = string;
  encodeA(sentence);
  encodeE(sentence);
  encodeI(sentence);
  encodeO(sentence);
  encodeU(sentence);
  return sentence;
}

function decode(string) {
  let sentence = string;
  decode1(sentence);
  decode2(sentence);
  decode3(sentence);
  decode4(sentence);
  decode5(sentence);
  return sentence;
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
