// Desafio 1
function compareTrue(val1, val2) {
  
  if (val1 && val2) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  
  return area = (base * height) / 2;
}


// Desafio 3
function splitSentence(word) {

  return arrWord = word.split(' ');;
}

// Desafio 4
function concatName(arrWords) {
  
  return arrWords2 = arrWords[arrWords.length - 1] + ', ' + arrWords[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  
  return hits = (3 * wins) + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
