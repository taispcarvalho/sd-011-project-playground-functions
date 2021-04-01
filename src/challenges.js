// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let aux = array[0];
  let contador = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (aux < array[index]) {
      aux = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (aux === array[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  if (distancia1 < 0) {
    distancia1 *= -1;
  }
  if (distancia2 < 0) {
    distancia2 *= -1;
  }
  if (distancia1 < distancia2) {
    return 'cat1';
  } if (distancia2 < distancia1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let secondArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      secondArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      secondArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      secondArray.push('buzz');
    } else {
      secondArray.push('bug!');
    }
  }
  return secondArray;
}

// Desafio 9
function encode(string) {
  let secondString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      secondString += '1';
    } else if (string[index] === 'e') {
      secondString += '2';
    } else if (string[index] === 'i') {
      secondString += '3';
    } else if (string[index] === 'o') {
      secondString += '4';
    } else if (string[index] === 'u') {
      secondString += '5';
    } else {
      secondString += string[index];
    }
  }
  return secondString;
}

function decode(string) {
  let secondString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      secondString += 'a';
    } else if (string[index] === '2') {
      secondString += 'e';
    } else if (string[index] === '3') {
      secondString += 'i';
    } else if (string[index] === '4') {
      secondString += 'o';
    } else if (string[index] === '5') {
      secondString += 'u';
    } else {
      secondString += string[index];
    }
  }
  return secondString;
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
