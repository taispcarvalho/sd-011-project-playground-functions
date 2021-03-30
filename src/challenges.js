// Desafio 1
function compareTrue(valor1, valor2) {
return valor1 && valor2
}
//console.log(compareTrue(false,true));

// Desafio 2
function calcArea(base, height) {
  if (area = (base * height) / 2){
    return area
  }  
}
//console.log(calcArea(51,1));

// Desafio 3
function splitSentence(array) {
let texto = array.split(' ');
 return texto
}
//console.log(splitSentence('foguete') );

// Desafio 4
function concatName(arr) {
 return `${arr[arr.length -1]}, ${arr[0]}`;
}  
let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
console.log(concatName(nomes));

// Desafio 5
function footballPoints() {
  // seu código aqui
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
