// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
  // seu código aqui
}
console.log(splitSentence('Go Trybe'));
// Desafio 4

function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
  // seu código aqui
}
console.log(footballPoints(14, 8));

// Desafio 6

function highestCount(number) {
  let contRepet = 0;
  let contNumber = 0;
  let indexNumberR = 0;
  for(let index in number){
    let verficaNumber = number[index];
    for (let index2 in number){
      if(verficaNumber === number[index2]){
        contNumber += 1;
      }
    }
    if(contNumber > contRepet){
    contRepet = contNumber;
    indexNumberR = index;
  }
  contNumber = 0;
  }
  return number[indexNumberR];
}
console.log(highestCount([6, 1, 2, 3, 2, 5, 7]))
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
