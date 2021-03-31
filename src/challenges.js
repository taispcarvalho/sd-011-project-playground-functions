// Desafio 1
function compareTrue(valorA, valorB) {
  return valorA && valorB;
}
//    [Chamada] Desafio 1
console.log(compareTrue(true, 0));

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3

function splitSentence(string) {
  let i = '["';
  for (let index of string){
    if (index !== " ") {
    i += index;
    } else {
    i += '", "';
    }
  }
  i+= '"]'
  return i;
}

console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName() {
  // seu código aqui
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
