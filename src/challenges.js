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
function concatName(stringArray) {
  let fullName = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
  return fullName;
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
function catAndMouse(cat1, cat2, mouse) {
  let resultadoCat1 = Math.abs(mouse - cat1);
  let resultadoCat2 = Math.abs(mouse - cat2);
  if (resultadoCat1 === resultadoCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (resultadoCat1 < resultadoCat2) {
    return 'cat1';
  }
  return 'cat2';
}
// A Tamires deu a dica no plantão que simplificou em 200% o desafio.

// Desafio 8
function calcFizzBuzz(numberArray) {
  if (numberArray % 5 === 0 && numberArray % 3 === 0) {
    return 'fizzBuzz';
  }
  if (numberArray % 3 === 0) {
    return 'fizz';
  }
  if (numberArray % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(numberArray) {
  let phrase = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    phrase.push(calcFizzBuzz(numberArray[index]));
  }
  return phrase;
}

// Desafio 9
function encode() {
  //
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
