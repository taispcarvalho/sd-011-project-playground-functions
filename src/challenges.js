// Desafio 1
function compareTrue(bool1,bool2) {
  return boll1 && bool2;
}

// Desafio 2
function calcArea(base,height) {
  return (base*height)/2
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let posicao1 = arrayStrings[0];
  let posicao2 = arrayStrings[arrayStrings.length-1]
  return posicao1 + ', ' + posicao2;
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
