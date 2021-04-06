// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  return array.length , array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catWinner;
  if (mouse - cat1 > mouse - cat2){
    catWinner = 'cat2';
  } else if (mouse - cat1 < mouse - cat2){
    catWinner = 'cat1';
  } else {
    catWinner = 'Os gatos trombam e o rato foge.';
  }
  return catWinner;
}

// Desafio 8
function fizzBuzzSecond(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 5 === 0) {
      array[index] = 'buzz';
    } else if (array[index] > 0 || array[index] < 0) {
      array[index] = 'bug!';
    }
  }
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
