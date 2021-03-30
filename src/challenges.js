// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  return areaDoTriangulo = ([base * height] / 2);
}
calcArea(10, 50);

// Desafio 3
function splitSentence(frase) {
  resultado = frase.split(' ');
  return resultado;
}
splitSentence('go Trybe');

// Desafio 4
function concatName() {
  // seu código aqui
}
concatName();

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3 + ties * 1);
  return pontos;
}
footballPoints(1, 2);

// Desafio 6
let numeroMaior = 0;
function maiorNumero(numeros) {
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > numeroMaior) {
      numeroMaior = numeros[index];
    }
  }
};
maiorNumero([9, 1, 2, 3, 9, 5, 7]);
return numeroMaior;

let vezes = 0;
function highestCount(listaNumeros) {
  for (indexLista = 0; indexLista < numeroMaior; indexLista += 1) {
    if (listaNumeros[indexLista] === numeroMaior) {
      vezes += 1;
    }
  }
};
highestCount([9, 1, 2, 3, 9, 5, 7]);
return vezes;


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
