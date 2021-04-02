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
function checkRepeatedNumber(phoneNumber) {
  let resp = 0;
  for (let indexNumberPhone = 0; indexNumberPhone < phoneNumber.length - 1; indexNumberPhone += 1) {
    for (let compareNumberPhone = indexNumberPhone + 1; compareNumberPhone < phoneNumber.length; compareNumberPhone += 1) {
      if (phoneNumber[indexNumberPhone] === phoneNumber[compareNumberPhone]) {
        resp += 1;
      }
    }
    if (resp >= 2) {
      return true;
    }
    return resp;
  }
}
function checkNegativeAndGreaterThanNine(phoneNumber) {
  for (let test = 0; test < phoneNumber.length; test += 1) {
    if (phoneNumber[test] < 0 || phoneNumber[test] > 9) {
      return true;
    }
  }
}
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  if (checkRepeatedNumber(phoneNumber) === true || checkNegativeAndGreaterThanNine(phoneNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores'
  }

  let checkPhoneNumber;
  for (let number = 0; number < phoneNumber.length; number += 1) {
    checkPhoneNumber = '(' + phoneNumber[0] + phoneNumber[1] + ') ' + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + '-' + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10];
  }
  
  
  return checkPhoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]));
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
