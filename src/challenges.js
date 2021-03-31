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
  for (let i = 0; i < arr.length; i += 1) {
    if (hgNumber < arr[i]) {
      hgNumber = arr[i];
    }
  }
  return hgNumber;
}

// Desafio 6
function highestCount(arrNumbers) {
  let highestNumber = highestNumberArray(arrNumbers);
  let count = 0;
  for (let i = 0; i < arrNumbers.length; i += 1) {
    if (highestNumber === arrNumbers[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = cat1 - mouse;
  let cat2Position = cat2 - mouse;

  if (cat1Position > cat2Position) return 'cat2';
  if (cat1Position < cat2Position) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

function fbDivider(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
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
  for (let i = 0; i < arrayVowel.length; i += 1) {
    if (letter === arrayVowel[i]) {
      return letter;
    }
  }
}

// Desafio 9
function encode(phrase) {
  let newString = '';

  for (let i = 0; i < phrase.length; i += 1) {
    if (identifyVowal(phrase.charAt(i))) {
      newString += changeLetter(phrase.charAt(i));
    } else {
      newString += phrase.charAt(i);
    }
  }
  return newString;
}

function decode(phrase) {
  let newString = '';
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase.charAt(i) > 0 && phrase.charAt(i) < 6) {
      newString += changeNumber(phrase.charAt(i));
    } else {
      newString += phrase.charAt(i);
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
