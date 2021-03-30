/* // Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsValue = 3;
  let tiesValue = 1;
  return wins * winsValue + ties * tiesValue;
}
console.log(footballPoints(0, 0)); */

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
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
