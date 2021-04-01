// Desafio 1
function compareTrue(valorA, valorB) {
  return valorA && valorB;
}
//    [Chamada] Desafio 1
console.log(compareTrue(true, 0));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' '); // Stackoverflow: https://pt.stackoverflow.com/questions/204346/como-pegar-uma-palavra-dentro-de-uma-string-frase-em-node-js
}
console.log(splitSentence('oi tudo bem'));
// Desafio 4
function concatName(array) {
  let [u, p] = [array[array.length - 1], array[0]]; // Destructure Assignment: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#trocando_vari%C3%A1veis
  return `${u}, ${p}`; // ES6 template literals: https://stackoverflow.com/questions/46858840/unexpected-string-concatenation
}

// Desafio 5
function footballPoints(wins, ties) {
  let p = 0;
  p += wins * 3;
  p += ties * 1;
  return p;
}

// Desafio 6

function highestNumber(array) {
  let h = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[i + 1] && array[i] > h) {
      h = array[i];
    } 
  }
  return h;
}

function highestCount(array) {
  let c = 0;
  let h = highestNumber(array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === h) {
      c += 1;
    }
  }
  return c;
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
