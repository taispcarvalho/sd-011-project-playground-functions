// Desafio 1
function compareTrue(boo1, boo2) {
  // seu código aqui
  return boo1 && boo2;
}

console.log(compareTrue('True', 'True'));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

console.log(calcArea(10, 10));

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(' ');
}

console.log(splitSentence('Vamo que vamo!'));

// Desafio 4
function concatName(names) {
  // seu código aqui
  return names[names.length - 1] + ', ' + names[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

console.log(footballPoints(1, 2));

// Desafio 6
function higherNumber(numbers) {
  let number = numbers[0]
  for (let key of numbers) {
    if  (key > number) {
      number = key;
    }
  }
  return number
}
console.log(higherNumber([9, 1, 2, 3, 9, 5, 7]));

function highestCount(numbers) {
  // seu código aqui
  let counter = 0;
  for (let key of numbers) {
    if  (key === higherNumber(numbers)) {
      counter += 1;
    }
  }
  return counter;
}

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
