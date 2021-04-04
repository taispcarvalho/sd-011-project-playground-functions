// Desafio 1
function compareTrue(value1,value2) {
  return value1&&value2
}

// Desafio 2
function calcArea(base, height) {
  return  base*height/2
}
// Desafio 3
function splitSentence(str)  {
let value = str.split(' ')
  return value
 }

// Desafio 4 
function concatName(name) {
  let start = name[name.length-1];
  let first = name[0]
  let concatenation = start + ', ' + first

  return concatenation
}


// Desafio 5
function footballPoints(wins, ties) {
  let victories = 3;
  let aTie = 1;
    return victories*wins + aTie*ties  
}

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let counter = 0;
  for(let index = 0; index < numbers.length; index += 1 ){
    if(numbers[index] > maior){
      maior = numbers[index]
    }
  }
  for(let repeat = 0; repeat < numbers.length; repeat += 1){
    if(numbers[repeat] === maior){
      counter += 1
    }
  }
  return counter
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
