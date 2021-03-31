// Desafio 1
function compareTrue(param01, param02) {
  return param01 && param02;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
// Usando Template strings
function concatName(namesArray) {
  return `${namesArray[namesArray.length - 1]}, ${namesArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(numArray) {
  let maxNumber = Math.max(...numArray);
  let count = 0;
  for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] === maxNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  let result;
  if (cat1Distance === cat2Distance) {
    result = 'os gatos trombam e o rato foge';
  } else if (cat1Distance < cat2Distance) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
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
