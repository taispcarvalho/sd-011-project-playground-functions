// Desafio 1
function compareTrue(valueOne, valueTwo) {
  return valueOne && valueTwo;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayString1) {
  return `${arrayString1[arrayString1.length - 1]}, ${arrayString1[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arrayNumber) {
  let newOrder = arrayNumber.sort();
  let highestNumber = newOrder[newOrder.length - 1];
  let repetition = 0;
  for (let number in newOrder) {
    if (number === highestNumber) {
        repetition += 1;
    }
  }
  return repetition;
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
