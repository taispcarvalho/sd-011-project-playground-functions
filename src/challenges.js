// Desafio 1
function compareTrue(input1, input2) {
  return (input1 && input2);
  // console.log(false&&false);
  // console.log(true&&true);
  // console.log(true&&false)
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  let char = '';
  let array = [];
  let newString = '';
  for (let index = 0; index <= string.length; index += 1) {
    char = string[index];
    if (char === ' ' || index === string.length) {
      array.push(newString);
      newString = '';
    } else {
      newString += char;
    }
  }
  return (array);
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return (string);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + (ties);
  return (points);
}

// Desafio 6
function findBiggest(array) {
  let bigBoy = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (bigBoy < array[index]) {
      bigBoy = array[index];
    }
  }
  return (bigBoy);
}

function highestCount(array) {
  let biggest = findBiggest(array);
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (biggest === array[index]) {
      counter += 1;
    }
  }
  return (counter);
}
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
