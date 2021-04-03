// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let split = phrase.split(' ');
  return split;
}

// Desafio 4
function concatName(array) {
  let out = '';
  out = `${array[array.length - 1]}, ${array[0]}`;
  return out;
}

/* Consultei esse artigo para utilizar a interpolação de strings, para não precisar concatenar
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals */

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;
  return result;
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

  for (let index in array) {
    newArray.push(fizzCheck(array[index]));    
  } return newArray;
}

// Desafio 9
function encode(phrase) {
  let target = 'aeiou';
  let encodeKey = '12345';

  for (let index in phrase) {
    for (let index2 in target) {
      if (phrase[index] === target[index2]) {
        phrase = phrase.replace(phrase[index], encodeKey[index2]);
      }
    }
  } return phrase;
}

function decode(phrase) {
  let target = '12345';
  let decodeKey = 'aeiou';

  for (let index in phrase) {
    for (let index2 in target) {
      if (phrase[index] === target[index2]) {
        phrase = phrase.replace(phrase[index], decodeKey[index2]);
      }
    }
  } return phrase;
}
/* Consultei o repositório do Vitor Hugo para resolver essa parte. Link do repositório
https://github.com/tryber/sd-011-project-playground-functions/pull/154/files#submit-review */

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
