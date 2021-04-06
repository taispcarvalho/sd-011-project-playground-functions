// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
} // console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} // console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(phrase) {
  let arrayPhrase = phrase.split(' ');
  return arrayPhrase;
} // console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayString) {
  let newString = 0;
  for (let index = 0; index < arrayString.length; index += 1) {
    newString = ((arrayString[arrayString.length - 1]) + ', ' + (arrayString[0]));
    newString.toString();
  } return newString;
} // console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
} // console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(maximNumber) {
  maximNumber.sort();
    let high = [];
    let count = 0;
  for (let index = 0; index < maximNumber.length; index += 1) {
    high = Math.max(...maximNumber);
    if (maximNumber[index] === high) {
      count += 1;
    }
  } return count;
} // console.log(highestCount([0, 0, 0]));

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
};