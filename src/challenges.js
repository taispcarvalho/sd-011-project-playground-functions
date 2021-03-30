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
  let lastFirst = arrayStrings[lastIndex] + ', ' + arrayStrings[0];
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
  } else {
    return Math.abs(cat1Distance) < Math.abs(cat2Distance) ? 'cat1' : 'cat2';
  }
}

// Desafio 8

function checkFizzBuzzType(num) {
  let isDivisibleBy3 = num % 3 === 0;
  let isDivisibleBy5 = num % 5 === 0;

  if (isDivisibleBy3 && isDivisibleBy5) {
    return 'fizzBuzz';
  } else if (isDivisibleBy3) {
    return 'fizz';
  } else if (isDivisibleBy5) {
    return 'buzz';
  } else {
    return 'bug!'
  }
}

function fizzBuzz(numbers) {
  let numbersFizzBuzz = [];
  for (let num of numbers) {
    numbersFizzBuzz.push(checkFizzBuzzType(num));
  }
  return numbersFizzBuzz;
}

// Desafio 9
function encode() {
  // seu código aqui
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
