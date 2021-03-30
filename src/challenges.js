// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return value1 && value2;
  }
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavras = frase.split(" ");
  return palavras;
}

// Desafio 4
function concatName(itens) {
  // seu código aqui
  return {itens[itens.length-1], itens[0]};
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
