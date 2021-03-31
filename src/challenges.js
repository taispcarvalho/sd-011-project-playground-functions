// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
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
  return `${lastName}, ${firstName}`;
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
  for (let number of arrayOfNumbers) {
    if (number > highNumber) {
      highNumber = number;
      repeteations = 0;
    }
    if (highNumber === number) {
      repeteations += 1;
    }
  }
  return repeteations;
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
