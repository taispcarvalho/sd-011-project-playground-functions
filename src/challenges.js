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
 Retorne 'Paolillo, Lucas' quando o parâmetro passado na funcão concatName seja ['Lucas', 'Cassiano','Ferraz','Paolillo']
 Retorne 'ré, foguete' quando o parâmetro passado na funcão concatName seja ['foguete','não','tem','ré']
 Retorne 'captain,captain'quando o parâmetro passado na funcão concatName seja['captain','my','captain']
*/
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}
/* console.log(footballPoints(0, 0)); */

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
  for (let index = 0; index <= array1.length; index += 1) {
    if (array1[index] > highestNumber) {
      highestNumber = array1[index];
    }
  }
  return highestNumber;
}
/* console.log(findHighestNumber([9, 1, 2, 3, 9, 5, 7])); */
function highestCount(array) {
  let countHighest = 0;
  for (let index1 = 0; index1 <= array.length; index1 += 1) {
    if (array[index1] === findHighestNumber(array)) {
      countHighest += 1;
    }
  }
  return countHighest;
}
/* console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); */

// Desafio 7
/*
Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás de um rato chamado mouse.Imagine que cada um dos três animais está em uma posição representada por um número. Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto). Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades,sua função deverá retornar "cat2". Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".
  O que será verificado:
  Retorne a string 'cat2' caso a função catAndMouse receba o parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato
  Retorne a string 'cat1' caso a função catAndMouse receba o parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato
  Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba o parâmetros onde gatos estejam na mesma distância do rato
*/
function betweenDistance(mouse, cat) {
  let mouseCat = Math.abs((mouse -= cat));
  return mouseCat;
}
/* console.log(betweenDistance(1, 7)); */
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = betweenDistance(mouse, cat1);
  let cat2Distance = betweenDistance(mouse, cat2);
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
  if (cat2Distance > cat1Distance) {
    return 'cat1';
  }
}
/* console.log(catAndMouse(1, 2, 2)); */

// Desafio 8
/*
  Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:
  Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
  Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
  Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
  Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
  Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].
  O que será verificado:
  Retorne as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando é passado os parâmetros [2, 15, 7, 9, 45] para função fizzBuzz
  Retorne as strings ['bug!', 'fizz'] quando é passado os parâmetros [7, 9] para função fizzBuzz
  Retorne as strings ['fizz', 'buzz'] quando é passado os parâmetros [9, 25] para função fizzBuzz
*/
function fizzBuzz(array) {
  let game = [];
  for (let index = 0; index < array.length; index += 1) {
    game[index] = 'bug!';
    if (array[index] % 3 === 0) {
      game[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      game[index] = 'buzz';
    }
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      game[index] = 'fizzBuzz';
    }
  }
  return game;
}
/* console.log(fizzBuzz([2, 15, 7, 9, 45])); */

// Desafio 9
/* Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:
 a -> 1
 e -> 2
 i -> 3
 o -> 4
 u -> 5
 Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".
 A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").
 O que será verificado:
 Retorne uma string codificada quando a função encode for utilizada
 Retorne uma string decodificada quando a função decode for utilizada */
function encode(encodeStr) {
  encodeStr = encodeStr.replace(/a/g, '1');
  encodeStr = encodeStr.replace(/e/g, '2');
  encodeStr = encodeStr.replace(/i/g, '3');
  encodeStr = encodeStr.replace(/o/g, '4');
  encodeStr = encodeStr.replace(/u/g, '5');
  return encodeStr;
}
/* console.log(encode('hi there!')); */

function decode(decodeStr) {
  decodeStr = decodeStr.replace(/1/g, 'a');
  decodeStr = decodeStr.replace(/2/g, 'e');
  decodeStr = decodeStr.replace(/3/g, 'i');
  decodeStr = decodeStr.replace(/4/g, 'o');
  decodeStr = decodeStr.replace(/5/g, 'u');
  return decodeStr;
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
