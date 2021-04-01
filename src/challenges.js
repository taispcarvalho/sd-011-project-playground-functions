// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(a, b) {
  return (a * b) / 2;
}

// Desafio 3
function splitSentence(name) {
  return name.split(' ');
}

// Desafio 4
function concatName(firstArray) {
  return `${firstArray[firstArray.length - 1]}, ${firstArray[0]}`;
}

// Desafio 5
function footballPoints(w, t) {
  return (w * 3) + t;
}

// Desafio 6
function findHighestNumber(arrNum) {
  let highest = arrNum[0];
  for (let i = 0; i < arrNum; i += 1) {
    if (arrNum[i] > highest) {
      highest = arrNum[i];
    }
  }
  return highest;
}

function highestCount(arrNum) {
  let counter = 0;
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] === findHighestNumber(arrNum)) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayOfNumber) {
  let outputArray = [];
  for (let index in arrayOfNumber) {
    if (arrayOfNumber[index] % 3 === 0 && arrayOfNumber[index] % 5 === 0) {
      outputArray.push('fizzBuzz');
    } else if (arrayOfNumber[index] % 3 === 0) {
      outputArray.push('fizz');
    } else if (arrayOfNumber[index] % 5 === 0) {
      outputArray.push('buzz');
    } else {
      outputArray.push('bug!');
    }
  }
  return outputArray;
}

// Desafio 9
function encode(str) {
  str = str.split('');
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === 'a') str[index] = '1';
    if (str[index] === 'e') str[index] = '2';
    if (str[index] === 'i') str[index] = '3';
    if (str[index] === 'o') str[index] = '4';
    if (str[index] === 'u') str[index] = '5';
  }
  return str.join('');
}

function decode(str) {
  str = str.split('');
  for (let key = 0; key < str.length; key += 1) {
    if (str[key] === '1') str[key] = 'a';
    if (str[key] === '2') str[key] = 'e';
    if (str[key] === '3') str[key] = 'i';
    if (str[key] === '4') str[key] = 'o';
    if (str[key] === '5') str[key] = 'u';
  }
  return str.join('');
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
