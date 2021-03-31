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
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}
/* console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); */

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
/* console.log(footballPoints(0, 0));  */

/* Desafio 6
 Retorne a quantidade de vezes que o maior deles se repete.
Primeiro achar o maior numero
  - Criar uma variável highestNumber = 0.
  - PERCORRER o array de entrada com o for.
  - [Acha o maior numero.] Salvar na variável maiorNumero o maior entre o primeiro numero do array vs variável maior numero.
  - No proximo loop comparar maior numero com proximo item do array.(se o segundo for maior que var maiorNumero salva o segundo. Se não, faz nada. Fazer isso para todo o arrei.) Fazer a dinamica disso com o index do for.*/
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

function betweenDistance (mouse, cat){
    return Math.abs(mouse -= cat); 
  }    
/* console.log(betweenDistance(1, 7)); */

function catAndMouse(mouse, cat1, cat2){
  let cat1Distance = betweenDistance (mouse, cat1);
  let cat2Distance = betweenDistance (mouse, cat2);
  if (cat1Distance === cat2Distance){
    return "os gatos trombam e o rato foge";
  }else if (cat2Distance < cat1Distance){
    return "Cat2"; 
  }else{
    return "cat1";
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
  for (let index = 0; index < array.length; index += 1){
    let word = '';
    if (array[index] % 3 === 0){
      word += "fizz";
    }
    if (array[index] % 5 === 0){
      word += 'Buzz';
    }
    if (array[index] % 3 !== 0 && array[index] % 5 !== 0){
      word += 'Bug';
    }
    game.push(word);
  }
  return game;
}
/* console.log(fizzBuzz([9, 25])); */




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
  let msg = "";
  for (let index =0; index < encodeStr.length; index += 1){
    switch (encodeStr[index]){
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
  let msg = "";
  for (let index =0; index < encodeStr.length; index += 1){
    switch (encodeStr[index]){
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
