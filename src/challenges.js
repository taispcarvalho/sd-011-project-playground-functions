// Desafio 1
function compareTrue(firstBool, secondBool) {
  return firstBool && secondBool;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function higherNumber(array) {
  let maiorNumero = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (index === 0 || array[index] >= maiorNumero) {
      maiorNumero = array[index];
    }
  }
  return maiorNumero;
}

function highestCount(array) {
  let maiorNumero = higherNumber(array);
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function distance(firstDistance, secondDistance) {
  let cat;
  if (firstDistance < secondDistance) {
    cat = 'cat1';
  } else if (firstDistance > secondDistance) {
    cat = 'cat2';
  } else {
    cat = 'os gatos trombam e o rato foge';
  }
  return cat;
}

function catAndMouse(mouse, cat1, cat2) {
  let firstDistance;
  let secondDistance;
  if (mouse <= cat1) {
    firstDistance = cat1 - mouse;
  } else {
    firstDistance = mouse - cat1;
  }
  if (mouse <= cat2) {
    secondDistance = cat2 - mouse;
  } else {
    secondDistance = mouse - cat1;
  }
  return distance(firstDistance, secondDistance);
}

// Desafio 8
function validaBuzz(number) {
  let resultado;
  if (number % 3 === 0 && number % 5 === 0) {
    resultado = 'fizzBuzz';
  } else if (number % 3 === 0) {
    resultado = 'fizz';
  } else if (number % 5 === 0) {
    resultado = 'buzz';
  } else {
    resultado = 'bug!';
  }
  return resultado;
}

function fizzBuzz(arrayNumber) {
  let arrayResult = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    arrayResult.push(validaBuzz(arrayNumber[index]));
  }
  return arrayResult;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, '1');
  string = string.replace(/e/g, '2');
  string = string.replace(/i/g, '3');
  string = string.replace(/o/g, '4');
  string = string.replace(/u/g, '5');
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
