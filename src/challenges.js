// Desafio 1
function compareTrue(num1, num2) {
  if (num1 & num2) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

console.log(splitSentence('Go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let newArray = array.shift();
  let arrayReverse = array.reverse();
  let newArray2 = arrayReverse.shift();
  return newArray2 + ', ' + newArray;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let largest = Math.max(...array);
  let quantidade = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === largest) {
      quantidade += 1;
    }
  }
  return quantidade;
}

console.log(highestCount([1, 2, 3, 4, 56, 56, 56, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = cat1 * -1;
  cat2 = cat2 * -1;

  if (cat1 < cat2) {
    return 'cat1';
  } else if (cat2 < cat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(3, 1, 2));
console.log(catAndMouse(3, 2, 1));
console.log(catAndMouse(3, 3, 3));

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([2, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {}

function decode(number) {}

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
