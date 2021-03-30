// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let answer = [];
  let word = '';

  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] == ' ' || index == sentence.length - 1) {
      if (index == sentence.length - 1) {
        word += sentence[index];
      }
      answer.push(word);
      word = '';
    } else {
      word += sentence[index];
    }  
  }

  return answer;
}

// Desafio 4
function concatName(names) {
  let answerArray = [];

  for (let name of names) {
    if (names.indexOf(name) == 0 || names.indexOf(name) == names.length - 1) {
      answerArray.push(name);
    }
  }

  return answerArray[1] + ', ' + answerArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Auxiliar function for Desafio 6
// Written by myself for day 4.4 exercises
function getBiggestNumberIndex(numbers) {
  let biggestNumber;
  let biggestNumberIndex;

  if (numbers.length == 0) {
    biggestNumberIndex = null;
  } else {
    for (var index = 0; !numbers[index]; index += 1) ;
    biggestNumber = numbers[index];
    biggestNumberIndex = index;
    for (let number of numbers) {
      if (numbers[numbers.indexOf(number)] > biggestNumber) {
        biggestNumberIndex = numbers.indexOf(number);
      }
    }
  }

  return biggestNumberIndex;
}

// Desafio 6
function highestCount(numbers) {
  let numberFrequencies = [];

  for (let number of numbers) {
    if(!numberFrequencies[number]) {
      numberFrequencies[number] = 1;
    } else {
      numberFrequencies[number] += 1;
    }
  }

  return numberFrequencies[numberFrequencies.length - 1];
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

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
