// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavras = frase.split(" ");
  return palavras;
}

// Desafio 4
function concatName(itens) {
  // seu código aqui
  return (itens[itens.length-1], itens[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosVitoria = wins * 3;
  let pontosTotais = pontosVitoria + ties;
  return pontosTotais;
}

// Desafio 6
function highestNumber(numbers) {
  maiorNum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
  if(maiorNum < highestCount[index]){
    maiorNum = highestCount[index];
  }
  return maiorNum;
}
function highestCount(numbers) {
  // seu código aqui
  let highest = highestNumber(numbers);
  let repetition = 0;
  for (let number of numbers) {
    if (number === highest) {
      repetition += 1;
    }
  }
  return repetition;
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
