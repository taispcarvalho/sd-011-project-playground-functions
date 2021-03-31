// Desafio 1
// Reference:
// Conditional Ternary: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
function compareTrue(value1, value2) {
  return value1 && value2; /* Example: return condition ? true : false; but booleans are not necessary in ternary conditionals,
                              so it's could be abreviate to just "return value1 && value2;". */
}

// Desafio 2
// Basic math.
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
// Reference:
// .split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
// References:
// Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Ways to declare string: https://www.digitalocean.com/community/tutorials/how-to-work-with-strings-in-javascript
// Print the Last Item in Arrays: https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array
function concatName(arrayText) {
  return `${arrayText[arrayText.length - 1]}, ${arrayText[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties; // technically, it's (wins * 3) + (ties * 1), but basic math abreviation
}

// D6 Auxiliary Function
// Function to take the higher number
function highestNumber(numbers) {
  let highNumber = 0;
  for (let i in numbers) {
    if (numbers[i] >= highNumber) highNumber = numbers[i];
  }
  return highNumber;
}

// Desafio 6
// Counter for numbers of times the higher number appears
function highestCount(numbers) {
  let count = 0;
  let highNumber = highestNumber(numbers);
  for (let i in numbers) if (highNumber === numbers[i]) count += 1;
  return count;
}

// Desafio 7
// Who has the smaller distance, wins
// Math.abs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse); // Math.abs is like math's modulus, not return negative numbers
  let distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 === distCat2) return 'os gatos trombam e o rato foge';
  if (distCat1 < distCat2) return 'cat1';
  if (distCat2 < distCat1) return 'cat2';
}

// D8 Auxiliary Function
// If divisible by 3, fizz, by 5 buzz, by 15 (which is the same as by 3 and 5) fizzBuzz
// And if is not, bug!
// LCD: https://en.wikipedia.org/wiki/Lowest_common_denominator
function fbLoop(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    switch (true) { // switch had to be used to avoid Code Complexilibity
    case (numbers[i] % 15 === 0):
      result.push('fizzBuzz');
      break;
    case (numbers[i] % 5 === 0):
      result.push('buzz');
      break;
    case (numbers[i] % 3 === 0):
      result.push('fizz');
      break;
    default:
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = fbLoop(numbers);
  return result;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
// References:
// .replace: https://www.w3schools.com/jsref/jsref_replace.asp
function encode(word) {
  for (let i = 0; i < word.length; i += 1) {
    word = word
      .replace('a', 1)
      .replace('e', 2)
      .replace('i', 3)
      .replace('o', 4)
      .replace('u', 5);
  }
  return word;
}
function decode(word) {
  for (let i = 0; i < word.length; i += 1) {
    word = word
      .replace(1, 'a')
      .replace(2, 'e')
      .replace(3, 'i')
      .replace(4, 'o')
      .replace(5, 'u');
  }
  return word;
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
