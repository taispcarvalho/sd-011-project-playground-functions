// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherthNumber = arrayNumbers[0];
  for( let index = 0; index < arrayNumbers.length; index += 1 ){
  if( arrayNumbers[index] > higherthNumber ){
  higherthNumber = arrayNumbers[index];
  }
  }
  let timesNumberAppears = 0;
  for( let index = 0; index < arrayNumbers.length; index += 1 ){
  if( arrayNumbers[index] === higherthNumber ){
  timesNumberAppears = timesNumberAppears + 1;
  }
  }
  return timesNumberAppears;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if( Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse) ) {
    return 'cat2';
  } else if( Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse) ) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  
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
