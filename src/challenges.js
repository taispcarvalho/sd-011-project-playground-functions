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
  
  if (atack1 < atack2) {
    return 'cat1';
  } else if (atack2 < atack1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];

  for (let index = 0; index < array.length; index += 1) {
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
  let array2 = newArray;
  return array2;
}

// Desafio 9
function encode(phrase) {
  let newPhrase = phrase;

  for (let index in newPhrase) {
    switch (newPhrase[index]) {
      case 'a':
        newPhrase = newPhrase.replace('a', '1');
        break;
      case 'e':
         newPhrase = newPhrase.replace('e', '2');
          break;
      case 'i':
        newPhrase = newPhrase.replace('i', '3');
        break;
      case 'o':
          newPhrase = newPhrase.replace('o', '4');
          break;
      case 'u':
        newPhrase = newPhrase.replace('u', '5');
        break;
      default: break;
    }
  } return newPhrase;
}
function decode(phrase) {
  let newPhrase = phrase;

  for(let index in newPhrase) {
    switch (newPhrase[index]) {
      case '1':
        newPhrase = newPhrase.replace('1', 'a');
        break;
      case '2':
         newPhrase = newPhrase.replace('2', 'e');
          break;
      case '3':
        newPhrase = newPhrase.replace('3', 'i');
        break;
      case '4':
          newPhrase = newPhrase.replace('4', 'o');
          break;
      case '5':
        newPhrase = newPhrase.replace('5', 'u');
        break;
      default: break;
    }
  } return newPhrase
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
