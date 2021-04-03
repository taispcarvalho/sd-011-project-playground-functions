// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
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
function fizzBuzz(array) {
  let numeros = [];
  for (let index in array) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      numeros.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      numeros.push('buzz');
    } else if (array[index] % 3 === 0) {
      numeros.push('fizz');
    } else {
      numeros.push('bug!');
    }
  }
  return numeros;
}

// Desafio 9
function encode(string) {
  const substitute = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  const words = string.split('').map(key => substitute[key] ? substitute[key] : key);
   
  return words.join('');
}

console.log(encode('hi there!'));

/*  if (substitute[char]) {
      return substitute[char]
    }else {
      return char
    }}) */

function decode(stringN) {
  const substitute = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
const numbers = stringN.split('').map(key => {
  if (substitute [key]) {
    return substitute [key];
  } else {
    return key;
  }})
  return numbers.join('');
}
console.log(decode('h3 th2r2!'));

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
