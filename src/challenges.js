// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

let triangulo = calcArea(5, 2);
console.log(triangulo);

// Desafio 3
function splitSentence(src) {
  return src.split(' ');
}

let sloganTrybe = 'go Trybe';
console.log(splitSentence(sloganTrybe));

// Desafio 4
function concatName(arraySrc) {
  return (arraySrc[arraySrc.length - 1]) + ', ' + (arraySrc[0]);
}

let arrayConcat = ['Ivaldo', 'Costa', 'Souza'];
console.log(concatName(arrayConcat));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayNum) {
  let higherNumber = 0;
  let cont = 0;

  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] > higherNumber) {
      higherNumber = arrayNum[index];
    }
  }
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index]  === higherNumber) {
      cont += 1;
    }
  }
  return cont;
}

let numArray = [9, 1, 2, 9, 3, 9, 5, 7];
console.log(highestCount(numArray));

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
