// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let multiply = base * height;
  let result = multiply / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];
  let result = last.concat(', ', first);
  return result;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let resultWins = wins * 3;
  return resultWins + ties;
}

// Desafio 6
function getHighNumber(array) {
  let bigNumber = 0;
  for (let index in array) {
    if (array[index] > bigNumber) {
      bigNumber = array[index];
    }
  }
  return bigNumber;
}

function getNumberOfOcurrences(array, number) {
  let counter = 0;
  for (let index in array) {
    if (array[index] === number) {
      counter += 1;
    }
  }
  return counter;
}

function highestCount(array) {
  let highNumber = getHighNumber(array);
  let result = getNumberOfOcurrences(array, highNumber);
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaDoMouseParaCat1 = Math.abs(mouse - cat1);
  let distanciaDoMouseParaCat2 = Math.abs(mouse - cat2);
  if (distanciaDoMouseParaCat1 < distanciaDoMouseParaCat2) {
    return 'cat1';
  }
  if (distanciaDoMouseParaCat2 < distanciaDoMouseParaCat1) {
   return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 ===0) {
      result.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
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
