// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let splittedArray = string.split(' ');
  return splittedArray;
}

// Desafio 4
function concatName(array) {
  let reversedArray = array.reverse();
  let newArray = [];
  newArray.push(reversedArray[0], reversedArray[reversedArray.length - 1]);
  let lastArray = newArray.join(', ');
  return lastArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = 0;
  let counter = 0;
  for (let index of array) {
    if (index > highestNumber) {
      highestNumber = index;
      counter = 1;
    } else if (index === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } return 'Os gatos trombam e o rato foge.';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayString = [];
  for (let index of array) {
    if (index % 3 === 0 && index % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (index % 3 === 0 & index % 5 !== 0) {
      arrayString.push('fizz');
    } else if (index % 5 === 0 & index % 3 !== 0) {
      arrayString.push('buzz');
    } else {
      arrayString.push('bug!');
    }
  }
  return arrayString;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {

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
