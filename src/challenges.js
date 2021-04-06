// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  let totalArea = (base * height) / 2;
  return totalArea;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (3 * wins) + ties;
  return result;
}

// Desafio 6
function highestCount(array) {
  let repeatNumber = 0;
  let highestNumber = Math.max.apply(null, array);
  for (let index = 0; index < array.length; index += 1) {
    if (highestNumber === array[index]) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if (Math.abs(distanceCat1) > Math.abs(distanceCat2)) {
    return 'cat2';
  } if (Math.abs(distanceCat1) < Math.abs(distanceCat2)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

function fizzBuzzValidator(value) {
  let encodedString = '';
  if (value % 15 === 0) {
    encodedString += 'fizzBuzz';
  } else if (value % 5 === 0) {
    encodedString += 'buzz';
  } else if (value % 3 === 0) {
    encodedString += 'fizz';
  } else {
    encodedString += 'bug!';
  }
  return encodedString;
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let fizzBuzzReturn = fizzBuzzValidator(array[index]);
    newArray.push(fizzBuzzReturn);
  }
  return newArray;
}

// Desafio 9
function encode(word) {
  for (let index = 0; index < word.length; index += 1) {
    word = word
      .replace('a', 1)
      .replace('e', 2)
      .replace('i', 3)
      .replace('o', 4)
      .replace('u', 5);
  }
  return word;
}

function decode(word) {
  for (let index = 0; index < word.length; index += 1) {
    word = word
      .replace(1, 'a')
      .replace(2, 'e')
      .replace(3, 'i')
      .replace(4, 'o')
      .replace(5, 'u');
  }
  return word;
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
