// Desafio 1 - #VQV
function compareTrue(bol1, bol2) {
  return bol1 && bol2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(value) {
  let end = value.length - 1;
  let name = value[end] + ', ' + value[0];
  return name;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let draw = 1;
  let result = (wins * victory) + (ties * draw);
  return result;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(list) {
  let biggerNumber = higherNumber(list);
  let count = 0;
  for (index of list) {
    if (index === biggerNumber) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([0, 0, 0]));

function higherNumber(numbers) {
  let higher = numbers[0];
  for (number of numbers) {
    if (number > higher){
      higher = number;
    }
  }
  return higher;
}
console.log(higherNumber([0, 4, 4, 4, 9, 2, 1]));


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
