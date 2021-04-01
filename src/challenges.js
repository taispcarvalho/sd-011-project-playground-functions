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
  let last = array.length - 1;
  out += array[last];

  for (let index = array.length; index >= 0; index -= 1) {
    if (index === 0) {
      out = out + ', ' + array[index];
    }
  } return out;
}

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
function fizzBuzz(array) {
  let newArray = [];

  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(phrase) {
  let target = 'aeiou';
  let encodeKey = '12345';

  for (let index in frase) {
    for (let index2 in target) {
      if (frase[index] === target[index2]) {
        frase = frase.replace(frase[index],encodeKey[index2]);
      }
    }
  } return frase;
}

function decode(phrase) {
  let decodePhrase = phrase;

  for (let index in decodePhrase) {
    switch (decodePhrase[index]) {
      case '1':
        decodePhrase = decodePhrase.replace('1', 'a');
        break;
      case '2':
        decodePhrase = decodePhrase.replace('2', 'e');
        break;
      case '3':
        decodePhrase = decodePhrase.replace('3', 'i');
        break;
      case '4':
        decodePhrase = decodePhrase.replace('4', 'o');
        break;
      case '5':
        decodePhrase = decodePhrase.replace('5', 'u');
        break;
      default: break;
    }
  } return decodePhrase;
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
