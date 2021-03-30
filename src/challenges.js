highestCount ([9, 1, 2, 3, 9, 5, 7])
// Desafio 1
function compareTrue(parameter1, parameter2) {
  return (parameter1 && parameter2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
// Desafio 3
function splitSentence(sentence) {
  let split = [];
  let index = 0;
  split[0] = '';
  for (let char of sentence) {
    if (char === ' ') {
      index += 1;
      split[index] = '';
    } else {
      split[index]+=char;
    }
  } 
  console.log (split);
  return split;
}

// Desafio 4
function concatName(nameArray) {
  return (nameArray[(nameArray.length - 1)]+ ', ' + nameArray[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties)
}

// Desafio 6
function highestCount(numbers) {
  let counter = 0;
  let highest;
  for (let currentNumber of numbers) {
    if ((currentNumber > highest) || (highest === undefined)){
      highest = currentNumber;
      counter = 1;
    } else if (currentNumber === highest) {
      counter += 1;
    }
  }
  console.log (counter);
  return (counter);
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
