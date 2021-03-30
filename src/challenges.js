// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let stringsArray = sentence.split(' ');

  return stringsArray;
}

// Desafio 4
function concatName(stringsArray) {
  let concatenatedString = `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;

  return concatenatedString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);

  return totalPoints;
}

// Desafio 6
function highestValueNumber(numbers) {
  let highestValue = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highestValue) {
      highestValue = numbers[index];
    }
  }

  return highestValue;
}

function highestCount(numbers) {
  let count = 0;

  for (let number of numbers) {
    if (number === highestValueNumber(numbers)) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let delta1 = cat1 - mouse;
  let delta2 = cat2 - mouse;

  if (delta1 > delta2) {
    return 'cat2';
  } else if (delta1 < delta2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
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
