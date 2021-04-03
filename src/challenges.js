// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

/* Consultei esse artigo para utilizar a interpolação de strings, para não precisar concatenar
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals */

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let inOrder = numeros.sort();
  let highest = inOrder[inOrder.length - 1];
  let count = 0;

  for (let index in inOrder) {
    if (inOrder[index] === highest) {
      count += 1;
    }
  } return count;
}
/* Consultei o repositório do Vitor Hugo para resolver essa parte. Link do repositório
https://github.com/tryber/sd-011-project-playground-functions/pull/154/files#submit-review */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let atack1 = Math.abs(cat1 - mouse);
  let atack2 = Math.abs(cat2 - mouse);
  let result = null;

  if (atack1 < atack2) {
    result = 'cat1';
  } else if (atack2 < atack1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8

function fizzCheck(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return 'fizzBuzz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}

function fizzBuzz(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    newArray.push(fizzCheck(array[index]));
  } return newArray;
}

// Desafio 9

function encode(phrase) {
  phrase = phrase.replace(/a/g, 1);
  phrase = phrase.replace(/e/g, 2);
  phrase = phrase.replace(/i/g, 3);
  phrase = phrase.replace(/o/g, 4);
  phrase = phrase.replace(/u/g, 5);
  return phrase;
}

function decode(phrase) {
  phrase = phrase.replace(/1/g, 'a');
  phrase = phrase.replace(/2/g, 'e');
  phrase = phrase.replace(/3/g, 'i');
  phrase = phrase.replace(/4/g, 'o');
  phrase = phrase.replace(/5/g, 'u');
  return phrase;
}

/* Consultei o exemplo demonstrado pelos colegas Gisele costa e Diego Figueiredo, no slack da turma 11 */

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
