// Desafio 1
function compareTrue(value, value2) {
  return value && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function higherNumberOfArray(arrayNumbers) {
  let higherNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higherNumber) {
      higherNumber = arrayNumbers[index];
    }
  }
  return higherNumber;
}

function highestCount(arrayNumbers) {
  let higherNumber = higherNumberOfArray(arrayNumbers);
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (higherNumber === arrayNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function distanceNegative(distance) {
  if (distanceCat1AndMouse < 0) {
    closer = distanceCat1AndMouse *= -1;
  } else if (distanceCat2AndMouse < 0) {
    closer = distanceCat2AndMouse *= -1;
  }
  return closer;
}

function catAndMouse(mouse, cat1, cat2) {
  let closer;
  let distanceCat1AndMouse = Math.abs(cat1 - mouse);
  let distanceCat2AndMouse = Math.abs(cat2 - mouse);

  if (distanceCat1AndMouse < distanceCat2AndMouse) {
    return 'cat1';
  }
  if (distanceCat2AndMouse < distanceCat1AndMouse) {
    return 'cat2';
  }
  
  return 'os gatos trombam e o rato foge';
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
