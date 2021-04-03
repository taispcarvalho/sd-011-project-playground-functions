// Desafio 10
// References:
// sort(): https://www.w3schools.com/jsref/jsref_sort.asp
// Objects: https://www.w3schools.com/js/js_objects.asp
function techList(tech, name) {
  let result = [];
  let list = tech.sort(); // 'list' recieve 'tech' sorted

  if (list.length !== 0) { // if list.length is different from zero, it's ok to continue
    for (let i = 0; i < list.length; i += 1) {
      result.push({ tech: list[i], name }); // push the object into the list
    }
  } else result = 'Vazio!';

  return result;
}

// D11 Auxiliary Functions
// References:
// Arrow functions: https://www.w3schools.com/js/js_arrow_function.asp
// Legacy References: (not used anymore)
// slice(): https://www.w3schools.com/jsref/jsref_slice_array.asp
// sort() with function for numbers: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly

// I have used Arrow Functions just to try to lessen the code's complexity, and to learn how to use it, no special use.
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

// How to use forEach to count duplicate numbers: https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
// Convert Object to Array = https://www.samanthaming.com/tidbits/76-converting-object-to-array/
// Cause using two 'for loops' for it cause Code Complexibility's problem, so I had to use this technique with the ForEach
// It's print the numbers of times the number repeats in Object.values
const counterValidation = (phone) => {
  let count = {};
  let countNum = 0;

  phone.forEach(function (x) {
    count[x] = (count[x] || 0) + 1; /* The expression counts[x] || 0 returns the value of counts[x] if it is set, otherwise 0.
                                       Then just add one and set it again in the object and the count is done. */
  });

  let auxCount = Object.values(count);

  for (let i = 0; i < auxCount.length; i += 1) {
    if (auxCount[i] > 2) countNum += 1;
  }

  if (countNum !== 0) return true;
  return false;
};

console.log(counterValidation([1, 1, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 11
// References:
// Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Break Lines in TL: https://stackoverflow.com/questions/37321047/wrap-long-template-literal-line-to-multiline-without-creating-a-new-line-in-the
function generatePhoneNumber(phone) {
  let result;

  if (lengthValidation(phone)) {
    result = 'Array com tamanho incorreto.';
  } else if (digitValidation(phone)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else if (counterValidation(phone)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}`
    + `${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
  }
  return result;
}

// Desafio 12
// References:
// Math.abs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB, lineC) {
  let lines = []; // empty array for lines of the triangle
  lines.push(Math.abs(lineA), Math.abs(lineB), Math.abs(lineC)); // just add the parameters (lines) to the array
  lines.sort((a, b) => a - b); // if you sort the lines, you don't need to test it separately, you can reduce it to one single test

  if ((lines[0] + lines[1]) < lines[2]) { /* after all, you don't need to test the (line[0] - line[1]) < line[2],
                                             if the first premisse is false, the second is false too. */
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
// Missing Radix Parameter: https://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter
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
