// Desafio 1
function compareTrue(a, b) {
  return a && b; //&& só é verdadeiro caso todos param sejam verdadeiros
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
//O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método, o padrao na função foi (' '), significa que a cada espaço ' ' ele vai dividir uma string.
function splitSentence(arr) {
  return arr.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(arr) {
  let highestNumberInArray = Math.max(...arr); //Math.max retorna o maior numero do array, e os 3 dots significa que pode vir mais de um argumento.
  let timesRepeat = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === highestNumberInArray) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
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
