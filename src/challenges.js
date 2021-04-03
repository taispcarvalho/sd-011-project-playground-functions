// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let space = ' ';
  let sentence = string.split(space);
  return sentence;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  let newArray = `${array[array.length - 1]}, ${array[0]}`;
  return newArray
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']))

// Desafio 5
function footballPoints() {
  let game = wins * 3 + ties * 1;
  return game;
}
console.log(footballPoints(14, 8))

// Desafio 6
function highestCount() {
  // seu código aqui
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
