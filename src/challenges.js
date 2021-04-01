// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(names) {
  let stringNames = names[names.length - 1];
  stringNames += ', ';
  stringNames += names[0];
  return stringNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = 0;
  score += wins * 3;
  score += ties * 1;
  return score;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let ordNumbers = arrayNumbers.sort((a, b) => a - b);
  let bigNumber = ordNumbers[ordNumbers.length - 1];
  let numberRepeat = 0;
  for (let index = 0; index < ordNumbers.length; index += 1) {
    if (ordNumbers[index] === bigNumber) {
      numberRepeat += 1;
    }
  }
  return numberRepeat;
}
// A arrow function para realizar a ordenação dos números foi retirada de "https://www.digitalocean.com/community/tutorials/js-array-sort-numbers"

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catMouse1 = Math.abs(mouse - cat1);
  let catMouse2 = Math.abs(mouse - cat2);
  if (catMouse1 === catMouse2) {
    return 'os gatos trombam e o rato foge';
  } if (catMouse1 < catMouse2) {
    return 'cat1';
  } if (catMouse1 > catMouse2) {
    return 'cat2';
  }
}

// Desafio 8
function getFizzBuzzString(value) {
  let str = 'bug!';
  if (value % 3 === 0) {
    str = 'fizz';
  }
  if (value % 5 === 0) {
    if (str !== 'bug!') {
      str += 'Buzz';
    } else {
      str = 'buzz';
    }
  }
  return str;
}

function fizzBuzz(fbArray) {
  let result = [];
  for (let index = 0; index < fbArray.length; index += 1) {
    let str = getFizzBuzzString(fbArray[index]);

    result.push(str);
  }
  return result;
}
// Precisa diminuir a complexidade do Desafio 8

// Desafio 9
function encodeCharacter(character) {
  if (character === 'a') {
    return '1';
  }
  if (character === 'e') {
    return '2';
  }
  if (character === 'i') {
    return '3';
  }
  if (character === 'o') {
    return '4';
  }
  if (character === 'u') {
    return '5';
  }
  return character;
}

function encode(initString) {
  let newString = '';
  for (let index = 0; index < initString.length; index += 1) {
    newString += encodeCharacter(initString[index]);
  }
  return newString;
}

function decodeCharacter(character) {
  if (character === '1') {
    return 'a';
  }
  if (character === '2') {
    return 'e';
  }
  if (character === '3') {
    return 'i';
  }
  if (character === '4') {
    return 'o';
  }
  if (character === '5') {
    return 'u';
  }
  return character;
}

function decode(initString) {
  let newString = '';
  for (let index = 0; index < initString.length; index += 1) {
    newString += decodeCharacter(initString[index]);
  }
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
