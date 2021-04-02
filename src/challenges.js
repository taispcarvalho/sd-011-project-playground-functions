// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}
// console.log(compareTrue(false,true));

// Desafio 2
function calcArea(base, height) {
  let área = (base * height) / 2;
  return área;
}
//  console.log(calcArea(51,1));

// Desafio 3
function splitSentence(array) {
  let texto = array.split(' ');
  return texto;
}
//  console.log(splitSentence('foguete') );

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}
//  let arr = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
//  console.log(concatName(arr));

// Desafio 5
function footballPoints(wins, ties) {
  let jogos; 
  if (jogos = wins * 3 + ties * 1) {
    return jogos;
  } else {
    jogos === 0;
  }
  return jogos;
}
//  console.log(footballPoints(2,10));

// Desafio 6
function highestCount(arr) {
  let contador = 0;
  let numeroMaior = maximoNumero(arr);
  for (let index = 0; index < arr.length; index += 1) {
    if (numeroMaior === arr[index]) {
      contador += 1;
    }
  }
  return contador;
}

function maximoNumero(arr) {
  let numeroMaior = arr[0];
  for (let index = 1; index < arr.length; index += 1) {
    if (numeroMaior < arr[index]) {
      numeroMaior = arr[index];
    }
  }
  return numeroMaior;
}
//  let arr = [9, 1, 2, 3, 9, 5, 7]
//  console.log(highestCount(arr));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const dist1 = Math.abs(mouse - cat1);
  const dist2 = Math.abs(mouse - cat2);
  if (dist1 > dist2) {
    return 'cat2';
  } if (dist1 < dist2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
//  console.log(catAndMouse(0,-3,2));

// Desafio 8
function fizzBuzz(arr) {
  let arr1 = [];
  for (let number of arr) {
    if (number % 3 === 0 && number % 5 === 0) {
      arr1.push('fizzBuzz');
    } else if (number % 3 === 0) {
      arr1.push('fizz');
    } else if (number % 5 === 0) {
      arr1.push('buzz');
    } else {
      arr1.push('bug!');
    }
  }
  return arr1;
}
//  arr1 = [2, 15, 7, 9, 45]
//  console.log(fizzBuzz(arr1) );

// Desafio 9
function encode(string) {
  let encoded = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      encoded += '1';
    } else if (string[index] === 'e') {
      encoded += '2';
    } else if (string[index] === 'i') {
      encoded += '3';
    } else if (string[index] === 'o') {
      encoded += '4';
    } else if (string[index] === 'u') {
      encoded += '5';
    } else {
      encoded += string[index];
    }
  }
  return encoded;
}
//  console.log(encode('hi there!'));

function decode(string) {
  let decoded = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      decoded += 'a';
    } else if (string[index] === '2') {
      decoded += 'e';
    } else if (string[index] === '3') {
      decoded += 'i';
    } else if (string[index] === '4') {
      decoded += 'o';
    } else if (string[index] === '5') {
      decoded += 'u';
    } else {
      decoded += string[index];
    }
  }
  return decoded;
}
//  console.log(decode('h3 th2r2!'));

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
