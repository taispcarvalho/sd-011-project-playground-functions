// Desafio 1

function compareTrue(valueA, valueB) {
  return (valueA && valueB);
}
// Oliva fez a demonstração em aula desse desafio

// Desafio 2

function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
/** source https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function getHighestNumber(numberArray) {
  let highestNumber = numberArray[0];
  for (let number of numberArray) {
    if (number > highestNumber) highestNumber = number;
  }
  return highestNumber;
}
function highestCount(numberArray) {
  let highest = getHighestNumber(numberArray);
  let count = 0;
  for (let number of numberArray) {
    if (number === highest) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse() {
//   let cat1distance = cat1 - mouse;
//   let cat2distance = cat2 - mouse;
//   if (cat1distance < cat2distance) {
//     return 'cat1';
//   }
//   if (cat2distance < cat1distance) {
//     return 'cat2';
//   }
//   if (cat1distance == cat2distance) {
//     return 'os gatos trombam e o rato foge';
// }// 

// Desafio 8
function fizzBuzz() {
  if (if numberArray % 5 === 0 && numberArray % 3 === 0) {
    return 'fizzBuzz';
  } 
  if (numberArray % 3 === 0) {
    return 'fizz';
  }
  if (numberArray % 5 === 0) {
    return 'buzz';
  }
  return 'bug';
}

function indexFizzBuzz(numberArray) {
  let phrase = [];
  for(let index = 0; index < number.length; index += 1) {
    phrase.push(fizzBuzz(number[index]));
  }
  return phrase
}

// Desafio 9
function encode(numberArray) {
 
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
