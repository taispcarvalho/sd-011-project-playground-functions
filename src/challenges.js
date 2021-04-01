// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  let soma = (base * height) / 2;
  return soma;
}

// Desafio 3
function splitSentence(frase) {
  frase = frase.split(' ');
  return frase;
}

// Desafio 4
function concatName(names) {
  let concatenatedNames = `${names.pop()}, ${names.shift()}`;
  return concatenatedNames;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ties + (wins * 3);
  return points;
}

// Desafio 6
function maiorNum(numbers) {
  let highestNum = 0;
  for (let index = 0; index <= numbers.length; index += 1) {
    if (numbers[index] > highestNum) {
      highestNum = numbers[index];
    }
  }
  return highestNum;
}

function highestCount(numbers) {
  let highestRepeat = 0;
  let highestNum = maiorNum(numbers);
  for (let index = 0; index <= numbers.length; index += 1) {
    if (numbers[index] === highestNum) {
      highestRepeat += 1;
    }
  }
  return highestRepeat;
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
