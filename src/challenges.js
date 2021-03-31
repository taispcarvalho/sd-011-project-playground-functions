// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(frases) {
  return (frases[frases.length - 1] + ', ' + frases[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6
function highestCount(numArray) {
 let ordenado = numArray.sort((numb1, numb2) => numb2 - numb1);
 let repeat = 0;
 let highNumber = ordenado[0];
 for (let index = 0; index < ordenado.length; index +=1) {
   let element = ordenado[index];
   if (element === ordenado[0]) {
     repeat +=1;
   }
 }
 return repeat
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
