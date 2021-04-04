// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
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
function concatName(array) {
  let string = '';
  return string.concat(array[array.length - 1], ', ', array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let frequencyOfBigger = 1; let bigger = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > bigger) {
      frequencyOfBigger = 1;
      bigger = array[index];
    } else if (array[index] === bigger) {
      frequencyOfBigger += 1;
    }
  }
  return frequencyOfBigger;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let whichCatWins = '';
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    whichCatWins = 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    whichCatWins = 'cat1';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    whichCatWins = 'os gatos trombam e o rato foge';
  }
  return whichCatWins;
}

// Desafio 8
function fizzBuzzSecondProcess(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else if (typeof array[index] === 'number') {
      array[index] = 'bug!';
    }
  }
  return array;
}
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    }
  }
  array = fizzBuzzSecondProcess(array);
  return array;
}

// Desafio 9
function encodeSecondProcess(string) {
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case 'i':
      string[index] = '3';
      break;
    case 'o':
      string[index] = '4';
      break;
    case 'u':
      string[index] = '5';
      break;
    default:
      break;
    }
  }
  return string.join('');
}
function encode(string) {
  let charByChar = string.split('');
  for (let index = 0; index < charByChar.length; index += 1) {
    switch (charByChar[index]) {
    case 'a':
      charByChar[index] = '1';
      break;
    case 'e':
      charByChar[index] = '2';
      break;
    default:
      break;
    }
  }
  return encodeSecondProcess(charByChar);
}

function decodeSecondProcess(string) {
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case '3':
      string[index] = 'i';
      break;
    case '4':
      string[index] = 'o';
      break;
    case '5':
      string[index] = 'u';
      break;
    default:
      break;
    }
  }
  return string.join('');
}
function decode(string) {
  let charByChar = string.split('');
  for (let index = 0; index < charByChar.length; index += 1) {
    switch (charByChar[index]) {
    case '1':
      charByChar[index] = 'a';
      break;
    case '2':
      charByChar[index] = 'e';
      break;
    default:
      break;
    }
  }
  return decodeSecondProcess(charByChar);
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
