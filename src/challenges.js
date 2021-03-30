// Desafio 1
function compareTrue(valorA, valorB) {
  return valorA && valorB;
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
function concatName(arrayStrings) {
  let lastIndex = arrayStrings.length - 1;
  let lastFirst = `${arrayStrings[lastIndex]}, ${arrayStrings[0]}`;
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6

function findHigherValue(numbers) {
  let higher = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= higher) {
      higher = numbers[index];
    }
  }
  return higher;
}

function highestCount(numbers) {
  let repetitions = 0;
  let higherValue = findHigherValue(numbers);
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherValue) {
      repetitions += 1;
    }
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;
  if (Math.abs(cat1Distance) === Math.abs(cat2Distance)) {
    return 'os gatos trombam e o rato foge';
  }
  return Math.abs(cat1Distance) < Math.abs(cat2Distance) ? 'cat1' : 'cat2';
}

// Desafio 8

function checkFizzOrBuzz(num) {
  let isDivisibleBy3 = num % 3 === 0;
  let isDivisibleBy5 = num % 5 === 0;

  if (isDivisibleBy3) {
    return 'fizz';
  }
  if (isDivisibleBy5) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let numbersFizzBuzz = [];
  for (let num of numbers) {
    if (num % 3 === 0 && num % 5 === 0) {
      numbersFizzBuzz.push('fizzBuzz');
    } else {
      numbersFizzBuzz.push(checkFizzOrBuzz(num));
    }
  }
  return numbersFizzBuzz;
}

// Desafio 9
function switchLetterNumber(char, code) {
  if (char !== null) {
    for (let key in code) {
      if (char === key) {
        return code[key];
      }
    }
  }
  return char;
}

function encode(string) {
  let coding = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  }
  let codedString = '';
  for (let index = 0; index < string.length; index += 1) {
    codedString += switchLetterNumber(string[index], coding);
  }
  return codedString;
}

function decode(string) {
  let decoding = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  let decodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    decodedString += switchLetterNumber(string[index], decoding);
  }
  return decodedString;
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
