// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let array = str.split(' ');
  return array;
}

// Desafio 4
function concatName(array2 = []) {
  return `${array2[array2.length - 1]}, ${array2[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6

let array3 = [9, 1, 2, 3, 9, 5, 7];
function highestCount(param) {
  let maiorNum = 0;
  for (let i = 0; i < param.length; i+=1) {
    if(param[i] > maiorNum){
      maiorNum += param[i];
    }
  }
  let qtd = 0;
  for (let i = 0; i < param.length; i+=1) {    
    if (param[i] === maiorNum){
      qtd ++;
    }
  }
  return qtd;
}
console.log(highestCount(array3));

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
