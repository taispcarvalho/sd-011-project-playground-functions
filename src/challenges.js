// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(array) {
  return array.split(' ');
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
function highestCount(array) {
  let highest = array[0];
  let count = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highest) {
      highest = array[index];
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highest) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) return 'cat1';
  if (Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse)) return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) array[index] = 'fizzBuzz';
    else if (array[index] % 3 === 0) array[index] = 'fizz';
    else if (array[index] % 5 === 0) array[index] = 'buzz';
    else array[index] = 'bug!';
  }
  return array;
}

// Desafio 9
function encode(string) {
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case 'a': string[index] = '1'; break;
    case 'e': string[index] = '2'; break;
    case 'i': string[index] = '3'; break;
    case 'o': string[index] = '4'; break;
    case 'u': string[index] = '5'; break;
    default: break;
    }
  }
  return string;
}

function decode(string) {
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case '1': string[index] = 'a'; break;
    case '2': string[index] = 'e'; break;
    case '3': string[index] = 'i'; break;
    case '4': string[index] = 'o'; break;
    case '5': string[index] = 'u'; break;
    default: break;
    }
  }
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
