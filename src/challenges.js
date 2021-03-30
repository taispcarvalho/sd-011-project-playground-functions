// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

let triangulo = calcArea(5, 2);
console.log(triangulo);

// Desafio 3
function splitSentence(src) {
  return src.split(' ');
}

let sloganTrybe = 'go Trybe';
console.log(splitSentence(sloganTrybe));

// Desafio 4
function concatName(arraySrc) {
  return arraySrc[arraySrc.length - 1] + ', ' + arraySrc['0'];
}

let arrayConcat = ['Ivaldo', 'Costa', 'Souza'];
console.log(concatName(arrayConcat));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(0, 0));

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
