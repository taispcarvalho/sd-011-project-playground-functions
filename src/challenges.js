// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2
}
console.log(compareTrue(true, false))
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  return base * height /2
}
console.log(calcArea(10, 50))
console.log(calcArea(5, 2))
console.log(calcArea(51, 1))

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
console.log(splitSentence('go trybe'))
console.log(splitSentence('vamo que vamo'))
console.log(splitSentence('foguete'))

// Desafio 4
function concatName(concat) {
  return concat[concat.length -1] + ', ' + concat[0];
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}
console.log(footballPoints(14, 8))
console.log(footballPoints(1, 2))
console.log(footballPoints(0, 0))


// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  for (let index of array) {
    if (index > highestNumber) {
      highestNumber = index;
    }
  }
  let counter = 0;
  for (let indexCounter in array) {
    if (array[indexCounter] === highestNumber) {
      counter += 1
    }
  }
  return counter;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat1 > distCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 2, 2));

// Desafio 8
function fizzBuzz(arrayNumbers) {
  for (let index =0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      arrayNumbers[index] = 'fizzBuzz';
    } else if (arrayNumbers[index] % 3 === 0) {
      arrayNumbers[index] = 'fizz';
    } else if (arrayNumbers[index] % 5 === 0) {
      arrayNumbers[index] = 'buzz';
    } else {
      arrayNumbers[index] = 'bug!';
    }
  }
  return arrayNumbers;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

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
