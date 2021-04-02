// Desafio 1
function compareTrue(condicao1, condicao2) {
  if (condicao1 && condicao2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let resultado = base * height;
  return resultado / 2;
}
// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let fullName = `${[array.length - 1]}, ${array[0]}`;
  return fullName;
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
