// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence() {
  // let array = [];
}

// Desafio 4
function concatName(array) {
  let string = array[array.length - 1] + ', ' + array[0];
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
    distancia1 = distancia1 * -1;
  }
  if (distancia2 < 0) {
    distancia2 = distancia2 * -1;
  }
  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia2 < distancia1) {
    return 'cat 2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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
      secondArray.push('Buzz');
    } else {
      secondArray.push('bug!');
    }
  }
  return secondArray;
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
