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
  let encripted = '';
  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
    case 'a': encripted = `${encripted}1`;
      break;
    case 'e': encripted = `${encripted}2`;
      break;
    case 'i': encripted = `${encripted}3`;
      break;
    case 'o': encripted = `${encripted}4`;
      break;
    case 'u': encripted = `${encripted}5`;
      break;
    default: encripted = `${encripted}${str[index]}`;
    }
  }
  return encripted;
}

function decode(str) {
  let decripted = '';
  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
    case '1': decripted = `${decripted}a`;
      break;
    case '2': decripted = `${decripted}e`;
      break;
    case '3': decripted = `${decripted}i`;
      break;
    case '4': decripted = `${decripted}o`;
      break;
    case '5': decripted = `${decripted}u`;
      break;
    default: decripted = `${decripted}${str[index]}`;
    }
  }
  return decripted;
}
console.log(decode('h3 th2r2'));

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
