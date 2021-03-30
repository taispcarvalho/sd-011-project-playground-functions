// Desafio 1
function compareTrue(valor1, valo2) {
  return valor1 && valo2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(names) {
  let firstAndLast = [];
  firstAndLast.push(names[names.length - 1], ' ' + names[0]);
  return firstAndLast.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  let higherNum = 0;
  let timesNum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNum) {
      higherNum = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherNum) {
      timesNum += 1;
    }
  }
  return timesNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let winner = '';
  if (distCat1 === distCat2) {
    winner = 'os gatos trombam e o rato foge';
  } else if (distCat2 > distCat1) {
    winner = 'cat1';
  } else {
    winner = 'cat2';
  }
  return winner;
}

// Desafio 8
function fizzBuzz (numbers) { 
  let phrase = []
  for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] %3 === 0 && numbers[index] %5 === 0) {
      phrase.push ('fizzBuzz');
    } else if (numbers[index] %3 === 0) {
      phrase.push ('fizz');
    } else if (numbers[index] %5 === 0) {
      phrase.push ('buzz')
    } else {
      phrase.push ('bug!')
    }
  
    }
    return phrase
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
