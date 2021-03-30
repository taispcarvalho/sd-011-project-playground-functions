// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
// let param1 = 'josan johnata'
function splitSentence(param1) {
  return param1.split(' ');
}
// console.log(splitSentence(param1));

// Desafio 4
function concatName(param1) {
  return param1[param1.length -1] + ', ' + param1[0];
}
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1
}

// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  for (let index of array) {
    if (index > highestNumber) {
      highestNumber = index;
    }
  }
  let counter = 0;
  for (let index2 in array) {
    if (array[index2] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat1 > distCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  for (let index =0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      arrayNumbers[index] = 'fizzBuzz';
    } else if (arrayNumbers[index] % 3 === 0) {
      arrayNumbers[index] = 'fizz';
    } else if (arrayNumbers[index] % 5 === 0) {
      arrayNumbers[index] = 'buzz';
    } else {
      arrayNumbers[index] = 'bug!';
    }
  }
  return arrayNumbers;
}

// Desafio 9
function encode(stringEncode) {
  for (let index = 0; index < stringEncode.length; index += 1) {
    switch (stringEncode[index]) {
      case 'a ':
        stringEncode = stringEncode.replace('a','1');
        break;
      case 'e':
        stringEncode = stringEncode.replace('e', '2');
        break;
      case 'i':
        stringEncode = stringEncode.replace('i','3');
        break;
      case 'o':
        stringEncode = stringEncode.replace('o','4');
        break;
      case 'u':
        stringEncode = stringEncode.replace('u','5');
        break;
      default:
        break;
    }
  }
  return stringEncode;
}
function decode() {
  // seu código aqui
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
