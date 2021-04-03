// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let string = '';
  return string.concat(array[array.length - 1], ', ', array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let frequencyOfBigger = 1; let bigger = array[0];
  for(let index = 1; index < array.length; index +=1) {
    if (array[index] > array[index - 1]) {
      frequencyOfBigger = 1;
      bigger = array[index];
    } else if (array[index] === bigger) {
      frequencyOfBigger += 1;
    }
  }
  return frequencyOfBigger;
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
