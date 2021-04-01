// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2
}
console.log(compareTrue(true, false))
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  return base * height /2
}
console.log(calcArea(10, 50))
console.log(calcArea(5, 2))
console.log(calcArea(51, 1))

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
console.log(splitSentence('go trybe'))
console.log(splitSentence('vamo que vamo'))
console.log(splitSentence('foguete'))

// Desafio 4
function concatName(concat) {
  return concat[concat.length -1] + ', ' + concat[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}
console.log(footballPoints(14, 8))
console.log(footballPoints(1, 2))
console.log(footballPoints(0, 0))


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
