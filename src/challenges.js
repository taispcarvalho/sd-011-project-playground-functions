// Desafio 1 - OK
function compareTrue(value1, value2) {
  return value1 && value2;
}
console.log('teste 1');
console.log(compareTrue(true, true));

// Desafio 2 - OK
function calcArea(base, height) {
  return ((base * height) / 2);
}
console.log(calcArea(35, 30));

// Desafio 3 - OK
function splitSentence(frase) {
  let arrayFrase = frase.split(' ');
  return arrayFrase;
}

// Desafio 4 - ok - verificar
function concatName(array) {
  let string = array[array.length - 1].concat(', ' + array[0]);
  return string;
}

// Desafio 5 - ok
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6 - ok - verificar
function highestCount(array) {
  let maiorNumero = 0;
  let numeroRepetido = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (maiorNumero === array[index2]) {
      numeroRepetido += 1;
    }
  }
  return numeroRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouseCat1 = Math.abs(mouse - cat1);
  let distanciaMouseCat2 = Math.abs(mouse - cat2);
  
  if (distanciaMouseCat1 < distanciaMouseCat2) {
    return 'cat1';
  } else if (distanciaMouseCat1 > distanciaMouseCat2) {
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
