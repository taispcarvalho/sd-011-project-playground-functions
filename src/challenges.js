// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence() {
  // let array = [];
}

// Desafio 4
function concatName(array) {
  let string = array[array.length - 1] + ', ' + array[0];
  return string; 
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let aux = array[0];
  let contador = 0;
  for (index = 1; index < array.length; index += 1) {
    if (aux < array[index]) {
      aux = array[index];
    }
  }
  for (index = 0; index  < array.length; index += 1) {
    if (aux === array[index]) {
      contador += 1;
    }
  }
  return contador;
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
