// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return base * (height / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]} + ,   ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
function getHighest(array) {
  let max = array[0];
  for (let index in array) {
    if (array[index] > max) {
      max = array[index];
    }
  }
  return max;
}
function countApearences(num, array) {
  let counter = 0;
  for (let index in array) {
    if (num === array[index]) {
      counter += 1;
    }
  }
  return counter;
}
// Desafio 6
function highestCount(array) {
  let max = getHighest(array);
  let repeated = countApearences(max, array);
  return repeated;
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
