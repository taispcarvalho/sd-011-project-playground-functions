// Desafio 1

function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2

function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}

// Desafio 3

function splitSentence(palavra) {
  return palavra.split(' ');
}

// Desafio 4

function concatName(strings) {
  return strings[strings.length - 1] + ' , ' + strings[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5

function footballPoints(wins, ties) {
return (wins * 3 + ties * 1);
}

console.log(footballPoints(14,8))

// Desafio 6

function highestCount(array) {
  let highestNumber = 0;
  for (let index of array) {
    if (index > highestNumber) {
      highestNumber = index;
    }
  }
  let counter = o;
  for (let index in array) {
    if (array[index2] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7

function catAndMouse(cat1, cat2) {
  if (cat1 > cat2) {
    return 'cat2';
  }
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
