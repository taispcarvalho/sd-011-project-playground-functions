// Desafio 1

function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2

function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}

// Desafio 3

function splitSentence(palavra) {
  return palavra.split(' ');
}

// Desafio 4

function concatName(string) {
  let first = string[0];
  let last = string[string.length-1]
  return last + ',' + ' ' + first;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5

function footballPoints(wins, ties) {
  return (wins * 3 + ties * 1);
}

// Desafio 6

function highestCount(array) {
  let higherNumber = 0;
  let repeatNumber = 0;
  for (let highIndex = 0; highIndex < array.length; highIndex += 1) {
    let possibleHigherNumber = higherNumber;
    higherNumber = array[highIndex];
    if (higherNumber < possibleHigherNumber) {
      higherNumber = possibleHigherNumber;
    }
  }
  for (let countIndex = 0; countIndex < array.length; countIndex += 1) {
    if (higherNumber === array[countIndex]) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;


  if(Math.abs(distanceCat1) > Math.abs (distanceCat2)) {
    return 'cat2';
  } else if(Math.abs(distanceCat1) < Math.abs (distanceCat2)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8

function secondFizzBuzz(numbers) {
    let text = 0;
    if (numbers % 15 === 0) {
      text = 'fizzBuzz';
    } else if (numbers % 3 === 0) {
      text = 'fizz';
    } else if (numbers % 5 === 0) {
      text = 'buzz';
    } else {
      text = ('bug');
    }
    return text;
}

function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {

    result.push (secondFizzBuzz(array[index]));
  }
  return result;
}


// Desafio 9
function encode() {
  // seu código aqu
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
