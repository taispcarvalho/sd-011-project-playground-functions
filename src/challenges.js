// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavras = frase.split(' ');
  return palavras;
}

// Desafio 4
function concatName(itens) {
  // seu código aqui
  return (itens[itens.length - 1], itens[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosVitoria = wins * 3;
  let pontosTotais = pontosVitoria + ties;
  return pontosTotais;
}

// Desafio 6
function highestNumber(numbers) {
  let maiorNum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (maiorNum < numbers[index]) {
      maiorNum = numbers[index];
    }
  }
  return maiorNum;
}

function highestCount(numbers) {
  // seu código aqui
  let highest = highestNumber(numbers);
  let repetition = 0;
  for (let number of numbers) {
    if (number === highest) {
      repetition += 1;
    }
  }
  return repetition;
}

// Desafio 7
function distancia(p1, p2){
  return Math.abs(p2 - p1)
}

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result;
  let re1 = distancia(cat1, mouse);
  let re2 
  if (re1 > re2) {
    result = 'cat1';
  } else if (re1 < re2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let arrei = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 3 === 0) {
      arrei.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      arrei.push('buzz');
    } else if (numers[index] % 3 === 0 && numbers[index] % 5 == 0) {
      arrei.push('fizzbuzz');
    } else {
      arrei.push('bug!');
    }
  }
  return arrei;
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
