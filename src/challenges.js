// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let splittedArray = string.split(' ');
  return splittedArray;
}

// Desafio 4
function concatName(array) {
  let reversedArray = array.reverse();
  let newArray = [];
  newArray.push(reversedArray[0], reversedArray[reversedArray.length - 1]);
  let lastArray = newArray.join(', ');
  return lastArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  for (let index of array) {
    if (index > highestNumber) {
      highestNumber = index;
    }
  }
  let counter = 0;
  for (let index2 in array) {
    if (array[index2] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
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
