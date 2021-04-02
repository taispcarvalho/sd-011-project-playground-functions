// Desafio 1
function compareTrue(number, number2) {
  if (number && number2 === true) {
    return true;
  } else {
    return false;
  }
}
let resu = compareTrue(false);
console.log(resu);

// Desafio 2
function calcArea(base, height) {
  let resulte = (base * height) /2;
  console.log(resulte);   
}
calcArea(10, 50);

// Desafio 3

function splitSentence() {
  frase = ['go', 'trybe'];
  console.log(frase);
}
splitSentence(); 
 
// Desafio 4
function concatName() {
  let nome = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
  console.log(nome[3]+ ', ' +  nome[0]);    
}
concatName()


// Desafio 5
function footballPoints(wins, ties) {
  total = wins*3 + ties*1;
  console.log(total);
}
footballPoints(0,0);
  

// Desafio 6
function highestCount() {
  let numeros = Math.max(...[5,4,4,2,10,15,15,12,6,15]);
  
} 
highestCount();

var teste = ["oi", "tudo", "bem", "oi"];
var qtd = 0;
for (var i = 0; i < teste.length; i++) {
    if (teste[i] === "oi") qtd++;
}
console.log(qtd);

// Desafio 7
function catAndMouse() {
  // seu código aqui
}
9,5,10,4,5,8,5,5
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
