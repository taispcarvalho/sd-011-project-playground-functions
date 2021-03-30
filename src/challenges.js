// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let answer = (base * height) / 2;
  return answer;
}

// Desafio 3
function splitSentence(value3) {
  let arraySentence = value3.split(" ");
  return arraySentence;
}

  // Desafio 4
  

 function concatName(value4) {
  let lastName = value4[value4.length - 1];
  let firstName = value4[0]
  let fullName = lastName + ', ' + firstName;
  return fullName;
}


// Desafio 5

function footballPoints(wins, ties) {
  let pWins = 3;
  let pTies = 1;
  let quantidadeDeVitorias = wins * pWins;
  let quantidadeDeEmpates = ties * pTies;
  let somaDePontos = quantidadeDeEmpates + quantidadeDeVitorias;
  return somaDePontos;
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
