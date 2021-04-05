// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let arrayPhrase = phrase.split(' ');
  return arrayPhrase;
}

// Desafio 4
function concatName(name) {
  let stringName = [];
  for (let index = 0; index <= name.length; index += 1) {
    name.toString((index = name.length - 1) + (index = 0));
  // let stringName = name[name.length - 1] + ',' + name[0];
  } return stringName.toString();
}
// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function acharMaiorNumero(maximNumber) {
  let high = [];
  for (let index = 0; index < maximNumber.length; index += 1) {
    high = Math.max(...maximNumber);
  } return high;
} console.log(acharMaiorNumero([9, 1, 2, 3, 9, 5, 7]));

function highestCount(maximNumber) {
  let counter = [];
  for (let index = 0; index < maximNumber.length; index += 1) {
    counter.push(acharMaiorNumero([index]));
  } return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winner = 0;
  if (mouse - cat1 > mouse - cat2) {
    winner = 'cat2';
  } else if (mouse - cat1 < mouse - cat2) {
    winner = 'cat1';
  } else {
    winner = 'os gatos trombam e o rato foge';
  } return winner;
} // console.log(catAndMouse(5, 2, 2));

// Desafio 8
function returnString(numbers) {
  let string = 0;
  if (numbers % 15 === 0) {
    string = 'fizzbuzz';
  } if (numbers % 5 === 0) {
    string = 'buzz';
  } else if (numbers % 3 === 0) {
    string = 'fizz';
  } else {
    string = 'bug!';
  } return (string);
}
function fizzBuzz(stringArray) {
  let finalResult = [];
  for (let index = 0; index < stringArray.length; index += 1) {
    finalResult.push(returnString(stringArray[index]));
  }
  return finalResult;
} // console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
}