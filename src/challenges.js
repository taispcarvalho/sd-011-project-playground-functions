// Matheus Antonio - Zeonnatios
// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(strArr) {
  return `${strArr[strArr.length - 1]}, ${strArr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

function highestNumberArray(arr) {
  let hgNumber = arr[0];
  for (let index = 0; index < arr.length; index += 1) {
    if (hgNumber < arr[index]) {
      hgNumber = arr[index];
    }
  }
  return hgNumber;
}

// Desafio 6
function highestCount(arrNumbers) {
  let highestNumber = highestNumberArray(arrNumbers);
  let count = 0;
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (highestNumber === arrNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);

  if (cat1Position > cat2Position) return 'cat2';
  if (cat1Position < cat2Position) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

function fbDivider(num) {
  if ((num % 3 === 0) && (num % 5 === 0)) return 'fizzBuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return 'bug!';
}

// Desafio 8
function fizzBuzz(numbersArr) {
  let fizzBuzzArr = [];

  for (let num of numbersArr) {
    fizzBuzzArr.push(fbDivider(num));
  }
  return fizzBuzzArr;
}

function changeLetter(letter) {
  if (letter === 'a') {
    return '1';
  }
  if (letter === 'e') {
    return '2';
  }
  if (letter === 'i') {
    return '3';
  }
  if (letter === 'o') {
    return '4';
  }
  return '5';
}

function changeNumber(number) {
  if (number === '1') {
    return 'a';
  }
  if (number === '2') {
    return 'e';
  }
  if (number === '3') {
    return 'i';
  }
  if (number === '4') {
    return 'o';
  }
  return 'u';
}

function identifyVowal(letter) {
  let arrayVowel = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < arrayVowel.length; index += 1) {
    if (letter === arrayVowel[index]) {
      return letter;
    }
  }
}

// Desafio 9
function encode(phrase) {
  let newString = '';

  for (let index = 0; index < phrase.length; index += 1) {
    if (identifyVowal(phrase.charAt(index))) {
      newString += changeLetter(phrase.charAt(index));
    } else {
      newString += phrase.charAt(index);
    }
  }
  return newString;
}

function decode(phrase) {
  let newString = '';
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase.charAt(index) > 0 && phrase.charAt(index) < 6) {
      newString += changeNumber(phrase.charAt(index));
    } else {
      newString += phrase.charAt(index);
    }
  }
  return newString;
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
