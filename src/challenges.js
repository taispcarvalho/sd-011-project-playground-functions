// Desafio 1
function compareTrue(valorA, valorB) {
  return valorA && valorB; // Aula ao Vivo na Trybe
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' '); // string.split() (Stackoverflow): https://pt.stackoverflow.com/questions/204346/como-pegar-uma-palavra-dentro-de-uma-string-frase-em-node-js
}

// Desafio 4
function concatName(array) {
  let [u, p] = [array[array.length - 1], array[0]]; // Destructure Assignment (MDN): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#trocando_vari%C3%A1veis
  return `${u}, ${p}`; // ES6 template literals (Stackoverflow): https://stackoverflow.com/questions/46858840/unexpected-string-concatenation
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
function catAndMouse(mouse, cat1, cat2) {
  let cat1P = Math.abs(mouse - cat1); // Math.abs() (MDN): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let cat2P = Math.abs(mouse - cat2);
  let string;

  if (cat1P < cat2P) {
    string = 'cat1';
  } else if (cat2P < cat1P) {
    string = 'cat2';
  } else {
    string = 'os gatos trombam e o rato foge';
  }
  return string;
}

// Desafio 8

function fizzBuzz(array) {
  let answer = [];
  for (let i = 0; i < array.length; i += 1) {
    ((array[i] % 3 === 0 && array[i] % 5 !== 0) ? (answer[i] = 'fizz') : (array[i] % 5 === 0 && array[i] % 3 !== 0) ? (answer[i] = 'buzz') : (array[i] % 5 === 0 && array[i] % 3 === 0) ? (answer[i] = 'fizzBuzz') : (answer[i] = 'bug!'));
    }
  return answer;
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
