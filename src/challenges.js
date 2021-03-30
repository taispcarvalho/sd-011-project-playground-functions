// Gustavo Zanette

// Desafio 1
function compareTrue(val1, val2) {
  return val1 && val2;
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
function concatName(fullName) {
  let signatureName = [];
  signatureName.push(fullName[fullName.length - 1], fullName[0]);

  return signatureName.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  // achar o maior --FEITO!
  let highestNumberFrequency = 0;
  let highestNumber = Math.max.apply(null, numbers);

  // contar quantas vezes o maior aparece
  for (const number of numbers) {
    if (number === highestNumber) {
      highestNumberFrequency += 1;
    }
  }

  return highestNumberFrequency;
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
