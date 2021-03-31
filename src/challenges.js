// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
  // seu código aqui
}
console.log(splitSentence('Go Trybe'));
// Desafio 4

function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
  // seu código aqui
}
console.log(footballPoints(14, 8));

// Desafio 6

function highestCount(number) {
  let maxNumber = Math.max.apply(null, number);
  let repeatNumber = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === maxNumber) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = mouse - cat1;
  let distance2 = mouse - cat2;
  let catMouse = 0;

  if (distance1 > distance2) {
    catMouse.push('cat1');
  } else if (distance1 < distance2) {
    catMouse.push('cat2');
  } else if (distance1 === distance2) {
    catMouse.push('Os gatos trambaram e o rato foge');
  }
  console.log(catMouse);
  return catMouse;
  // seu código aqui
}
console.log(catAndMouse(12, 2, 3));
// Desafio 8
function fizzBuzz(array) {
  let number = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      number.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      number.push('fizz');
    }
  }
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
