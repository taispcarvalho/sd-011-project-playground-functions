// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let sentencesArray = sentence.split(' ');
  return sentencesArray;
}

// Desafio 4
function concatName(nameArray) {
  let firstName = nameArray[0];
  let lastNameArrayPosition = nameArray.length - 1;
  let lastName = nameArray[lastNameArrayPosition];

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(numberArray) {
  let accumulator = 0;
  let counter = 0;

  for (let i = 0; i < numberArray.length; i += 1) {
    let currentValue = numberArray[i];

    if (accumulator < currentValue) {
      accumulator = currentValue;
      counter = 1;
    } else if (accumulator === currentValue) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceFromCat1 = Math.abs(mouse - cat1);
  let distanceFromCat2 = Math.abs(mouse - cat2);

  if (distanceFromCat1 < distanceFromCat2) {
    return 'cat1';
  }
  if (distanceFromCat1 > distanceFromCat2) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzzValidate(fizzString, buzzString, fizzBuzzString) {
  if (fizzString) {
    return 'fizz';
  }
  if (buzzString) {
    return 'buzz';
  }
  if (fizzBuzzString) {
    return 'fizzBuzz';
  }

  return 'bug!';
}

function fizzBuzz(numericArray) {
  let fizzBuzzArray = [];

  for (let index = 0; index < numericArray.length; index += 1) {
    let currentNumber = numericArray[index];

    let currentfizz = currentNumber % 3 === 0 && currentNumber % 5 !== 0;
    let currentbuzz = currentNumber % 5 === 0 && currentNumber % 3 !== 0;
    let currentfizzBuzz = currentNumber % 3 === 0 && currentNumber % 5 === 0;
    let value = fizzBuzzValidate(currentfizz, currentbuzz, currentfizzBuzz);

    fizzBuzzArray.push(value);
  }
  return fizzBuzzArray;
}

// Desafio 9
function splitSentences(sentence) {
  let letterArray = sentence.split('');
  return letterArray;
}

function joinSentences(letterArray) {
  let sentence = letterArray.join(',');
  return sentence;
}

function changeLetters(currentLetter, vogalToVerify, numberToReplace) {
  if (currentLetter === vogalToVerify) {
    return numberToReplace;
  }
  return currentLetter;
}

function encode(phrase) {
  let splittedSentence = splitSentences(phrase);

  let vogalsArray = ['a', 'e', 'i', 'o', 'u'];
  let numbersArray = ['1', '2', '3', '4', '5'];

  for (let index = 0; index < splittedSentence.length; index += 1) {
    let letter = splittedSentence[index];

    for (let jIndex = 0; jIndex < vogalsArray.length; jIndex += 1) {
      let vogal = vogalsArray[jIndex];
      let number = numbersArray[jIndex];
      letter = changeLetters(letter, vogal, number);
      splittedSentence[index] = letter;
    }
  }
  let encodedPhrase = joinSentences(splittedSentence);
  return encodedPhrase;
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
