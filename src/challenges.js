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
  let array = [];
  let stringCache = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      array.push(stringCache);
      stringCache = '';
    } else if (index === string.length - 1) {
      stringCache += string[index];
      array.push(stringCache);
    } else {
      stringCache += string[index];
    }
  }

  return array;
}

// Desafio 4
function concatName(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  let response = `${lastElement}, ${firstElement}`;
  return response;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

function finderBiggest(array) {
  let biggest = array[0];
  for (let number of array) {
    biggest = biggest > number ? biggest : number;
  }
  return biggest;
}

// Desafio 6
function highestCount(array) {
  let biggest = finderBiggest(array);
  let count = 0;
  for (let number of array) {
    if (number === biggest) count += 1;
  }
  return count;
}

function counterDistance(point1, point2) {
  let smallest = point1 < point2 ? point1 : point2;
  let biggest = point1 > point2 ? point1 : point2;
  let countDisctance = 0;
  for (smallest; smallest <= biggest; smallest += 1) {
    countDisctance += 1;
  }
  return countDisctance;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let countCat1 = counterDistance(cat1, mouse);
  let countCat2 = counterDistance(cat2, mouse);

  if (countCat1 !== countCat2) {
    return countCat1 < countCat2 ? 'cat1' : 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

function is3Multiple(number) {
  return number % 3 === 0;
}

function is5Multiple(number) {
  return number % 5 === 0;
}

function is3and5Multiple(number) {
  return is3Multiple(number) && is5Multiple(number);
}

function generateString(number) {
  let string = '';
  if (is3and5Multiple(number)) string = 'fizzBuzz';
  else if (is3Multiple(number)) string = 'fizz';
  else if (is5Multiple(number)) string = 'buzz';
  else string = 'bug!';

  return string;
}

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];
  for (let number of numbers) {
    let string = generateString(number);
    array.push(string);
  }
  return array;
}

function giverCrypto() {
  return { a: 1, e: 2, i: 3, o: 4, u: 5 };
}

function isProperty(wildcard) {
  let cryptography = giverCrypto();
  for (let key in cryptography) {
    if (key === wildcard) return true;
  }
  return false;
}

function finderCorresponding(wildChar) {
  let cryptography = giverCrypto();
  if (isProperty(wildChar)) {
    return cryptography[wildChar];
  }
  for (let key in cryptography) {
    if (cryptography[key] === wildChar) return key;
  }
}

// Desafio 9
function encode(string) {
  let cryptoString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (isProperty(string[index])) {
      cryptoString += finderCorresponding(string[index]);
    } else cryptoString += string[index];
  }
  return cryptoString;
}
function decode(string) {
  let cryptoString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] > 0 && string[index] < 6) {
      cryptoString += finderCorresponding(parseInt(string[index], 10));
    } else cryptoString += string[index];
  }
  return cryptoString;
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
