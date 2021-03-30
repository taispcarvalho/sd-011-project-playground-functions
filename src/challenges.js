// Desafio 1
function compareTrue(var1, var2) {
  return var1 && var2;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  for (let index = 0; index < array.length; index += 1){
    return array = array[array.length - 1] + ', ' + array[0];
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array, resultado) {
    resultado = 0;
  for (let index1 = 0; index1 < array.length; index1 += 1) {
    if (findNumber() === array[index1]) {
      resultado += 1;
    }
  }
  return resultado;
}
function findNumber(array){
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > array[index + 1]) {
      array = array[index];
    }
  }
  return array;
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
