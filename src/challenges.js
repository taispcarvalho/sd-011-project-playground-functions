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
function concatName(listName) {
  return listName[listName.length - 1].concat(', ') + listName[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6

function highestCount(conjunto) {
  let numeromaior = Math.max.apply(null, conjunto);
  let contador = 0;
  for (let index = 0; index < conjunto.length; index += 1) {
    if (conjunto[index] === numeromaior) {
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
  for (let index = 0; index < frase.length; index += 1) {
    frase = frase.replace('a', '1');
    frase = frase.replace('e', '2');
    frase = frase.replace('i', '3');
    frase = frase.replace('o', '4');
    frase = frase.replace('u', '5');
  }
  return frase;
}

function decode(oracao) {
  for (let index = 0; index < oracao.length; index += 1) {
    oracao = oracao.replace('1', 'a');
    oracao = oracao.replace('2', 'e');
    oracao = oracao.replace('3', 'i');
    oracao = oracao.replace('4', 'o');
    oracao = oracao.replace('5', 'u');
  } return oracao;
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
