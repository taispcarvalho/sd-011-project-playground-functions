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
  return string.split(' ');
  
}

// Desafio 4
function concatName(array) {
  let space = '';
  return space.concat(array[array.length-1] + ', ' + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let max = Math.max(...numbers); let count = 0;
  for (let num of numbers) {
    if (num === max) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse; let distanceCat2 = cat2 - mouse;
  if (distanceCat1 > distanceCat2) {
    let winnerCat = 'cat2'
  } else if (distanceCat2 > distanceCat1) {
    let winnerCat = 'cat1';
  } else if (distanceCat1 === distanceCat2) {
    let winnerCat =  'os gatos trombam e o rato foge';
  }
  return winnerCat;
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
