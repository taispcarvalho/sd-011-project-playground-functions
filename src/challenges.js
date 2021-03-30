// Desafio 1
function compareTrue(value1,value2) {
  return value1 && value2;
}



// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth)/2
}


// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}


// Desafio 4
let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}


// Desafio 6

let arrayTest = [9, 1, 2, 3, 9, 5, 7];
function highestCount(arrayNumbers) {
  for(let i = 0; i < arrayNumbers.length; i += 1) {
    var positionArray = arrayNumbers[i];
    if(positionArray >= 0){
    numberResult = numberResult + 1;
   }
  }
  return numberResult;
}
console.log(highestCount(arrayTest));

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
