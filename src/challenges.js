// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(inicialArray) {
  return inicialArray[inicialArray.length - 1].concat(', ') + inicialArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  let repeatedNumber = 0;
  for (let index = 0; index < numbers.lenght; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  for (let index = 0; index < numbers.lenght; index += 1) {
    if (numbers[index] === highestNumber) {
      repeatedNumber += 1;
    }
  }
  return repeatedNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if ((distanceCat1) > (distanceCat2)) {
    return 'cat1';
  }
  if ((distanceCat1) < (distanceCat2)) {
    return 'cat2';
  }
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  function chekingFizzBuzz(randomNumber) {
    if (randomNumber % 3 === 0 && randomNumber % 5 === 0) { return 'fizzBuzz'; }
    if (randomNumber % 3 === 0) { return 'fizz'; }
    if (randomNumber % 5 === 0) { return 'buzz'; }
    return 'bug!';
  }
  function fizzBuzz(arrayNumber) {
    let newArray = [];
    for (let index = 0; index < arrayNumber.lenght; index += 1) {
      newArray.push(chekingFizzBuzz(arrayNumber[index]));
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
