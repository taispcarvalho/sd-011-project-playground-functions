// Desafio 1
//  && só é verdadeiro caso todos param sejam verdadeiros
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
//  O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método, o padrao na função foi (' '), significa que a cada espaço ' ' ele vai dividir uma string.
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
//  Math.max retorna o maior numero, e os 3 dots significa que pode vir mais de um argumento, ou seja um array.
function highestCount(arr) {
  let highestNumberInArray = Math.max(...arr);
  let timesRepeat = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === highestNumberInArray) {
      timesRepeat += 1;
    }
  }
  return timesRepeat;
}

// Desafio 7
function catAndMouse() {}

// Desafio 8
function fizzBuzz(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      finalArray.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      finalArray.push('fizz');
    } else if (array[i] % 5 === 0) {
      finalArray.push('buzz');
    } else {
      finalArray.push('bug!');
    }
  }
  return finalArray;
}

// Desafio 9
function encode(str) {
  let letras = ['a', 'e', 'i', 'o', 'u'];
  let numbers = [1, 2, 3, 4, 5];
  let replaced = str;
  for (let i = 0; i < str.length; i += 1) {
    replaced = replaced.replace(/letras[i]/, numbers[i]);
  }
  return replaced;
}

function decode(str) {
  let letras = ['a', 'e', 'i', 'o', 'u'];
  let numbers = [1, 2, 3, 4, 5];
  let replaced = str;
  for (let i = 0; i < str.length; i += 1) {
    replaced = replaced.replace(/numbers[i]/, letras[i]);
  }
  return replaced;
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
