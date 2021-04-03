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
  for (let index of valor) {
    result.push(conditionFizzBuzz(index));
  }
  return result;
}
let arrayE = [2, 15, 7, 9, 45];
function conditionFizzBuzz(arrayValue) {
  if (arrayValue % 3 === 0 && arrayValue % 5 === 0) {
    return 'fizzBuzz';
  }
  if (arrayValue % 3 === 0) {
    return 'fizz';
  }
  if (arrayValue % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
console.log(fizzBuzz(arrayE));
// Desafio 9
function encode(text) {
  let eVogals = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let eResult = '';
  for (let vogal of text) {
    if (eVogals[vogal]) {
      eResult += eVogals[vogal];
    } else {
      eResult += vogal;
    }
  }
  return eResult;
}
let texto = 'go trybe, vamos que vamos!';
console.log(encode(texto));
function decode(eResult) {
  let decoVogals = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let decoResult = '';
  for (let deNumber of eResult) {
    if (decoVogals[deNumber]) {
      decoResult += decoVogals[deNumber];
    } else {
      decoResult += deNumber;
    }
  }
  return decoResult;
}
console.log(decode(encode(texto)));

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
