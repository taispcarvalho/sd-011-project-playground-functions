// Desafio 10
// References:
// sort(): https://www.w3schools.com/jsref/jsref_sort.asp
// Objects: https://www.w3schools.com/js/js_objects.asp
function techList(tech, name) {
  let result = [];
  let list = tech.sort(); // 'list' recieve 'tech sorted'

  if (list.length !== 0) { // if list.length diffent from zero, it's ok to continue
    for (let i = 0; i < list.length; i += 1) {
      result.push({ tech: list[i], name }); // just print the object
    }
  } else result = 'Vazio!';

  return result;
}

// Desafio 11
// References:
// Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Break Lines in TL: https://stackoverflow.com/questions/37321047/wrap-long-template-literal-line-to-multiline-without-creating-a-new-line-in-the
function generatePhoneNumber(phone) {
  let result = '';
  if (phone.length > 11 || phone.length < 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    result = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}`
    + `${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
    for (let i = 0; i < phone.length; i += 1) {
      let count = 0;
      if (phone[i] > 9 || phone[i] < 0) {
        result = 'não é possível gerar um número de telefone com esses valores';
      }
      for (let j = 0; j < phone.length; j += 1) {
        if (phone[i] === phone[j]) count += 1;
        if (count > 2) result = 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false; // if it's boolean, always start at false if you wanna true as result
  let lines = []; // empty array
  lines.push(Math.abs(lineA), Math.abs(lineB), Math.abs(lineC)); // just add the parameters to the array
  // test if one side is smaller than the sum of the others sides
  // and if this side is bigger than the subtration of the others sides
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
// Removing unnecessary zeros: https://stackoverflow.com/questions/3612744/remove-insignificant-trailing-zeros-from-a-number
// ParseInt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// Missing Radix Parameter: https://stackoverflow.com/questions/7818903/jslint-says-missing-radix-parameter
// Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function hydrate(words) {
  let numbers = words.replace(/[^0-9]/g, ''); // A technique used to find the numbers inside a string with the adition of /g to search they all
  let result = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    result += parseInt(numbers[i], 10); // it's not really necessary, but converting to string eliminates the annoying zero before numbers
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
