// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function biggestNumber(array) {
  let number = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > number) {
      number = array[index];
    }
  }
  return number;
}

function highestCount(array) {
  let count = 0;
  let x = biggestNumber(array);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === x) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCast1 = Math.abs(cat1 - mouse);
  let distanceCast2 = Math.abs(cat2 - mouse);
  let winner;

  if (distanceCast1 > distanceCast2) {
    winner = 'cat2';
  } else if (distanceCast2 > distanceCast1) {
    winner = 'cat1';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner;
}

// Desafio 8
function fizzBuzz(numberArray) {
  let newArray = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (numberArray[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (numberArray[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }  
  }
  return newArray;
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
