// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ',' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let contador = 0;
  let maiorindice = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorindice) {
      maiorindice = array[index];
    }
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2] === maiorindice) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 15 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[index] % 5 === 0) {
      result.push('buzz');
    } else if (numbers[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode() {
  // seu codigo aqui 
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
