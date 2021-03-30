// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let repetitions = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === Math.max(numbers)) repetitions += 1;
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) return 'os gatos trombam e o rato foge';
  if (cat1 - mouse < cat2 - mouse) return 'cat1';
  if (cat2 - mouse < cat1 - mouse) return 'cat2';
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
