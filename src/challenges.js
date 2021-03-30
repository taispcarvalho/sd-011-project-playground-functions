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
  let delta1 = Math.abs(cat1 - mouse);
  let delta2 = Math.abs(cat2 - mouse);
  let result = '';

  if (delta1 > delta2) {
    result = 'cat2';
  } else if (delta1 < delta2) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }

  return result;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let newArray = [];

  for (let number of arrayNumbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      newArray.push('fizz');
    } else if(number % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }

  return newArray;
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
