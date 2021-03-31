// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(splitString) {
  return splitString.split(' ');
}
console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(inintialtArray) {
  return inintialtArray[inintialtArray.length - 1].concat(', ') + inintialtArray[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'ferraz', 'Paolilo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function seekGreaterNumber(numbersArray) {
  let higherNumber = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > higherNumber) {
      higherNumber = numbersArray[index];
    }
  }
  return higherNumber;
}
function highestCount(numbersArray) {
  let largestAccountant = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === seekGreaterNumber(numbersArray)) {
      largestAccountant += 1;
    }
  }
  return largestAccountant;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  if ((cat2) < (cat1)) {
    return 'cat2';
  }
  if ((cat1) < (cat2)) {
    return 'cat1';
  }
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(1, 0, 2));

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
