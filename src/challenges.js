// Desafio 1
function compareTrue(boo1, boo2) {
  return boo1 && boo2;
}
console.log(compareTrue(false,true));


// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(phrase) {
  let arrayPhrase = phrase.split(' ');
  return arrayPhrase;
}
console.log(splitSentence('go trybe'))

// Desafio 4
function concatName(...arrayName) {
  let name = arrayName[arrayName.length -1].concat(', ' + arrayName[0]);
 return name;
}
console.log(concatName('captain', 'my', 'captain'));
// Desafio 5
function footballPoints(wins, ties) {
  let points=(wins * 3)+ ties;
  return points;
}
console.log(footballPoints(0,0));

// Desafio 6
function highestCount() {
  
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
