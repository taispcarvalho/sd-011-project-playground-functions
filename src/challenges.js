// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let stringCache = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      array.push(stringCache);
      stringCache = '';
    } else if (index === string.length - 1) {
      stringCache += string[index];
      array.push(stringCache);
    } else {
      stringCache += string[index];
    }
  }

  return array;
}

// Desafio 4
function concatName(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  let response = `${lastElement}, ${firstElement}`;
  return response;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
