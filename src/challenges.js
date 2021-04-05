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
  distan1 = cat1 - mouse;
  distan2 = cat2 - mouse;
  if (distan1 < distan2) {
    return ('cat1');
  } else if (distan1 > distan2) {
    return ('cat2');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}
catAndMouse(10, 12, 13);

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
