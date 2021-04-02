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
// How to count repeated numbers in arrays without using Two For Loops cause Complexibility:
// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
function lengthValidation(phone) {
  let invalid = false;
  if (phone.length !== 11) {
    invalid = true;
  }
  return invalid;
}

function digitValidation(phone) {
  let invalid = false;
  for (let i = 0; i < phone.length; i += 1) {
    if (phone[i] > 9 || phone[i] < 0) {
      invalid = true;
    }
  }
  return invalid;
}

function counterValidation(phone) {
  let invalid = false;
  let count = 0;
  for (let i = 0; i < phone.length; i += 1) {
    for (let j = 0; j < phone.length; j += 1) {
      if (phone[i] === phone[j]) count += 1;
    }
  }
  if (count > 2) invalid = true;
  return invalid;
}

// Desafio 11
// References:
// Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Break Lines in TL: https://stackoverflow.com/questions/37321047/wrap-long-template-literal-line-to-multiline-without-creating-a-new-line-in-the
function generatePhoneNumber(phone) {
  let result = '';
  if (lengthValidation(phone)) {
    result = 'Array com tamanho incorreto';
  } else if (digitValidation(phone)) {
    result = 'não é possível gerar um número de telefone com esses valores1';
  } else if (counterValidation(phone)) {
    result = 'não é possível gerar um número de telefone com esses valores2';
  } else {
    result = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}`
    + `${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
  }
  return result;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
// References:
// Math.abs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB, lineC) {
  let result = false; // if it's boolean, always start at false if you wanna true as result
  let lines = []; // empty array
  lines.push(Math.abs(lineA), Math.abs(lineB), Math.abs(lineC)); // just add the parameters to the array
  // test if one side is smaller than the sum of the others sides
  // and if this side is bigger than the subtraction of the others sides
  if (lines[0] < (lines[1] + lines[2]) && lines[0] > (lines[1] - lines[2])) {
    if (lines[1] < (lines[0] + lines[2]) && lines[1] > (lines[0] - lines[2])) {
      if (lines[2] < (lines[0] + lines[1]) && lines[2] > (lines[0] - lines[1])) {
        result = true; // if so, it's true
      }
    }
  }
  return result;
}

// Desafio 13
// References:
// Find numbers in strings: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
// RegExp g Modifier (/g): https://www.w3schools.com/jsref/jsref_regexp_g.asp
// Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Removing unnecessary zeros: https://stackoverflow.com/questions/3612744/remove-insignificant-trailing-zeros-from-a-number
// Number(): https://www.w3schools.com/jsref/jsref_number.asp
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
