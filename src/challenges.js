// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(splitPhase) {
  let splitArray = splitPhase.split(' ');
  return splitArray;
}

// Desafio 4
function concatName(arrayName) {
  let concatArray =  arrayName[arrayName.length - 1] + ',' + arrayName[0];
  return concatArray;
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
  if (mouse - cat1 === mouse - cat2){
    return 'os gatos trombam e o rato foge';
  } else if (mouse - cat1 > mouse - cat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}
console.log(catAndMouse(6, 4, 5))
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
