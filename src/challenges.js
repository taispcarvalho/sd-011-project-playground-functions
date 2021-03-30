// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}
// desafio 3 resolvido com base neste linked
// https://tutorial.eyehunts.com/js/javascript-split-string-based-delimiter-comma-space/

// Desafio 4
function concatName(strArray) {
  return `${strArray[strArray.length - 1]}, ${strArray[0]}`;
}

// part of Desafio 5
function winPoints(wins) {
  let winsPoints = 0;
  if (wins !== 0) {
    for (let i = 0; i < wins; i += 1) {
      winsPoints += 3;
    }
  }
  return winsPoints;
}

// part of Desafio 5
function tiePoints(ties) {
  let tiesPoints = 0;

  if (ties !== 0) {
    for (let j = 0; j < ties; j += 1) {
      tiesPoints += 1;
    }
  }
  return tiesPoints;
}

// Desafio 5
function footballPoints(wins, ties) {
  return winPoints(wins) + tiePoints(ties);
}

// part of Desafio 6
function higherNumber(valueArray) {
  let highNumber = 0;
  for (let value in valueArray) {
    if (valueArray[value] > highNumber) highNumber = valueArray[value];
  }
  return highNumber;
}

// part of Desafio 6
function repeatCount(number, valueArray) {
  let repeatTime = 0;
  for (let value of valueArray) {
    if (value === number) repeatTime += 1;
  }
  return repeatTime;
}

// Desafio 6
function highestCount(valueArray) {
  return repeatCount(higherNumber(valueArray), valueArray);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceBetweenCat1 = Math.abs(mouse - cat1);
  let distanceBetweenCat2 = Math.abs(mouse - cat2);

  return distanceBetweenCat1 > distanceBetweenCat2 ? 'cat2'
    : distanceBetweenCat1 < distanceBetweenCat2 ? 'cat1'
    : 'os gatos trombam e o rato foge';
}
// exercício resolvido usando essa referência base:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

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
