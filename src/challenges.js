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
function findHighestNumber(arrNum) {
  let highest = arrNum[0];
  for (let i = 0; i < arrNum; i += 1) {
    if (arrNum[i] > highest) {
      highest = arrNum[i];
    }
  }
  return highest;
}

function highestCount(arrNum) {
  let counter = 0;
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] === findHighestNumber(arrNum)) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
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
