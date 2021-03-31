// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(names) {
  let stringNames = names[names.length - 1];
  stringNames += ', ';
  stringNames += names[0];
  return stringNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = 0;
  score += wins * 3;
  score += ties * 1;
  return score;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let ordNumbers = arrayNumbers.sort((a, b) => a - b);
  let bigNumber = ordNumbers[ordNumbers.length - 1];
  let numberRepeat = 0;
  for (let index = 0; index < ordNumbers.length; index += 1) {
    if (ordNumbers[index] === bigNumber) {
      numberRepeat += 1;
    }
  }
  return numberRepeat;
}
// A arrow function para realizar a ordenação dos números foi retirada de "https://www.digitalocean.com/community/tutorials/js-array-sort-numbers"

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catMouse1 = Math.abs(mouse - cat1);
  let catMouse2 = Math.abs(mouse - cat2);
  if (catMouse1 === catMouse2) {
    return 'os gatos trombam e o rato foge';
  }
  if (mouse - cat1 > mouse - cat2) {
    return 'cat 1';
  } if (mouse - cat1 < mouse - cat2) {
    return 'cat 2';
  }
}

// Não esta retornando o result como string

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
