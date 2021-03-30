// Desafio 1
function compareTrue(a, b) {
  return a && b;
}
console.log(compareTrue(true, true));
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
console.log(calcArea(51, 1));
// Desafio 3
function splitSentence() {
  // seu código aqui
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${array[0]}`);
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let highestNumberCount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (highestNumber < array[index]) {
      highestNumber = array[index];
    }
    if (array[index] === highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return ('cat1');
  }
  if ((cat2 - mouse) < (cat1 - mouse)) {
    return ('cat2');
  }
  return ('os gatos trombam e o rato foge');
}
console.log(catAndMouse(0, 5, 6));
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
