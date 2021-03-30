// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
  return true;
} else {
  return false;
} } ;

// Desafio 2
function calcArea(base, height) {
 return (base * height) / 2;
};

// Desafio 3 // referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(string) {
  return string.split(' ');
};

// Desafio 4
function concatName(strings) {
  let firstString = strings[0];
  let laststring = strings[strings.length -1];
  return laststring + ', ' + firstString;
};

// Desafio 5
function footballPoints(wins, ties) {
  let resultWins = wins * 3;
  return resultWins + ties;
};

// Desafio 6
function findMaxNumber (numbers) { 
  let maxNumber = numbers[0];
  for (let index = 0 ; index < numbers.length; index += 1) { 
  if (numbers[index] > maxNumber) {
    maxNumber = numbers[index];
  }
}
  return maxNumber;
} 
function highestCount(numbers) {
  let numbersOfNumbers = 0;
  for(let index = 0; index < numbers.length; index += 1) {
  if (findMaxNumber(numbers) === numbers[index]) {
    numbersOfNumbers += 1;
  }
} 
return numbersOfNumbers;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
