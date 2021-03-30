// Desafio 1
function compareTrue(par, impar) {
  return par && impar;
}

// Desafio 2
function calcArea(a, b) {
  let area = (a * b) / 2;
  return (area);
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
let pessoas = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(pessoas) {
    for (let i = 0; i < concatName.length; i += 1) {
    if (concatName[i] === concatName[concatName.length - 1]) {
      let ultimoNome = concatName[i];
    }
    if (concatName[i] === concatName[0]) {
      let primeiroNome = concatName[0];
    }
  return (console.log(ultimoNome, ',', primeiroNome));
      } 
  }
  
  

// Desafio 5
let wins = 14;
let ties = 8;
let pointsWins = 0
let pointsTies = 0;
function footballPoints(wins,ties) {
if (wins !== 0) {
  pointsWins = 3*wins;
 if (ties !==0) {
  pointsTies = ties*1
 }
let soma = pointsTies + pointsWins;
}
  return soma;
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
