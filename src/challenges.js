/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(valorA, valorB) {
  if (valorA && valorB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(lista) {
  return `${lista[lista.length - 1]}, ${lista[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(listaDeNumeros) {
  let maiorNumero = 0;
  let contador = 0;
  for (let numeroAtual of listaDeNumeros) {
    console.log(numeroAtual);
    if (numeroAtual > maiorNumero) {
      maiorNumero = numeroAtual;
    }
  }
  for (let numeroAtual of listaDeNumeros) {
    if (numeroAtual === maiorNumero) {
      contador += 1;
    }
  }
  return (contador);
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
