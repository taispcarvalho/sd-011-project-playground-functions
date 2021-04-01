// Desafio 1
function compareTrue(param01, param02) {
  return param01 && param02;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
// Usando Template strings
function concatName(namesArray) {
  return `${namesArray[namesArray.length - 1]}, ${namesArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(numArray) {
  let maxNumber = Math.max(...numArray);
  let count = 0;
  for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] === maxNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  let result;
  if (cat1Distance === cat2Distance) {
    result = 'os gatos trombam e o rato foge';
  } else if (cat1Distance < cat2Distance) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let resultArray = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if ((arrayNumbers[index] % 3 === 0) && arrayNumbers[index] % 5 === 0) {
      resultArray.push('fizzBuzz');
    } else if ((arrayNumbers[index] % 3 === 0)) {
      resultArray.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0) {
      resultArray.push('buzz');
    } else {
      resultArray.push('bug!');
    }
  }
  return resultArray;
}

// Desafio 9
function encode(encodeString) {
  for (let index = 0; index < encodeString.length; index += 1) {
    encodeString = encodeString.replace('a', 1);
    encodeString = encodeString.replace('e', 2);
    encodeString = encodeString.replace('i', 3);
    encodeString = encodeString.replace('o', 4);
    encodeString = encodeString.replace('u', 5);
  }
  return encodeString;
}

function decode(decodeString) {
  for (let index = 0; index < decodeString.length; index += 1) {
    decodeString = decodeString.replace(1, 'a');
    decodeString = decodeString.replace(2, 'e');
    decodeString = decodeString.replace(3, 'i');
    decodeString = decodeString.replace(4, 'o');
    decodeString = decodeString.replace(5, 'u');
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
