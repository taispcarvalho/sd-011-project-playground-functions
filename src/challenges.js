// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

let triangulo = calcArea(5, 2);
console.log(triangulo);

// Desafio 3
function splitSentence(src) {
  return src.split(' ');
}

let sloganTrybe = 'go Trybe';
console.log(splitSentence(sloganTrybe));

// Desafio 4
function concatName(arraySrc) {
  return (arraySrc[arraySrc.length - 1]) + ', ' + (arraySrc[0]);
}

let arrayConcat = ['Ivaldo', 'Costa', 'Souza'];
console.log(concatName(arrayConcat));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayNum) {
  let higherNumber = 0;
  let cont = 0;

  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] > higherNumber) {
      higherNumber = arrayNum[index];
    }
  }
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] === higherNumber) {
      cont += 1;
    }
  }
  return cont;
}

let numArray = [9, 1, 2, 9, 3, 9, 5, 7];
console.log(highestCount(numArray));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catNumber1 = Math.abs(mouse - cat1);
  let catNumber2 = Math.abs(mouse - cat2);
  
  if (catNumber1 < catNumber2) {
    return 'cat1';
  } if (catNumber1 > catNumber2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(3, -12, 33.4));

// Desafio 8
function fizzBuzz(array) {
  let arrFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrFizzBuzz.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrFizzBuzz.push('fizz');
    } else if (array[index] % 5 === 0) {
      arrFizzBuzz.push('buzz');
    } else if (array[index] % 3 !== 0 || array[index] % 5 !== 0) {
      arrFizzBuzz.push('bug!');
    }
  }
  return arrFizzBuzz;
}
let arrayTest = [9, 25];
console.log(fizzBuzz(arrayTest));

// Desafio 9
function encode(src) {
  for (let index = 0; index < src.length; index += 1) {
    if (src[index] === a) a = 1;
    if (src[index] === e) e = 2;
    if (src[index] === i) i = 3;
    if (src[index] === o) o = 4;
    if (src[index] === u) u = 5;
  }
  return src; 
}
function decode() {
  // seu código aqui
}
let src = 'hi there';
console.log(encode(src))

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
