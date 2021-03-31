// Desafio 1
function compareTrue(firstBool, secondBool) {
  return firstBool && secondBool;
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
function concatName(stringArray) {
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function getHighestNumber(numberArray) {
  let highestNumber = numberArray[0];

  for (let number of numberArray) {
    if (number > highestNumber) highestNumber = number;
  }

  return highestNumber;
}

function highestCount(numberArray) {
  let highest = getHighestNumber(numberArray);
  let count = 0;

  for (let number of numberArray) {
    if (number === highest) count += 1;
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCatDistance = Math.abs(mouse - cat1);
  let secondCatDistance = Math.abs(mouse - cat2);

  if (firstCatDistance === secondCatDistance) return 'os gatos trombam e o rato foge';

  return firstCatDistance < secondCatDistance ? 'cat1' : 'cat2';
}

// Desafio 8
function getFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return 'bug!';
}

function fizzBuzz(numberArray) {
  let result = [];

  for (let number of numberArray) {
    result.push(getFizzBuzz(number));
  }

  return result;
}

// Desafio 9
function encode(string) {
  let charactersArray = string.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let decodedArray = [];

  for (let character of charactersArray) {
    if (vowels.indexOf(character) >= 0) decodedArray.push(vowels.indexOf(character) + 1);
    else decodedArray.push(character);
  }

  return decodedArray.join('');
}

function decode(decodedString) {
  let decodedArray = decodedString.split('');
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let charactersArray = [];

  for (let character of decodedArray) {
    if (Object.keys(vowels).indexOf(character) >= 0) charactersArray.push(vowels[character]);
    else charactersArray.push(character);
  }

  return charactersArray.join('');
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
