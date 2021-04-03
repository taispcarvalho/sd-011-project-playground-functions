// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}
/* console.log(compareTrue(true, false)); */

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
/* console.log(calcArea(51, 1)); */

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}
/* console.log(splitSentence('foguete')); */

// Desafio 4
/*
  Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.
  O que será verificado:
  Retorne 'Paolillo, Lucas' quando o parâmetro passado na funcão concatName seja ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
  Retorne 'ré, foguete' quando o parâmetro passado na funcão concatName seja ['foguete', 'não', 'tem', 'ré']
  Retorne 'captain, captain' quando o parâmetro passado na funcão concatName seja ['captain', 'my', 'captain'] 
*/
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins,ties) {
  return wins * 3 + ties * 1;
}
/* console.log(footballPoints(0, 0));*/

// Desafio 6
/*
  Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.
  O que será verificado:
  Retorne 2 quando o parâmetro passado na funcão highestCount seja [9, 1, 2, 3, 9, 5, 7]
  Retorne 1 quando o parâmetro passado na funcão highestCount seja [0, 4, 4, 4, 9, 2, 1]
  Retorne 3 quando o parâmetro passado na funcão highestCount seja [0, 0, 0]
  */
function findHighestNumber(array1) {
  let highestNumber = 0;
  for (index = 0; index <= array1.length; index += 1) {
    if (array1[index] > highestNumber) {
      highestNumber = array1[index];
    }
  }
  return highestNumber;
}
/*  teste da função */
/* console.log(findHighestNumber([9, 1, 2, 3, 9, 5, 7])); */
/*
  - Criar uma variável countHighest = 0.
  - [Inicio função ex 6 de fato] [conta quantas vezes ele aparece no array.]Com o maior numero em mãos 
  Se forem iguais acrescenta um no contador de maior e passa.
  7 - return countHighest
  */
function highestCount(array) {
  let countHighest = 0;
  for (index1 = 0; index1 <= array.length; index1 += 1) {
    if (array[index1] === findHighestNumber(array)) {
      countHighest += 1;
    }
  }
  return countHighest;
}
/* Teste da função */
/* console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); */

// Desafio 7
/* Recebe 3 posições numericas que representa a posição de cada animal. A ideia  e ver a distância numerica entre as posições e devolver o gato que estiver mais próximo do rato.
Para isso tenho que comparar a distância do gato1 com o rato, gato2 com o rato e se os gatos estão na mesma distância.
Se gato 1 estiver mais próximo retorna gato1.
Se gato2 estiver mais próximo retorna gato 2.
Se os gatos estiverem na mesma distância retorna frase "os gatos trombam e o rato foge". */

function betweenDistance(mouse, cat) {
  return Math.abs((mouse -= cat));
}
/* console.log(betweenDistance(1, 7)); */

function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = betweenDistance(mouse, cat1);
  let cat2Distance = betweenDistance(mouse, cat2);
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  } else if (cat2Distance < cat1Distance) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}
/* console.log(catAndMouse(1, 2, 2)); ------------------------------*/

/* Desafio 8
Jogo FizzBuzzBug
Recebe um array.
Se o numero for divisével por 3 - fizz
Se o numero for divisével por 5 - Buzz
Se o numero for divisével por 3 e por 5 -FizzBuzz
Se o numero nõ for divisével nem por 3 e nem por 5 - Bug
*/
function fizzBuzz(array) {
  let game = [];
  for (let index = 0; index < array.length; index += 1) {
    let word = '';
    if (array[index] % 3 === 0) {
      word += 'fizz';
    }
    if (array[index] % 5 === 0) {
      word += 'Buzz';
    }
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      word += 'bug';
    }
    game.push(word);
  }
  return game;
}
console.log(fizzBuzz([9, 25]));

// Desafio 9
/* O que será verificado:
Retorne uma string codificada quando a função encode for utilizada
Retorne uma string decodificada quando a função decode for utilizada
A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

O que será verificado:
Retorne uma string codificada quando a função encode for utilizada
Retorne uma string decodificada quando a função decode for utilizada
*/
/* Crie duas funções: a primeira deverá se chamar encode e recebe uma string como parâmetro, */
function encode(encodeStr) {
  /*   deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:
  a -> 1
  e -> 2
  i -> 3
  o -> 4
  u -> 5
  Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!". */
  let msg = '';
  for (let index = 0; index < encodeStr.length; index += 1) {
    switch (encodeStr[index]) {
      case 'a':
        msg += '1';
        break;
      case 'e':
        msg += '2';
        break;
      case 'i':
        msg += '3';
        break;
      case 'o':
        msg += '4';
        break;
      case 'u':
        msg += '5';
        break;
      default:
        msg += encodeStr[index];
    }
  }
  return msg;
}
/* console.log(encode('hi there!')); */

/* A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").
 */
function decode(decodeStr) {
  let msg = '';
  for (let index = 0; index < decodeStr.length; index += 1) {
    switch (decodeStr[index]) {
      case '1':
        msg += 'a';
        break;
      case '2':
        msg += 'e';
        break;
      case '3':
        msg += 'i';
        break;
      case '4':
        msg += 'o';
        break;
      case '5':
        msg += 'u';
        break;
      default:
        msg += decodeStr[index];
    }
  }
  return msg;
}
/* console.log(decode('h3 th2r2!')); */

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
