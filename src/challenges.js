// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
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
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highest(array) {
  let maior = 0;
  for (let i in array) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

function highestCount(array) {
  let counter = 0;
  for (let i in array) {
    if (array[i] === highest(array)) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  let output;
  if (dist1 < dist2) {
    output = 'cat1';
  } else if (dist2 < dist1) {
    output = 'cat2';
  } else {
    output = 'os gatos trombam e o rato foge';
  }
  return output;
}

// Desafio 8
function writeText(number) {
  let text = 'bug!';
  if (number % 15 === 0) {
    text = 'fizzBuzz';
  } else if (number % 3 === 0) {
    text = 'fizz';
  } else if (number % 5 === 0) {
    text = 'buzz';
  }
  return text;
}

function fizzBuzz(array) {
  let output = [];
  for (let n in array) {
    output.push(writeText(array[n]));
  }
  return output;
}

// Desafio 9
function letterForNumber(letter) {
  let number = letter;
  if (letter === 'a') {
    number = '1';
  } else if (letter === 'e') {
    number = '2';
  } else if (letter === 'i') {
    number = '3';
  } else if (letter === 'o') {
    number = '4';
  } else if (letter === 'u') {
    number = '5';
  }
  return number;
}

function encode(array) {
  let output = [];
  for (let n in array) {
    output.push(letterForNumber(array[n]));
  }
  return output.join('');
}

function numberForLetter(number) {
  let letter = number;
  if (number === '1') {
    letter = 'a';
  } else if (number === '2') {
    letter = 'e';
  } else if (number === '3') {
    letter = 'i';
  } else if (number === '4') {
    letter = 'o';
  } else if (number === '5') {
    letter = 'u';
  }
  return letter;
}

function decode(array) {
  let output = [];
  for (let n in array) {
    output.push(numberForLetter(array[n]));
  }
  return output.join('');
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
