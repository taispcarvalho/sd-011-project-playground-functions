// Desafio 1
function compareTrue(valueOne, valueTwo) {
  return valueOne && valueTwo;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayString1) {
  return `${arrayString1[arrayString1.length - 1]}, ${arrayString1[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arrayNumber) {
  let newOrder = arrayNumber.sort();
  let highestNumber = newOrder[newOrder.length - 1];
  let repetition = 0;
  for (let number in newOrder) {
    if (newOrder[number] === highestNumber) {
      repetition += 1;
    }
  }
  return repetition;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2) {
    return 'cat1';
  }
  else if (distance2 < distance1) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumber1) {
  let fizzBuzzArray = [];
  for (let number = 0;number <= arrayNumber1.length - 1;number += 1) {
    if (arrayNumber1[number] % 3 === 0) {
      fizzBuzzArray.push ('fizz');
    }
    else if (arrayNumber1[number] % 5 === 0) {
      fizzBuzzArray.push ('buzz');
    }
    else if (arrayNumber1[number] % 15 === 0) {
      fizzBuzzArray.push ('fizzBuzz');
    }
    else {
      fizzBuzzArray.push ('bug!');
    }
  }
  return fizzBuzzArray;
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
