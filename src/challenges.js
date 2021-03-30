// Desafio 1
function compareTrue(a, b) {
  let value1 = a;
  let value2 = b;
  return a && b;
}

// Desafio 2
function calcArea(a, b) {
  let base = a;
  let heigth = b;
  return a * b / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(strings) {
  let firstString = strings[0];
  let lastString = strings[strings.length - 1];
  return lastString + ', ' + firstString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let highestNumber = 0;
  for (let index of numeros) {
    if (index > highestNumber) {
      highestNumber = index;
    }  
  }
let counter = 0;
for (let index2 in numeros) {
  if (numeros[index2] === highestNumber) {
    counter += 1;
    }
  }
  return counter;
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
