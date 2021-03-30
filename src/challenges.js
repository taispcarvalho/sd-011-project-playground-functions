// Desafio 1
function compareTrue(valorOne, ValorTwo) {
  return valorOne && ValorTwo;    
}

// Desafio 2
function calcArea(base,height) {
  return(base * height) /2;
}
let base= 51;
let height= 1;
console.log(calcArea(base, height));

// Desafio 3
function splitSentence(str) {
  return(str.split(' '));
}

// Desafio 4
let nameArray = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(nameArray) {
  var lastItem = nameArray[nameArray.length -1];
  var firstItem = nameArray[0];
}
console.log (concatName(nameArray));
  
  
 


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
