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

// Desafio 4
function concatName(array) {
  // let p;
  // let u;

  let [u, p] = [array[array.length-1], array[0]]; // Destructure Assignment: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#trocando_vari%C3%A1veis 
    return u + ', ' + p;
}

let test = ['Torquato', 'Madalena', 'Michel', 'Diego'];
console.log(concatName(test));


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
