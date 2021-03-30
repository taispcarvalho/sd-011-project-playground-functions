// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(str) {
  let array;
  array = str.split(' ');
  return array;
}

console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(strArray) {
  let strNames = '';
  for (let i = 0; i < strArray.length; i += 1) {
    if (i === 0 || i === strArray.length - 1) {
      strNames = `${strArray[strArray.length - 1]}, ${strArray[0]}`;
    }
  }
  return strNames;
}

let namesArray = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(namesArray));

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins >= 1 || ties >= 1) {
    points = (3 * wins) + (1 * ties);
  }
  return points;
}

console.log(footballPoints(1, 2));

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
