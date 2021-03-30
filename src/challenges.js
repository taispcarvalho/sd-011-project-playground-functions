/* eslint-disable no-else-return */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-unused-vars */
// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  array = [array[array.length - 1], array[0]];
  array = array.join(', ');
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = wins * 3 + ties * 1;
  return score;
}

// Desafio 6
function biggestNumber(array) {
  let bigNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (bigNumber < array[i]) {
      bigNumber = array[i];
    }
  }
  return bigNumber;
}

function highestCount(array) {
  let counter = 0;
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === biggestNumber(array)) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } else if (cat2 - mouse < cat1 - mouse) {
    return 'cat2';
  } else if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8

function Div(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzBuzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else if (n % 5 === 0) {
    return 'buzz';
  } else {
    return 'bug!';
  }
}

function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = Div(array[i]);
  }
  return array;
}

// Desafio 9

function Enc(n) {
  let alphabet = ['a', 'e', 'i', 'o', 'u'];
  let numerals = [1, 2, 3, 4, 5];
  for (let i = 0; i < alphabet.length; i += 1) {
    if (n === alphabet[i]) {
      n = numerals[i];
    }
  }
  return n;
}
function Denc(x) {
  if (Number(x)) {
    let n = Number(x);
    const numerals = [1, 2, 3, 4, 5];
    const alphabet = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < numerals.length; i += 1) {
      if (n === numerals[i]) {
        n = alphabet[i];
      }
    }
    return n;
  }
  return x;
}

function encode(array) {
  array = array.split('');
  for (let i = 0; i < array.length; i += 1) {
    array[i] = Enc(array[i]);
  }
  array = array.join('');
  return array;
}

function decode(phrase) {
  let string = phrase.split('');
  for (let i = 0; i < string.length; i += 1) {
    string[i] = Denc(string[i]);
  }
  string = string.join('');
  return string;
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
