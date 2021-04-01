// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let stringToSplit = string;
  let stringSplited = stringToSplit.split(' ');
  return stringSplited;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  return winsPoints + ties;
}

// Desafio 6

function highestCount(array) {
  let cont = 0;
  let biggerNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (biggerNumber <= array[index]) {
      biggerNumber = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (biggerNumber === array[index]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firthCat = mouse - cat1;
  let secondCat = mouse - cat2;
  if (firthCat === secondCat) {
    return `Os gatos trombam e o rato foge`;
  } else if (firthCat < secondCat) {
    return firthCat;
  }
  secondCat;
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
