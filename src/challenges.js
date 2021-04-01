// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}
// desafio 3 resolvido com base neste linked
// https://tutorial.eyehunts.com/js/javascript-split-string-based-delimiter-comma-space/

// Desafio 4
function concatName(strArray) {
  return `${strArray[strArray.length - 1]}, ${strArray[0]}`;
}
// solution based on https://eslint.org/docs/rules/prefer-template

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// part of Desafio 6
function higherNumber(valueArray) {
  let highNumber = 0;
  for (let value in valueArray) {
    if (valueArray[value] > highNumber) highNumber = valueArray[value];
  }
  return highNumber;
}

// part of Desafio 6
function repeatCount(number, valueArray) {
  let repeatTime = 0;
  for (let value of valueArray) {
    if (value === number) repeatTime += 1;
  }
  return repeatTime;
}

// Desafio 6
function highestCount(valueArray) {
  return repeatCount(higherNumber(valueArray), valueArray);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceBetweenCat1 = Math.abs(mouse - cat1);
  let distanceBetweenCat2 = Math.abs(mouse - cat2);

  if (distanceBetweenCat1 > distanceBetweenCat2) {
    return 'cat2';
  }
  if (distanceBetweenCat1 < distanceBetweenCat2) {
    return 'cat1';
  }
  if (distanceBetweenCat1 === distanceBetweenCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// part of Desafio 8
function testFizzBuzz(number) {
  let temporaryHolder = '';

  if (number % 3 === 0) {
    temporaryHolder = 'fizz';
  } else {
    temporaryHolder = 'bug!';
  }
  if (number % 5 === 0) {
    temporaryHolder = 'buzz';
  }
  if (number % 3 === 0 && number % 5 === 0) {
    temporaryHolder = 'fizzBuzz';
  }
  return temporaryHolder;
}

// Desafio 8
function fizzBuzz(numArray) {
  let responseArray = [];

  for (let number of numArray) {
    responseArray.push(testFizzBuzz(number));
  }
  return responseArray;
}

// part of Desafio 9
function encrypt(tempString, keyValue) {
  for (let index = 0; index < tempString.length; index += 1) {
    for (let letter in keyValue) {
      if (tempString[index] === letter) tempString[index] = keyValue[letter];
    }
  }
  return tempString.join('');
}

// Desafio 9
function encode(string) {
  let keyValue = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let tempString = string.split('');

  return encrypt(tempString, keyValue);
}

// part of Desafio 9
function decrypt(tempString, keyValue) {
  for (let index = 0; index < tempString.length; index += 1) {
    for (let letter in keyValue) {
      if (tempString[index] === keyValue[letter]) tempString[index] = letter;
    }
  }
  return tempString.join('');
}

// Desafio 9
function decode(string) {
  let keyValue = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let tempString = string.split('');

  return decrypt(tempString, keyValue);
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
