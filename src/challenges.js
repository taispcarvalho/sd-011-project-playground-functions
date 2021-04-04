// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, hight) {
  return (base * hight) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let word = [];
  word = sentence.split(' ');
  return word;
}

// Desafio 4
function concatName(param) {
  let names = String;
  names = `${param[param.length - 1]} , ${param[0]}`;
  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(higherNumber) {
  let number = Math.max(...higherNumber);
  let score = 0;
  for (let index = 0; index < higherNumber.length; index += 1) {
    if (number === higherNumber[index]) {
      score += 1;
    }
  }
  return score;
}

// Desafio 7
function catAndMouse(mouse, gat1, gat2) {
  if (Math.abs(mouse - gat1) < Math.abs(mouse - gat2)) {
    return 'gat1';
  } if (Math.abs(mouse - gat1) > Math.abs(mouse - gat2)) {
    return 'gat2';
  } return 'os gatos trombam e o rato foge';
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
