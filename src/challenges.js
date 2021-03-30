// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  let split = text.split(' ');
  return split;
}
/* source:https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string. */

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  let finalConcat = `${lastItem}, ${firstItem}`;
  return finalConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = Math.max(...array);

  return array.filter((v) => (v === highestNumber)).length;
}
/* https://www.javaer101.com/pt/article/2119791.html */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let c1 = 'cat1';
  let c2 = 'cat2';
  let distanceC1 = cat1 - mouse;
  let distanceC2 = cat2 - mouse;
  let mra = 'os gatos trombam e o rato foge';
  if (distanceC1 < 0) {
    distanceC1 *= -1;
  } if (distanceC2 < 0) {
    distanceC2 *= -1;
  } if (distanceC1 < distanceC2) {
    return c1;
  } if (distanceC2 < distanceC1) {
    return c2;
  } if (distanceC1 === distanceC2) {
    return mra;
  }
}

// Desafio 8
function fizzBuzz(array) {
  let finalArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      finalArray.push('fizz');
    } if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      finalArray.push('buzz');
    } if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      finalArray.push('fizzBuzz');
    } else {
      finalArray.push('bug!');
    }
  }
  return finalArray;
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
