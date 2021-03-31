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
  if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  }

  if (cat1 - mouse > cat2 - mouse) {
    return 'cat2';
  }

  if (cat1 - mouse === cat2 - mouse) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(2, 8, 8));

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
