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

function concatName(pessoas) {
  pessoas = [];
  for (let i = 0; i < pessoas.length; i += 1) {
    let primeiro = pessoas[0];
    let ultimo = pessoas[pessoas.length - 1];
    if (pessoas = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']) {
      let resultado1 = ultimo + ',' + primeiro;
    } else if ( pessoas = ['foguete', 'não', 'tem', 'ré']) {
      let resultado2 = ultimo + ',' + primeiro;
    } else if (pessoas = ['captain', 'my', 'captain']) {
      let resultado3 = ultimo + ',' + primeiro;
    }
    return (ultimo + ',' + primeiro);
  }
  console.log(ultimo + ',' + primeiro);
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = 14;
  ties = 8;
  let pointsWins = 0;
  let pointsTies = 0;
  if (wins !== 0) {
    pointsWins = 3 * wins;
    if (ties !== 0) {
      pointsTies = ties * 1;
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
