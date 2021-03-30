// Desafio 1
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Example: return condition ? true : false; but booleans are not necessary in ternary conditionals, so it's abreviate to just "return value1 && value2;".

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(word) {
  word = word.split(' ');
  return word;
}

// Desafio 4
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Reference2: https://www.digitalocean.com/community/tutorials/how-to-work-with-strings-in-javascript
// Reference3: https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
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
