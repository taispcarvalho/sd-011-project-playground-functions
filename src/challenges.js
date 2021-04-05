// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName() {
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(conjunto) {
  let contador = 0;
  for (let highnumber of conjunto) {
    if (highnumber === Math.max(conjunto)) {
      contador += 1;
    }
  } return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(entrada) {
  let numerico = [];
  for (let index in entrada) {
    if (entrada[index] % 15 === 0) {
      numerico.push('fizzBuzz');
    } else if (entrada[index] % 5 === 0) {
      numerico.push('buzz');
    } else if (entrada[index] % 3 === 0) {
      numerico.push('fizz');
    } else {
      numerico.push('bug!');
    }
  } return numerico;
}

// Desafio 9
function encode(frase) {
  return frase.replace(/(a|e|i|o|u)/gi, /(1|2|3|4|5)/);
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
