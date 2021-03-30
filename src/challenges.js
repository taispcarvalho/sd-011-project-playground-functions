// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}
console.log(footballPoints(14, 2));

// Desafio 6
function findHighest(array) {
  let highest = array[0];
  for (let index in array) {
    if (array[index] > highest) {
      highest = array[index];
    }
  }
  return highest;
}

function highestCount(array) {
  let count = 0;
  let highest = findHighest(array);
  for (let index in array) {
    if (array[index] === highest) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function distanceCatMouse(mouse, cat) {
  return mouse - cat;
}

function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = distanceCatMouse(mouse, cat1);
  let cat2Distance = distanceCatMouse(mouse, cat2);
  let result = '';

  if (cat1Distance < cat2Distance) {
    result = 'cat1';
  } else if (cat2Distance < cat1Distance) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(5, 3, 3));

// Desafio 8
function fizzBuzz() {

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
