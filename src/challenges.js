// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
let desafio1 = compareTrue(true, true);
console.log(desafio1);

// Desafio 2
function calcArea(base, height) {
  let step1 = base * height;
  let step2 = step1 / 2;
  return step2;
}
let desafio2 = calcArea(5, 10);
console.log(desafio2);

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}
let desafio3 = splitSentence('go trybe');
console.log(desafio3);

// Desafio 4
function concatName(listaDeNomes) {
  for (let i of listaDeNomes) {
    return listaDeNomes[listaDeNomes.length - 1] + ', ' + listaDeNomes[0];
  }
}
let desafio4 = concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
console.log(desafio4);

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins > 0 && ties > 0) {
    points = wins * 3 + ties;
  }
  return points;
}
let desafio5 = footballPoints(0, 0);
console.log(desafio5);

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
