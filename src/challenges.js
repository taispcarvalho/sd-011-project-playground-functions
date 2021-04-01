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
  return `${last},  ${first}`;
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
function fizzBuzz(arrayNumber) {
  let retornar = [];
  for (let index in arrayNumber) {
    if (arrayNumber[index] % 15 === 0) retornar.push('fizzBuzz');
    if (arrayNumber[index] % 3 === 0)  retornar.push('fizz');
    if (arrayNumber[index] % 5 === 0)  retornar.push('buzz');
      retornar.push('bug!');
    }
  return retornar;
}

// Desafio 9
function encode(string) {
  let chtArray = string.split('');
  let letra = ['a', 'e', 'i', 'o', 'u'];
  let decodeArray = [];

  for (let caractere of chtArray) {
    if (letra.indexOf(caractere) >= 0) decodeArray.push(letra.indexOf(caractere) + 1);
    else decodeArray.push(caractere);
  }
  return decodeArray.join('');
}
function decode(decodeString) {
  let decodeArray = decodeString.split('');
  let letra = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let chtArray = [];
  for (let caractere of decodeArray) {
    if (Object.keys(letra).indexOf(caractere) >= 0) chtArray.push(letra[caractere]);
    else chtArray.push(caractere);
  }
  return chtArray.join('');
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
