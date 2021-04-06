// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  return areaDoTriangulo = ([base * height] / 2);
}
calcArea(10, 50);

// Desafio 3
function splitSentence(frase) {
  resultado = frase.split(' ');
  return resultado;
}
splitSentence('go Trybe');

// Desafio 4
function concatName(listaNomes) {
  return listaNomes[listaNomes.length - 1] + ', ' + listaNomes[0];
}
concatName(['foguete', 'não', 'tem', 'ré']);

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3 + ties * 1);
  return pontos;
}
footballPoints(1, 2);

// Desafio 6
function highestCount(listaNumeros) {
  let maiorNumero = highestNumber(listaNumeros);
  let vezes = 0;
  for (let index = 0; index < listaNumeros.length; index += 1) {
    if (maiorNumero === listaNumeros[index]) {
      vezes += 1;
    }
  }
  return vezes;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);

function highestNumber(listaNumeros) {
  let maiorNumero = 0;
  for (let index = 1; index < listaNumeros.length; index += 1) {
    if (maiorNumero < listaNumeros[index]) {
      maiorNumero = listaNumeros[index];
    }
  }
  return maiorNumero;
}
highestNumber([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distan1 = Math.abs(mouse - cat1);
  let distan2 = Math.abs(mouse - cat2);
  if (distan1 < distan2) {
    return "cat1";
  } else if (distan1 > distan2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
catAndMouse(13, 10, 11);

// Desafio 8
function fizzBuzz(array) {
  let finalFrase = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      finalFrase.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      finalFrase.push('buzz');
    } else if (array[index] % 3 === 0) {
      finalFrase.push('fizz');
    } else {
      finalFrase.push('bug!');
    }
  }
  return finalFrase;
}
fizzBuzz([2, 15, 7, 9, 45]);
fizzBuzz([7, 9]);
fizzBuzz([9, 25]);

// Desafio 9
function encode(frase) {
  for (let frases of frase) {
    frase = frase.replace(/a/g, 1);
    frase = frase.replace(/e/g, 2);
    frase = frase.replace(/i/g, 3);
    frase = frase.replace(/o/g, 4);
    frase = frase.replace(/u/g, 5);
  }
  return frase;
}
encode('Felipe')

function decode(frase) {
  for (let frases of frase) {
    frase = frase.replace(/1/g, 'a');
    frase = frase.replace(/2/g, 'e');
    frase = frase.replace(/3/g, 'i');
    frase = frase.replace(/4/g, 'o');
    frase = frase.replace(/5/g, 'u');
  }
  return frase;
}
decode('F2l3p2')

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
