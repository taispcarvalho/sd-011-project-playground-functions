// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3
function splitSentence(myString) {
  myString = myString.split(' ');
  return myString;
}
// Desafio 4
function concatName(myArray) {
  let firstIten = myArray[0];
  let lastIten = myArray[myArray.length - 1];
  let newArray = `${lastIten}, ${firstIten}`;
  return newArray;
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount(arrayNumbers) {
  let arrayAux = arrayNumbers.sort((a, b) => b - a);
  let count = 1;
  let highest = arrayAux[0];

  for (let index = 1; index < arrayAux.length; index += 1) {
    if (arrayAux[index] === highest) {
      count += 1;
    }
  }
  return count;
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
