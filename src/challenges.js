// Desafio 1
function compareTrue(number, number2) {
  if ( number && number2 === true){
    return true;
  } else {
    return false;
  }
}
let resu = compareTrue(false);
console.log(resu);

// Desafio 2
function calcArea(base, height) {
  resulte = (base*height)/2;
  console.log(resulte);   
}
resulte = calcArea(10, 50);
resulte = calcArea(5, 2);
resulte = calcArea(51, 1);

// Desafio 3
function splitSentence() {
  // seu código aqui
}

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
