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
  return (arraySrc[arraySrc.length - 1]) + `, `  + (arraySrc[0]);
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
function encode(str) {
  for (let index in str) {
    let aux = str[index];
    switch (aux) {
    case 'a': str = str.replace(aux, 1);
      break;
    case 'e': str = str.replace(aux, 2);
      break;
    case 'i': str = str.replace(aux, 3);
      break;
    case 'o': str = str.replace(aux, 4);
      break;
    case 'u': str = str.replace(aux, 5);
      break;
    default: break;
    }
  }
  return str;
}
function decode(str) {
  for (let index in str) {
    let aux = str[index];
    switch (aux) {
    case '1': str = str.replace(aux, 'a');
      break;
    case '2': str = str.replace(aux, 'e');
      break;
    case '3': str = str.replace(aux, 'i');
      break;
    case '4': str = str.replace(aux, 'o');
      break;
    case '5': str = str.replace(aux, 'u');
      break;
    default: break;
    }
  }
  return str;
}
let str = 'ivaldo souza';
console.log(encode(str));
console.log(decode(str));

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
