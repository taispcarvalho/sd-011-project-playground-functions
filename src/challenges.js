// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let words = [];
  let word = '';

  for (let index = 0; index < frase.length; index += 1) {
    let letter = frase[index];

    if (letter !== ' ') {
      word += letter;
    } else if (word !== '') {
      words.push(word);
      word = '';
    }
  }

  if (word !== '') {
    words.push(word);
  }

  return words;
}

// Desafio 4
function concatName(array) {
  let lastItem = array[array.length - 1];
  let firstItem = array[0];
  let itens = lastItem + ', ' + firstItem;
  return itens;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }

  let count = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catWinner;
  if (mouse - cat1 > mouse - cat2) {
    catWinner = 'cat2';
  } else if (mouse - cat1 < mouse - cat2) {
    catWinner = 'cat1';
  } else {
    catWinner = 'Os gatos trombam e o rato foge.';
  }
  return catWinner;
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
