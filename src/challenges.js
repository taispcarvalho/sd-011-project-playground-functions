// Desafio 1
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
 return (wins * winsValue) + (ties * tiesValue);
}
console.log(footballPoints(0, 0));

/* Desafio 6
 Retorne a quantidade de vezes que o maior deles se repete.
O que será verificado:
Retorne 2 quando o parâmetro passado na funcão highestCount seja [9, 1, 2, 3, 9, 5, 7]
Retorne 1 quando o parâmetro passado na funcão highestCount seja [0, 4, 4, 4, 9, 2, 1]
Retorne 3 quando o parâmetro passado na funcão highestCount seja [0, 0, 0] */
function findHighestNumber ( array) {
  let highestNumber = 0;
  for (index = 0; index <= array.length; index +=1){
    if (array[index] > highestNumber) {highestNumber = array[index];}
  }
  return highestNumber;
}
/* teste da função */
console.log(findHighestNumber([10, 120, 0]));

function highestCount(array) {
  /*Primeiro achar o maior numero
  1 - Criar uma variável highestNumber = 0.
  2 - Criar uma variável countHighest = 1. (Pelo menos uma vez o maior numero aparecerá, não é?)
  3 -PERCORRER o array de entrada com o for.
  4 - [Acha o maior numero.] Salvar na variável maiorNumero o maior entre o primeiro numero do array vs variável maior numero.
  5 - No proximo loop comparar maior numero com proximo item do array.(se o segundo for maior que var maiorNumero salva o segundo. Se não, faz nada. Fazer isso para todo o arrei.) Fazer a dinamica disso com o index do for.
  6 - Com o maior numero em mãos [conta quantas vezes ele aparece no array.]
  Se forem iguais acrescenta um no contador de maior e passa.
  7 - return countHighest
  */
  
  let countHighest = 1;
  

    if (array[index] === highestNumber){countHighest += 1;} 
  }
  return countHighest;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]))

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
