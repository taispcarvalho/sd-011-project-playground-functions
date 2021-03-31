// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}
console.log(compareTrue(true, false));
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));
// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
console.log(splitSentence('go Trybe'));
// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}
console.log(concatName(['captain', 'my', 'captain']));
// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}
console.log(footballPoints(2, 1));
// Desafio 6
function getHighest(numbers) {
  let highestNumber = numbers[0];
  for (let number of numbers) {
    if (number > highestNumber) {
      highestNumber = number;
    }
  }
  return highestNumber;
}

function countElement(numbers, element) {
  let count = 0;
  for (let number of numbers) {
    if (number === element) {
      count += 1;
    }
  }
  return count;
}

function highestCount(arr) {
  let highest = getHighest(arr);
  return countElement(arr, highest);
}

let listaDeNumeros = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(listaDeNumeros));
// Desafio 7
function catAndMouse(mousePosition, catOnePosition, catTwoPosition) {
  let distanciaCat1 = Math.abs(catOnePosition - mousePosition);
  let distanciaCat2 = Math.abs(catTwoPosition - mousePosition);
  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }
  if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(10, 4, 22));
// Desafio 8
function fizzBuzzElement(number) {
  if (number % 15 === 0) return 'fizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return 'bug!';
}

function fizzBuzz(arr) {
  let newArr = [];
  for (let number of arr) {
    newArr.push(fizzBuzzElement(number));
  }
  return newArr;
}

let lista = [2, 15, 7, 9, 45];
console.log(fizzBuzz(lista));
// Desafio 9
function encodeElement(letter) {
  if (letter === 'a') return '1';
  if (letter === 'e') return '2';
  if (letter === 'i') return '3';
  if (letter === 'o') return '4';
  if (letter === 'u') return '5';
  return letter;
}

function encode(string) {
  let newArray = '';
  for (let letter of string) {
    newArray += encodeElement(letter);
  }
  return newArray;
}

function decodeElement(letter) {
  if (letter === '1') return 'a';
  if (letter === '2') return 'e';
  if (letter === '3') return 'i';
  if (letter === '4') return 'o';
  if (letter === '5') return 'u';
  return letter;
}

function decode(string) {
  let newArray = '';
  for (let letter of string) {
    newArray += decodeElement(letter);
  }
  return newArray;
}

console.log(decode('h3, th2r2'));
console.log(encode('hi, there'));
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
