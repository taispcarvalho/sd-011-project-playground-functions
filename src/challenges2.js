// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length <= 0) {
    return 'Vazio!';
  }
  let newArrayTech = [];
  arrayTech = arrayTech.sort();
  for (let tech = 0; tech < arrayTech.length; tech += 1) {
    newArrayTech.push({
      tech: arrayTech[tech],
      name,
    });
  }
  return newArrayTech;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Lucas'));

// Desafio 11
function checkRepeat(value, phone) {
  let resp = 0;
  for (let indexNumber = 0; indexNumber < phone.length; indexNumber += 1) {
    if (value === phone[indexNumber]) {
      resp += 1;
    }
    if (resp >= 3) {
      return true;
    }
  }
  return false;
}
function checkOtherThanEleven(value) {
  return value < 0 || value > 9;
}
function testPhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let testIndex = 0; testIndex < phone.length; testIndex += 1) {
    if (checkOtherThanEleven(phone[testIndex]) || checkRepeat(phone[testIndex], phone)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}
function generatePhoneNumber(phone) {
  if (testPhoneNumber(phone)) {
    return testPhoneNumber(phone);
  }
  let generateNumber = '(';
  for (let number = 0; number < phone.length; number += 1) {
    if (generateNumber.length === 3) {
      generateNumber += ') ';
    } else if (generateNumber.length === 10) {
      generateNumber += '-';
    }
    generateNumber += phone[number];
  }
  return generateNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10]));
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
