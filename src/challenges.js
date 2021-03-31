// Desafio 1 - ok
function compareTrue(par, impar) {
  return par && impar;
}

// Desafio 2 - ok
function calcArea(a, b) {
  let area = (a * b) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4 - ok
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  return (ultimoNome + ', ' + primeiroNome);
  }

// Desafio 5 - ok
function footballPoints(wins, ties) {
  let operacao = (3 * wins) + ties;
    return operacao;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let highCount = 0;
  for (let index = 0; index < array.length; index += 1) {
    let number = array[index];
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    }else {
    highCount = highCount + 1;
    }
    
  }
  return count;
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
