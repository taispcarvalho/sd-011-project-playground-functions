// Desafio 1
function compareTrue(paramx, paramy) {
  if ( paramx && paramy === true){
  return true;
  }

  else{
return false;
  }

}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) /2;
return area;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let arrayOfStrings = stringToSplit.split(" ")
  return arrayOfStrings

}

// Desafio 4

function concatName(arraystr) {
  arrayfl = arraystr[arraystr.length -1] + ", " + [arraystr [0]];
  return arrayfl;
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
