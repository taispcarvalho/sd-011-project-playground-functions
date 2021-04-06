//Desafio1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split (" ");
}

// Desafio 4
function concatName(array) {
  let novoArray = "";
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (i === array.length - 1) {
      novoArray = novoArray + array[i] + ", ";
    }
    if (i === 0) {
      novoArray = novoArray + array[i];
    }
  }
  return novoArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  for (let i = 1; i <= wins; i += 1) {
    pontos += 3;
  }
  for (let j = 1; j <= ties; j += 1) {
    pontos += 1;
  }
  return pontos;
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
