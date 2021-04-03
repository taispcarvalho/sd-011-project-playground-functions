// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

console.log(compareTrue(true, false));
console.log(compareTrue(false, true));
console.log(compareTrue(true, true));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  let words = [];
  let cutSpace = '';

  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === ' ') {
      words.push(cutSpace);
      cutSpace = '';

    } else if (i === sentence.length - 1) {
      cutSpace += sentence[i];
      words.push(cutSpace);

    } else {
      cutSpace += sentence[i];
    }
  }
  return words;
}
console.log(splitSentence('Go Trybe'))
console.log(splitSentence('Vamo que vamo'))
console.log(splitSentence('foquete'))

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
