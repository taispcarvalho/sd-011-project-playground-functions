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
  for (let index = 0; index <= phrase.length; index += 1) {
    if (phrase[index] === delimiter || index === phrase.length) {
      array.push(word);
      word = '';
    } else {
      word += phrase[index];
    }
  } return array
}

// Desafio 4
function concatName(array) {
  let out = '';
  let last = array.length - 1;
  out += array[last];

  for (let index = array.length; index >= 0; index -= 1) {
    if (index === 0) {
      out += ', ' + array[index];
    }
  } return out;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let atack1 = 0; let atack2 = 0; let result = null;

  if (cat1 < mouse) { atack1 = mouse - cat1; } 
  if (mouse < cat1) { atack1 = cat1 - mouse; }
  if (cat2 < mouse) { atack2 = mouse - cat2; }
  if (mouse < cat2) { atack2 = cat2 - mouse; } 
  if (atack1 < atack2) { result = 'cat1'; }
  else if (atack2 < atack1) { result = 'cat2'; }
  else { result = 'os gatos trombam e o rato foge'; }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  let string = '';

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      string = 'fizzbuzz';
    } else if (array[index] % 5 === 0) {
      string = 'buzz';
    } else if (array[index] % 3 === 0) {
      string = 'fizz';
    } else {
      string = 'bug!';
    } newArray.push(string);
  } return newArray;
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
