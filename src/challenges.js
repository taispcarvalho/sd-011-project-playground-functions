// Desafio 1
function compareTrue(value1, value2) {
  // como são testados dois valores booleanos e o operador && ja retorna
  // uma resposta de false ou true apenas retornar os dois ja faz a função
  return value1 && value2;
}

// Desafio 2
function calcArea(width, height) {
  // calculo de um triangulo qualquer que sabemos a altura e largura
  return width * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  // Quando for feita a chamada da funcão ja vai ser passada uma string então
  // pela tipagem dinamica a string chama o metodo split que faz a separação
  return frase.split();
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

function highestCount(list = []) {
  let number = 0;
  let count = 0;
  for (let index = 0; index <= list.length; index += 1) {
    if (number < list[index]) number = list[index];}
  for (let o = 1; o <= list.length; o += 1) {
    if (list[o] === number) {
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
function fizzBuzz(list = []) {
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] % 3 === 0 && list[index] % 5 === 0) {
      console.log('fizzBuzz');
    } if (list[index] % 3 === 0) {
      console.log('fizz');
    } if (list[index] % 5 === 0) {
      console.log('buzz');
    }
    console.log('bug');
  }
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
      encodedMessage += message[index];
      encodedMessage += frase[index];
    }
  }
  return encodedMessage;
}


function decode() {
  decodedMessage=''
  for (let index = 0; index < string.length; index += 1) {
    if (string[index].toLowerCase() === string[index]) {
      switch (string[index]) {
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
        decodedMessage += string[index];
      }
    } else {
      decodedMessage += message[index];
      decodedMessage += string[index];
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
  splitSentence};
