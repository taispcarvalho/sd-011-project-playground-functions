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
function highestCount(value5) {
  let contador = 0;
  let n = 0;
  for( let i = 0; i < value5.length;  i+=1){
    if( contador <= value5[i]){
      contador = value5[i];
      n +=1
    }
  }
  return n;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let cat1Mouse = cat1 - mouse;
  let cat2Mouse = cat2 - mouse;

  if(cat1Mouse < cat2Mouse){
    return 'cat1';
  } else if (cat1Mouse > cat2Mouse){
    return 'cat2';
  } else if (cat2Mouse === cat1Mouse){
    return 'os gatos trombam e o rato foge'
  }
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
