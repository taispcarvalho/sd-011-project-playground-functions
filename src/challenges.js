// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(value1, value2) {
  let base = value1;
  let height = value2;
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1];
  let firstItem = array[0];
  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = (3 * wins) + ties;
  return points;
}

// Desafio 6

function findHighest(array) {
  let highest = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (highest < array[index]) {
      highest = array[index];
    }
  }
  return highest;
}

function counterHighest(highest, array) {
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (highest === array[index]) {
      counter += 1;
    }
  }
  return counter;
}

function highestCount(array) {
  return counterHighest(findHighest(array), array);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);
  let message = 'os gatos trombam e o rato foge';

  if (distance1 > distance2) {
    return 'cat2';
  }

  if (distance1 < distance2) {
    return 'cat1';
  }

  if (distance1 === distance2) {
    return message;
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
