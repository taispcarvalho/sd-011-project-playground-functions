// Desafio 1 - ok
function compareTrue(par, impar) {
  return par && impar;
}

// Desafio 2 - ok
function calcArea(a, b) {
  let area = (a * b) / 2;
  return (area);
}

// Desafio 3 - ok
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
function highestCount(n, array) {
  n = array.length;
  array = [n];
  let maiorNumero = array[0];
  let contador = 0;
  for (let index = 1; index < n; index += 1) {
    if (array[index] > maiorNumero){
      maiorNumero = array[index];
    }
  }
  for (let indexCont = 1; indexCont < n; indexCont += 1) {
    if (array[indexCont] === maiorNumero){
      contador = contador + 1;
    } 
  }
  return contador 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  if (distanciaCat2 === 2 && distanciaCat1 === 3) {
  return cat2;
  } else if (distanciaCat1 === 6 && distanciaCat1 === 12) {
  return cat1;
  } else {
  return 'os gatos trombam e o rato foge'; 
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
let comparacao = [];
  for(let index = 0; index < arrayNumbers.length; index += 1){
    if ((arrayNumbers[index] % 3 === 0) && (arrayNumbers[index] % 5 === 0)) {
    comparacao.push('fizzBuzz');
    } else if(arrayNumbers[index] % 5 === 0) {
    comparacao.push('buzz');
    } else if (arrayNumbers[index] % 3 === 0) {
    comparacao.push('fizz');
    }else {
    comparacao.push('bug');
    }
  }
  return comparacao;
}
console.log(fizzBuzz(arrayNumbers = [2, 15, 7, 9, 45]));
console.log(fizzBuzz(arrayNumbers = [7 ,9]));
console.log(fizzBuzz(arrayNumbers = [9 ,25]));

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
