// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === bool2 && bool2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  if (base && height > 0) {
    let result = (base * height) / 2;
    return result;
  }

  return 'Insira valores maiores que zero!';
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let lastFirst = '';
  let first = array[0];
  let last = array[array.length - 1];
  lastFirst = `${last}, ${first}`; // O mesmo que dizer last + ',' + first;
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(aNumbers) {
  let majorNumber = [];
  let score = 0;
  let sequence = aNumbers.sort();
  majorNumber = sequence[aNumbers.length - 1];
  for (let index in aNumbers) {
    if (aNumbers[index] === majorNumber) {
      score += 1;
    }
  }

  return score;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }

  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }

  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(nArray) {
  let result = [];
  for (let index = 0; index < nArray.length; index += 1) {
    if (nArray[index] % 3 === 0 && nArray[index] % 5 !== 0) {
      result.push('fizz');
    }

    if (nArray[index] % 5 === 0 && nArray[index] % 3 !== 0) {
      result.push('buzz');
    }

    if (nArray[index] % 15 === 0) {
      result.push('fizzBuzz');
    }

    if (nArray[index] % 3 !== 0 && nArray[index] % 5 !== 0) {
      result.push('bug!');
    }
  }

  return result;
}

// Desafio 9
function encode(phrase) {
  for (let index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replace('a', '1');
    phrase = phrase.replace('e', '2');
    phrase = phrase.replace('i', '3');
    phrase = phrase.replace('o', '4');
    phrase = phrase.replace('u', '5');
  }

  return phrase;
}

function decode(phrase) {
  for (let index = 0; index < phrase.length; index += 1) {
    phrase = phrase.replace('1', 'a');
    phrase = phrase.replace('2', 'e');
    phrase = phrase.replace('3', 'i');
    phrase = phrase.replace('4', 'o');
    phrase = phrase.replace('5', 'u');
  }

  return phrase;
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
