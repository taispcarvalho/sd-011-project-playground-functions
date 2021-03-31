// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base,height) {
  return (base * height)/2
}
console.log(calcArea(5, 10));

// Desafio 3
//https://www.w3schools.com/jsref/jsref_split.asp//
function splitSentence(sentence) {
return sentence.split(" ");
}
console.log(splitSentence('Vivian Maria Braga'));

// Desafio 4
function concatName(names) {
  return (names[names.length-1] + ', ' +names[0]);
}
console.log(concatName(['Vivian', 'Maria', 'Braga']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}
console.log(footballPoints(14,8));

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
