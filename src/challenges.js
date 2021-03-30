// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(a, b) {
  return (a * b) / 2;
}

// Desafio 3
function splitSentence(name) {
  return name.split(' ');
}

// Desafio 4
function concatName(firstArray) {
  return `${firstArray[firstArray.length - 1]}, ${firstArray[0]}`;
}

// Desafio 5
function footballPoints(w, t) {
  return (w * 3) + t;
}

// Desafio 6
function highestCount(arrNum) {
  let highest = arrNum[0];
  for (let i = 0; i < arrNum; i += 1) {
    if (arrNum[i] > highest) {
      highest = arrNum[i];
    }
  }
  let counter = 0;
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] === highest) {
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
