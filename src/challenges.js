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

// Desafio 7 - ok -refatorar
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouseCat1 = Math.abs(mouse - cat1);
  let distanciaMouseCat2 = Math.abs(mouse - cat2);
  if (distanciaMouseCat1 < distanciaMouseCat2) {
    return 'cat1';
  } else (distanciaMouseCat1 > distanciaMouseCat2) {
    return 'cat2';
  } 
  return 'os gatos trombam e o rato foge';  
}

// Desafio 8 - ok - verificar
function fizzBuzz(array) {
  let arrayResultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      arrayResultado.push('fizz');
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      arrayResultado.push('buzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayResultado.push('fizzBuzz');
    } else {
      arrayResultado.push('bug!');
    }
  }
  return arrayResultado;
}

// Desafio 9 - ok 
function encode(string) {
  let novaString = string.replace(/a/gi, '1')
    .replace(/e/gi, '2')
    .replace(/i/gi, '3')
    .replace(/o/gi, '4')
    .replace(/u/gi, '5');
  return novaString;
}
function decode(stringDecode) {
  let novaStringDecode = stringDecode.replace(/1/gi, 'a')
    .replace(/2/gi, 'e')
    .replace(/3/gi, 'i')
    .replace(/4/gi, 'o')
    .replace(/5/gi, 'u');
  return novaStringDecode;
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
