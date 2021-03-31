// Desafio 1 - ok
function compareTrue(impar, par) {
  return impar && par;

}

// Desafio 2 - ok
function calcArea(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return (areaTriangulo);

}

// Desafio 3 - ok
function splitSentence(string) {
  let arrayFrase = string.split(' ');
  return arrayFrase;
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
console.log(highestCount());

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
console.log(catAndMouse(1,0,2));

// Desafio 8
let num1 = [2, 15, 7, 9, 45];
let num2 = [7, 9];
let num3 = [9, 25];
function fizzBuzz(arrayNumbers) {
  let comparacao = [];
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
  
  return comparacao;
}
console.log(fizzBuzz(num1));
console.log(fizzBuzz(num2));
console.log(fizzBuzz(num3));


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
