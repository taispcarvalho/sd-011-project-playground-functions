// Desafio 1.0
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(array) {
  array = array.split(' ');
  return array;
}

// Desafio 4
function concatName(array2) {
  let first = array2[0];
  let last = array2[array2.length - 1];
  return last + ', ' + first;
}

// Desafio 5
function footballPoints(win, ties) {
  return (win * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numeros) {
  let ordem = numeros.sort();
  let maior = ordem[numeros.length - 1];
  let retorno = 0;
  for (let index in numeros) {
    if (numeros[index] === maior) {
      retorno += 1;
    }
  }
  return retorno;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
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
