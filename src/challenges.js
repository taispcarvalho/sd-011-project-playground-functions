// Marcelo Leite - marsleite
// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(arryNames) {
  let lastItemCheck = arryNames.length - 1;
  let lastItem = arryNames[lastItemCheck];
  let firstItem = arryNames[0];
  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = 3;
  let tie = 1;
  let progress = (wins * win) + (ties * tie);
  if (wins === 0 && ties === 0) {
    return 0;
  } return progress;
}

// Desafio 6
function highestCount(numbers) {
  // Maior número
  let maior = numbers[0];
  for (let i in numbers) {
    if (numbers[i] > maior) {
      maior = numbers[i];
    }
  }
  // Quantas vezes se repete
  let repeatHight = [];
  let element = maior;
  let index = numbers.indexOf(element);
  while (index !== -1) {
    repeatHight.push(index);
    index = numbers.indexOf(element, index + 1);
  }
  return repeatHight.length;
}
let arrRandom = [0, 0, 0];
console.log(highestCount(arrRandom));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dif1 = Math.abs(mouse - cat1);
  let dif2 = Math.abs(mouse - cat2);
  if (dif1 < dif2) {
    return 'cat1';
  } if (dif1 === dif2) {
    return 'os gatos trombam e o rato foge';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(valor) {
  let result = [];
  for (let index = 0; index < valor.length; index += 1) {
    if (valor[index] % 3 === 0 && valor[index] % 5 === 0) {
      valor[index] = 'fizzBuzz';
    } else if (valor[index] % 3 === 0) {
      valor[index] = 'fizz';
    } else if (valor[index] % 5 === 0) {
      valor[index] = 'buzz';
    } else {
      valor[index] = 'bug!';
    }
    result.push(valor[index]);
  }
  return result;
}
let arrayE = [2, 15, 7, 9, 45];
console.log(fizzBuzz(arrayE));

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
