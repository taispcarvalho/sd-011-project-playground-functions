// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(frase) {
  // seu código aqui
  let space = ', ';
  return frase[frase.length - 1] + space + frase[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrNum) {
  // seu código aqui
  let qtdMaxNum = 0;
  let maxNum = 0;

  for (let index = 0; index < arrNum.length; index += 1) {
    maxNum = Math.max(...arrNum);
  }

  for (let index2 = 0; index2 < arrNum.length; index2 += 1) {
    if (maxNum === arrNum[index2]) {
      qtdMaxNum += 1;
    }
  }

  return qtdMaxNum;
}

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
