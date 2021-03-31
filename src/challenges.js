// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayOfStrings) {
  let lastCommaFirst = '';
  for (let index = ((arrayOfStrings.length) - 1); index >= 0; index -= 1) {
    if (index === ((arrayOfStrings.length) - 1)) {
      lastCommaFirst += arrayOfStrings[index];
      lastCommaFirst += ', ';
    } else if (index === 0) {
      lastCommaFirst += arrayOfStrings[index];
    }
  }
  return lastCommaFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins + ties);
}

// Desafio 6
function countRepetition(value, arrayOfNumbers) {
  let count = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (value === arrayOfNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

function verifyHighest(arrayOfNumbers) {
  let max = arrayOfNumbers.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return max;
}

function highestCount(arrayOfNumbers) {
  return countRepetition(verifyHighest(arrayOfNumbers), arrayOfNumbers);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 0;
}

// Desafio 8

function fizzBuzz(arrayOfNumbers) {
  return arrayOfNumbers.map((number) => {
    if (number % 3 === 0) {
      if (number % 5 !== 0) {
        return 'fizz';
      }
      return 'fizzBuzz';
    }
    if (number % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode(string) {
  return string.replaceAll('a', 1)
    .replaceAll('e', 2)
    .replaceAll('i', 3)
    .replaceAll('o', 4)
    .replaceAll('u', 5);
}

function decode(string) {
  return string.replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
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
