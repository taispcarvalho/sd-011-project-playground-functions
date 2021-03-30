/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(value1, value2) {
  // como são testados dois valores booleanos e o operador && ja retorna
  // uma resposta de false ou true apenas retornar os dois ja faz a função
  return value1 && value2;
}

// Desafio 2
function calcArea(width, height) {
  // calculo de um triangulo qualquer que sabemos a altura e largura
  return (width * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let list = frase.split();
  let finalList = [];
  finalList.push(list);
  return finalList;
}

// Desafio 4
function concatName(list = [], anotherList = []) {
  // seu código aqui
  anotherList.push(list[list.length - 1]);
  anotherList.push(list[list.length - 2]);
  return anotherList;
}

function footballPoints(wins, ties) {
  // a função recebera dois numeros basta multiplicar pelo peso depois soma-las
  wins *= 3;
  ties *= 1;
  return wins + ties;
}

// Desafio 6

function highestCount(list) {
  let largest = Math.max(...list);
  let count = 0;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] === largest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(x, y, z) {
  let cat1 = Math.abs(z - x);
  let cat2 = Math.abs(z - y);
  if (cat1 > cat2) {
    return 'cat2';
  } if (cat1 < cat2) {
    return 'cat1';
  }
  return 'os dois gatos se trombam';
}

// Desafio 8

// eslint-disable-next-line complexity
function fizzBuzz(list) {
  let newList = [];
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] % 3 === 0 && list[index] % 5 === 0) {
      newList.push('fizzBuzz');
    } else if (list[index] % 3 === 0) {
      newList.push('fizz');
    } else if (list[index] % 5 === 0) {
      newList.push('buzz');
    } else {
      newList.push('bug!');
    }
  }
  return newList;
}

// Desafio 9

function encode(frase) {
  let encodedMessage = '';
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index].toLowerCase() === frase[index]) {
      switch (frase[index]) {
      case 'a':
        encodedMessage += '1';
        break;
      case 'e':
        encodedMessage += '2';
        break;
      case 'i':
        encodedMessage += '3';
        break;
      case 'o':
        encodedMessage += '4';
        break;
      case 'u':
        encodedMessage += '5';
        break;
      default:
        encodedMessage += frase[index];
      }
    } else {
      encodedMessage += frase[index];
    }
  }
  return encodedMessage;
}

function decode(number) {
  let decodedMessage = '';
  for (let index = 0; index < number.length; index += 1) {
    if (number[index].toLowerCase() === number[index]) {
      switch (number[index]) {
      case '1':
        decodedMessage += 'a';
        break;
      case '2':
        decodedMessage += 'e';
        break;
      case '3':
        decodedMessage += 'i';
        break;
      case '4':
        decodedMessage += 'o';
        break;
      case '5':
        decodedMessage += 'u';
        break;
      default:
        decodedMessage += number[index];
      }
    } else {
      decodedMessage += number[index];
    }
  }
  return decodedMessage;
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
  splitSentence };
