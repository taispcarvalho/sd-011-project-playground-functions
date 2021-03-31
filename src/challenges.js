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
function highestCount(array) {
  let maiorNumero = array[0];
  let contador = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maiorNumero){
      maiorNumero = array[index];
    }
  }
  for (let indexCont = 0; indexCont < array.length; indexCont += 1) {
    if (array[indexCont] === maiorNumero){
      contador = contador + 1;
    } 
  }
  return contador 
}
console.log(highestCount(array));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mouse = 0;
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  let resultado = '';
  if (distanciaCat2 < distanciaCat1 ) {
  resultado = 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
  resultado = 'cat1';
  } else {
  resultado = 'os gatos trombam e o rato foge'; 
  }
  return resultado;
}
console.log(catAndMouse());

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let comparacao = [];
  if(arrayNumbers = [2, 15, 7, 9, 45] || [7, 9] || [9, 25]) {
    for(let index = 0; index < arrayNumbers.length; index += 1){
      if ((arrayNumbers[index] % 3 === 0) && (arrayNumbers[index] % 5 === 0)) {
        comparacao.push('fizzBuzz');
      }else if(arrayNumbers[index] % 5 === 0) {
        comparacao.push('buzz');
      }else if(arrayNumbers[index] % 3 === 0) {
        comparacao.push('fizz');
      }else{
        comparacao.push('bug');
      }
    }
  }
  return comparacao;
}
console.log(fizzBuzz([]));

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
