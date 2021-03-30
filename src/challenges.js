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
// References:
// Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Forms to declare string: https://www.digitalocean.com/community/tutorials/how-to-work-with-strings-in-javascript
// Print the Last Item in Arrays: https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// D6 Auxiliary Function
function highestNumber(array) {
  let highNumber = 0;
  for (let i in array) if (array[i] >= highNumber) highNumber = array[i];
  return highNumber;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0; let highNumber = highestNumber(numbers);
  for (let i in numbers) if (highNumber === numbers[i]) count += 1;
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 === distCat2) return 'os gatos trombam e o rato foge';
  if (distCat1 < distCat2) return 'cat1';
  if (distCat2 < distCat1) return 'cat2';
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
