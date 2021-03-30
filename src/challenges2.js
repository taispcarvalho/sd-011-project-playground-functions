// Desafio 10
function techList(techNamesArray) {
  if (techNamesArray.length === 0) {
    return 'Vazio!';
  }

  let techListArray = [];
  let sortedTechNamesArray = techNamesArray.sort();

  for (let techName of sortedTechNamesArray) {
    techListArray.push({
      tech: techName,
      name: 'Inacio',
    });
  }

  return techListArray;
}

console.log(techList([]));
console.log(techList(['Redux', 'C#', 'C++', 'Unity', 'Unreal Engine 5']));

// Desafio 11

function generatePhoneNumber(numArray) {
  if (numArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (hasNonDigitNumber(numArray) || hasThriceOrMoreRepeatingValue(numArray)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumberString = '';

  // adds regional verification
  phoneNumberString += `(${numArray[0]}${numArray[1]}) `;

  // adds first part of number
  for (let i = 2; i < 7; i += 1) {
    phoneNumberString += numArray[i];
  }

  // adds separator
  phoneNumberString += '-';

  // adds second part of number
  for (let i = 7; i < 11; i += 1) {
    phoneNumberString += numArray[i];
  }

  return phoneNumberString;
}

console.log(generatePhoneNumber([6, 4, 9, 9, 2, 5, 7, 1, 0, 5, 7]));
console.log(generatePhoneNumber([0, 2, 3, 4]));
console.log(generatePhoneNumber([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
console.log(generatePhoneNumber([6, 4, 10, 9, 2, 5, 7, 1, 0, 5, 7]));
console.log(generatePhoneNumber([6, 4, -4, 9, 2, 5, 7, 1, 0, 5, 7]));

function hasNonDigitNumber(numArray) {
  let hasNonDigit = false;

  for (let num of numArray) {
    if (num < 0 || num > 9) {
      hasNonDigit = true;
      break;
    }
  }

  return hasNonDigit;
}

function hasThriceOrMoreRepeatingValue(numArray) {
  let count = 1;
  let repeats = false;

  let sortedArray = [...numArray].sort();

  for (let i = 1; i < sortedArray.length; i += 1) {
    if (sortedArray[i] === sortedArray[i - 1]) {
      count += 1;

      if (count === 3) {
        repeats = true;
        break;
      }
    } else {
      count = 1;
    }
  }

  return repeats;
}


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
