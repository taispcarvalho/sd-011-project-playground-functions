// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2 === true;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;

  return resultado;
}

// Desafio 3
function splitSentence(param1) {
  let resultado = param1.split(' ');
  return resultado;
}

// Desafio 4
function concatName(param1) {
  let firstName = param1[0];
  let lastName = param1[[param1.length - 1]];
  let espaco = ', ';
  let fullName = lastName + espaco + firstName;
  return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let points = 0;
  points = winsPoints + tiesPoints;
  return points;
}

// Desafio 6
function highestCount(param1) {
  let max = Math.max(...param1);
  let repetitions = 0;

  for (let index = 0; index < param1.length; index += 1) {
    if (param1[index] === max) {
      repetitions += 1;
    }
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[index] % 5 === 0) {
      resultado.push('buzz');
    }
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      resultado.push('bug!');
    }
  }
  return resultado;
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
