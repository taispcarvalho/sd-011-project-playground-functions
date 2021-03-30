// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) return true
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');
  return arrayOfStrings;
}

// Desafio 4
function concatName(string) {
  let lastName = string[string.length - 1];
  let firstName = string[0];
  return `${lastName} ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoits = wins * 3;
  let tiesPoints = ties * 1;
  let total = winPoits + tiesPoints;
  return total;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highNumber = 0;
  let repeteations = 0;
  for (number of arrayOfNumbers) {
    if (number > highNumber) {
      highNumber = number;
    }
  }
  for (number of arrayOfNumbers) {
    if (highNumber == number) {
      repeteations += 1;
    }
  }
  return repeteations;
}
let arrayOfNumbers = [0, 0, 0];
console.log(highestCount(arrayOfNumbers));

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
