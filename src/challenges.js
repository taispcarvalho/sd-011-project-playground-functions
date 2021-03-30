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
  let separateString = string.split(' ');
  return separateString;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));
// Desafio 4
function concatName(array) {
  let first = array[0];
  let last = array[array.length - 1];
  let concat = `${last}, ${first}`;
  return concat;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));
// Desafio 5
function footballPoints(wins, ties) {
  let score = 0;
  if (wins) {
    score += wins * 3;
  }
  if (ties) {
    score += ties * 1;
  }
  return score;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));
// Desafio 6
function highestCount(array) {
  let counter = 0;
  let highest = Math.max(...array);
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] >= highest) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 18));
console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(2, 0, 0));
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
