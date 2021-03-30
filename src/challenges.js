// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  if (base > 0 && height > 0) {
    return (base * height) / 2;
  }
  return 'erro';
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string) {
  let results = [string[string.length - 1], string[0]];
  return results.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacaoWins = 0;
  let pontuacaoTies = 0;
  pontuacaoWins = wins * 3;
  pontuacaoTies = ties * 1;
  return pontuacaoWins + pontuacaoTies;
}

// Desafio 6 - voltar para refatorar
function highestNumber(array) {
  let max = 0;
  for (let i in array) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function highestCount(array) {
  let max = highestNumber(array);
  let repeatCount = 0;
  for (let i in array) {
    if (array[i] === max) {
      repeatCount += 1;
    }
  }
  return repeatCount;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
