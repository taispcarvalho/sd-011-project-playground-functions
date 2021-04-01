// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * (height / 2));
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstName = array[array.length - 1];
  let lastName = array[0];
  return `${firstName}, ${lastName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let newArray = array.sort();
  let highestNumber = newArray[newArray.length - 1];
  let countNumber = 0;
  for (let index in array) {
    if (highestNumber === array[index]) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    result = 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    result = 'cat2';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    result = 'cat1';
  }
  return result;
}

// Desafio 8
function substituteWords(number) {
  if (number % 5 === 0 && number % 3 === 0) return 'FizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return 'bug!';
}

function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(substituteWords(array[index]));
  }
  return newArray;
}

// Desafio 9
function encode(str) {
  let newStr = '';
  for (let index in str) {
    if (str[index] === 'a') {
      newStr += '1';
    } else if (str[index] === 'e') {
      newStr += '2';
    } else if (str[index] === 'i') {
      newStr += '3';
    } else if (str[index] === 'o') {
      newStr += '4';
    } else if (str[index] === 'u') {
      newStr += '5';
    } else {
      newStr += str[index];
    }
  }
  return newStr;
}

function decode(str) {
  let newStr = '';
  for (let index in str) {
    if (str[index] === '1') {
      newStr += 'a';
    } else if (str[index] === '2') {
      newStr += 'e';
    } else if (str[index] === '3') {
      newStr += 'i';
    } else if (str[index] === '4') {
      newStr += 'o';
    } else if (str[index] === '5') {
      newStr += 'u';
    } else {
      newStr += str[index];
    }
  }
  return newStr;
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
