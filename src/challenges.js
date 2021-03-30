// Desafio 1
function compareTrue(calculo1 , calculo2) {
  if (calculo1 === true && calculo2 === true) {
    return true;
} else {
    return false;
}

}

// Desafio 2
function calcArea(base , height) {
  return base * height / 2
}
calcArea (10 , 50)
// Desafio 3
function splitSentence(word) {
  return word.split(" ")
}

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  return `${nomes[nomes.length -1]}, ${nomes[0]}`
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
