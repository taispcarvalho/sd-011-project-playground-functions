// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');

  return array;
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  // para resolver o problema de concatenacao, utilizei este material: https://eslint.org/docs/rules/prefer-template.
  let newArray = `${array[array.length - 1]}, ${array[0]}`;

  return newArray;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let finalPoints = (wins * 3) + ties;

  return finalPoints;
}

console.log(footballPoints(14, 8));

// Desafio 6
function anotherCount(array) {
  let higherValue = 0;
  // cria outra funcao para resolver o problema de refatoracao
  for (let highestIndex = 0; highestIndex < array.length; highestIndex += 1) {
    if (higherValue < array[highestIndex]) {
      higherValue = array[highestIndex];
    }
  }
  return higherValue;
}

function highestCount(array) {
  let higherValue = anotherCount(array);
  let repeatValue = 0;

  for (let countIndex = 0; countIndex < array.length; countIndex += 1) {
    if (higherValue === array[countIndex]) {
      repeatValue += 1;
    }
  }
  return repeatValue;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance;
  // para resolver o calculo da distancia, utilizei este material: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let calc1 = Math.abs(cat1 - mouse);
  let calc2 = Math.abs(cat2 - mouse);

  if (calc2 < calc1) {
    distance = 'cat2';
  } else if (calc1 < calc2) {
    distance = 'cat1';
  } else {
    distance = 'os gatos trombam e o rato foge';
  }

  return distance;
}

console.log(catAndMouse(10, 8, 6));

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
