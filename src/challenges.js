// Desafio 1 - okay
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2 - okay
function calcArea(base, height) {
  let answer = (base * height) / 2;
  return answer;
}

// Desafio 3 - okay
function splitSentence(value3) {
  return value3.split(' ');
}

// Desafio 4 - okay
function concatName(value4) {
  let lastName = value4[value4.length - 1];
  let firstName = value4[0];
  let virgula = ', ';
  let fullName = lastName + virgula + firstName;
  return fullName;
}

// Desafio 5 - okay
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
  let arrayTeste = [0,1,2,2,2];
  let contador = 0;
}

// Desafio 7 - com problemas- fiscal não curtiu
function catAndMouse(mouse, cat1, cat2) {
  let cat1Mouse = Math.abs(mouse - cat1);
  let cat2Mouse = Math.abs(mouse - cat2);

  if (cat1Mouse < cat2Mouse) {
    return 'cat1';
  } if (cat1Mouse > cat2Mouse) {
    return 'cat2';
  } if (cat2Mouse === cat1Mouse) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {

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
