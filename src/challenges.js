// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(array) {
  return array.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  return lastItem + ', ' + firstItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
// https://stackoverflow.com/a/35101824
function highestCount(array) {
  let highest = 0;
  const aCount = new Map([...new Set(array)].map(
    x => [x, array.filter(y => y === x).length]));
  
  for (let index = 0; index < 10; index += 1){
    if (aCount.get(index) > highest) {
      highest = aCount.get(index);
    }
  }

  return highest;
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
