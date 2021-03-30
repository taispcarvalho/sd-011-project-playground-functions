// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let stringSplited = (string.split(' '));
  return stringSplited;
}

// Desafio 4
function concatName(array) {
  let stringConcat = `${array[array.length - 1]}, ${array[0]}`;
  return stringConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// função auxiliar Desafio 6
function findBiggestNumber(array) {
  let biggestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (biggestNumber < array[index]) {
      biggestNumber = array[index];
    }
  }
  return biggestNumber;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let biggestNumber = findBiggestNumber(array);
  let times = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggestNumber) {
      times += 1;
    }
  }
  return times;
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
