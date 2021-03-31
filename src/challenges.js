// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
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

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']);
console.log(fizzBuzz([7, 9]));
console.log(['bug!', 'fizz']);
console.log(fizzBuzz([9, 25]));
console.log(['fizz', 'buzz']);

// Desafio 9
function encode(string) {
  let tempString = '';
  let letterEncodeValue = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  };

  for (let index = 0; index < string.length - 1; index += 1) {
    tempString += string[index];
    console.log(letterEncodeValue.a);
    for (let letter in letterEncodeValue) {
      if (string[index] === letter) {
        tempString[index] = letterEncodeValue[letter];
      }
    }
  }
  return tempString;
}

console.log(encode('hi there!'));

// Desafio 9
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
