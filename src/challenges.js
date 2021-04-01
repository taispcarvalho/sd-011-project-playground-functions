// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let array = str.split(' ');
  return array;
}

// Desafio 4
function concatName(array2 = []) {
  return `${array2[array2.length - 1]}, ${array2[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function findHighestNumber(numbers) {
  let maiorNum = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNum) maiorNum = numbers[i];
  }
  return maiorNum;
}

function highestCount(numbers) {
  let qtd = 0;
  let maiorNum = findHighestNumber(numbers);
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === maiorNum) qtd += 1;
  }
  return qtd;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1mouse = Math.abs(cat1 - mouse);
  let positionCat2mouse = Math.abs(cat2 - mouse);

  if (positionCat1mouse < positionCat2mouse) {
    return 'cat1';
  }
  if (positionCat2mouse < positionCat1mouse) {
    return 'cat2';
  }
  if (positionCat1mouse === positionCat2mouse) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function testFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
  if (number % 5 === 0) return 'buzz';
  if (number % 3 === 0) return 'fizz';
  return 'bug!';
}
function fizzBuzz(numbers) {
  let fizzBuzzers = [];
  for (let index = 0; index < numbers.length; index += 1) {
    fizzBuzzers.push(testFizzBuzz(numbers[index]));
  }
  return fizzBuzzers;
}

// Desafio 9
function encode(str) {
  for (let index = 0; index < str.length; index += 1) {
    str = str.replace('a', '1');
    str = str.replace('e', '2');
    str = str.replace('i', '3');
    str = str.replace('o', '4');
    str = str.replace('u', '5');
  }
  return str;
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
