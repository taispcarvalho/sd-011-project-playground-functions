// Desafio 10
// References:
// sort(): https://www.w3schools.com/jsref/jsref_sort.asp
// Objects: https://www.w3schools.com/js/js_objects.asp
function techList(tech, name) {
  let result = [];
  let list = tech.sort(); // 'list' recieve 'tech' sorted

  if (list.length !== 0) { // if list.length is different from zero, it's ok to continue
    for (let i = 0; i < list.length; i += 1) {
      result.push({ tech: list[i], name }); // just print the object in a for loop
    }
  } else result = 'Vazio!';

  return result;
}

// D11 Auxiliary Functions
// References:
// Arrow functions: https://www.w3schools.com/js/js_arrow_function.asp
// How to Get all Non-Unique Values: https://stackoverflow.com/questions/840781/get-all-non-unique-values-i-e-duplicate-more-than-one-occurrence-in-an-array
// slice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// I used Arrow Functions just to try to lessen the code's complexity, and to learn how to use it, no particular use.
const lengthValidation = (phone) => {
  if (phone.length !== 11) return true;
  return false;
};

const digitValidation = (phone) => {
  let invalid = false;
  for (let i = 0; i < phone.length; i += 1) {
    if (phone[i] > 9 || phone[i] < 0) {
      invalid = true;
    }
  }
  return invalid;
};

// slice() gets a copy of the array to not mess with the code, adding the sort() method with a basic function to work corretly with numbers,
// cause the standard behaviour is for alphabetic order of strings
// Reference:
// sort() with function for numbers: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
const counterValidation = (phone, count) => {
  let invalid = false;
  let sorted = phone.slice().sort((a, b) => a - b);
  count = 0;
  for (let i = 0; i < sorted.length - 1; i += 1) { // thanks to Stackoverflow, I have learn how to count the repeated numbers without using two fors loops
    if (sorted[i] === sorted[i + 1]) count += 1;
    if (count >= 3) invalid = true;
  }
  return invalid;
};

// Desafio 11
// References:
// Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Break Lines in TL: https://stackoverflow.com/questions/37321047/wrap-long-template-literal-line-to-multiline-without-creating-a-new-line-in-the
function generatePhoneNumber(phone) {
  let result;
  let count = 0;
  if (lengthValidation(phone)) {
    result = 'Array com tamanho incorreto';
  } else if (digitValidation(phone)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else if (counterValidation(phone, count)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}`
    + `${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
  }
  return result;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 8, 9]));

// Desafio 12
// References:
// Math.abs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB, lineC) {
  let lines = []; // empty array for lines of the triangle
  lines.push(Math.abs(lineA), Math.abs(lineB), Math.abs(lineC)); // just add the parameters (lines) to the array
  lines.sort((a, b) => a - b); // if you sort the lines, you don't need to test it separately, you can reduce it to one single test

  if ((lines[0] + lines[1]) < lines[2]) { // after all, you don't need to test the (line[0] - line[1]) < line[2], if the first premisse is false, the second is false too.
    return false;
  } return true;
}

// Desafio 13
// References:
// Find numbers in strings: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
// RegExp g Modifier (/g): https://www.w3schools.com/jsref/jsref_regexp_g.asp
// Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Removing unnecessary zeros: https://stackoverflow.com/questions/3612744/remove-insignificant-trailing-zeros-from-a-number
// Number(): https://www.w3schools.com/jsref/jsref_number.asp
// Legacy References: ( not used anymore )
// parseInt(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// Missing Radix Parameter: https://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter ( just when you use parseInt() )
function hydrate(words) {
  let numbers = words.replace(/[^0-9]/g, ''); // A technique used to find the numbers inside a string with the addition of /g to search they all
  let result = 0; // it's works as a counter, so it's needs to start at 0

  for (let i = 0; i < numbers.length; i += 1) {
    result += Number(numbers[i]); // converts the strings into numbers
  }

  if (result <= 1) {
    return `${result} copo de água`;
  } return `${result} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
