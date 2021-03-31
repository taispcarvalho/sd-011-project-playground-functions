// Desafio 1
function compareTrue(boo1, boo2) {
  // seu código aqui
  return boo1 && boo2;
}

console.log(compareTrue('True', 'True'));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

console.log(calcArea(10, 10));

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(' ');
}

console.log(splitSentence('Vamo que vamo!'));

// Desafio 4
function concatName(names) {
  // seu código aqui
  return names[names.length - 1] + ', ' + names[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

console.log(footballPoints(1, 2));

// Desafio 6
function higherNumber(numbers) {
  let higher = numbers[0];
  for (let key of numbers) {
    if (key > higher) {
      higher = key;
    }
  }
  return higher;
}

console.log(higherNumber([9, 1, 2, 3, 9, 5, 7]));

function highestCount(numbers) {
  // seu código aqui
  let counter = 0;
  for (let key of numbers) {
    if (key === higherNumber(numbers)) {
      counter += 1;
    }
  }
  return counter;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1dist = 0;
  let cat2dist = 0;

  if (cat1 > mouse){
    for (mouse; mouse < cat1; mouse += 1){
      cat1dist += 1;
    }
  } else if (mouse > cat1) {
    for (cat1; cat1 < mouse; cat1 += 1){
      cat1dist += 1;
    }
  }

  if (cat2 > mouse){
    for (mouse; mouse < cat2; mouse += 1){
      cat2dist += 1;
    }
  } else if (mouse > cat2) {
    for (cat2; cat2 < mouse; cat2 += 1){
      cat2dist += 1;
    }
  }

  if (cat1dist > cat2dist) {
    return 'cat2'
  } else if (cat1dist < cat2dist) {
    return 'cat1'
  } else if (cat1dist === cat2dist) {
    return 'os gatos trombam e o rato foge'
  }

}

console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
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
