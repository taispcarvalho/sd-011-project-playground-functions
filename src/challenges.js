// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let array = [];
  let word = '';
  let delimiter = ' ';
  
  for(index = 0; index <= phrase.length; index += 1){
    if (phrase[index] === delimiter || index == phrase.length){
      array.push(word);
      word = '';
    } else {
      word = word + phrase[index];
    } return array
  }
}

// Desafio 4
function concatName() {
  let out = [];
  let last =  array.length - 1;

  for (let index = array.length; index >= 0; index -= 1) {
    if (index == 0) {
      out.push(array[index]);
    }
  } return out;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
