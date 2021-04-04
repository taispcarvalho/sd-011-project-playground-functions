// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

console.log(compareTrue(true, false));
console.log(compareTrue(false, true));
console.log(compareTrue(true, true));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  let words = [];
  let cutSpace = '';

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] === ' ') {
      words.push(cutSpace);
      cutSpace = '';
    } else if (index === sentence.length - 1) {
      cutSpace += sentence[index];
      words.push(cutSpace);
    } else {
      cutSpace += sentence[index];
    }
  }
  return words;
}
console.log(splitSentence('Go Trybe'));
console.log(splitSentence('Vamo que vamo'));
console.log(splitSentence('foquete'));

// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1];

  let reverseName = `${lastName}, ${firstName}`;
  return reverseName;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 === cat2) {
    return 'The cats bump and the mouse scape';
  }
  if (cat1 > cat2) {
    return 'cat2';
  }
  return 'cat1';
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 2, 2));

// Desafio 8
function fizzBuzz(numbers) {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    return 'fizzBuzz';
  }

  if (numbers % 3 === 0) {
    return 'fizz';
  }

  if (numbers % 5 === 0) {
    return 'buzz';
  }

  return 'bug!';
}

function saveFizzBuzz(saveNumbers) {
  let arrayFizzBuzz = [];

  for (let index of saveNumbers) {
    arrayFizzBuzz.push(fizzBuzz(index));
  }
  return arrayFizzBuzz;
}
console.log(saveFizzBuzz([2, 15, 7, 9, 45]));
console.log(saveFizzBuzz([7, 9]));
console.log(saveFizzBuzz([9, 25]));

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
