// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
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
  let string = '';
  return string.concat(array[array.length - 1], ', ', array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let frequencyOfBigger = 1; let bigger = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > bigger) {
      frequencyOfBigger = 1;
      bigger = array[index];
    } else if (array[index] === bigger) {
      frequencyOfBigger += 1;
    }
  }
  return frequencyOfBigger;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let whichCatWins = '';
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    whichCatWins = 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    whichCatWins = 'cat1';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    whichCatWins = 'os gatos trombam e o rato foge';
  }
  return whichCatWins;
}

// Desafio 8
function fizzBuzzSecond(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 0 || array[index] < 0)
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      array[index] = 'bug!';
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    }
  }
  return array;
}

function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    }
  }
  array = fizzBuzzSecond(array);
  return array;
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
