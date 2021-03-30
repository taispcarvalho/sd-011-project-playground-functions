// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true
  }
  else {
    return false
  }
 
}
// Desafio 2
  // seu código aqui
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let palavra = string.split(' ');
  return palavra;

}

// Desafio 4
function concatName(array ) {
    
    return array[array.length - 1] + ", " + array[0]
  }

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}


function highestNumber(array) {
  let maiorValor = array[0];
  for (index = 0; index < array.length; index +=1){
    if (array[index] > maiorValor){
      maiorValor = array[index]
    }
  }
  return maiorValor
}

// Desafio 6
function highestCount(array) {

let maiorValor = highestNumber(array)
let repetiu = 0;
for (let j in array){
  if (array[j] === maiorValor)
    repetiu += 1;
}
return repetiu
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2 ) {
  // seu código aqui
  let resultado = 0;

  if (resultado < 0){
    resultado = resultado * -1
  }
 if (mouse - cat1 < mouse - cat2){
    resultado = cat1
    return cat2
  }
  else {
    resultado = cat2
    return cat1
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
