// Desafio 1
function compareTrue(parm1, parm2) {
 return parm1 && parm2;  
}

// Desafio 2
function calcArea(base, altura) {
 return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
 return frase.split(" "); 
}

// Desafio 4

function concatName(array) {
  var primeiro = concatName[0];
  var ultimo = concatName[concatName.length - 1];
  console.log(ultimo, primeiro)  
}
concatName['ola', 'tudo', 'bem', 'com', 'voce']

// Desafio 5
function footballPoints(wins, ties) {
  console.log( (wins * 3) + (ties * 1));
}
footballPoints(10,10)

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
