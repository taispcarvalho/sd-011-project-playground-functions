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
function fizzBuzz(arr) {
  let array = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (arr[index] % 5 === 0) {
      array.push('buzz');
    } else if (arr[index] % 3 === 0) {
      array.push('fizz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}
let lista = [2, 15, 7, 9, 45];
console.log(fizzBuzz(lista));
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
