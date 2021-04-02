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
//  link utilizado: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(arr) {
  return arr.split(' ');
}

//  Link sobre templates string que foram utilizados neste exercicio: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
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
//  link sobre Math.max(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
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
//  Foi usada a propriedade Math.abs neste exercicio onde ele retorna o valor absoluto do que está dentro dos parenteses dele.
//  segue o link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return distanceCat1 < distanceCat2 ? 'cat1' : 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 === 0) {
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
// link sobre o metodo replace utilizado neste exercicio: https://www.w3schools.com/jsref/jsref_replace.asp
function encode(str) {
  let replaced = str.replace(/a/g, 1);
  replaced = replaced.replace(/e/g, 2);
  replaced = replaced.replace(/i/g, 3);
  replaced = replaced.replace(/o/g, 4);
  replaced = replaced.replace(/u/g, 5);
  return replaced;
}

function decode(str) {
  let replaced = str.replace(/1/g, 'a');
  replaced = replaced.replace(/2/g, 'e');
  replaced = replaced.replace(/3/g, 'i');
  replaced = replaced.replace(/4/g, 'o');
  replaced = replaced.replace(/5/g, 'u');
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
