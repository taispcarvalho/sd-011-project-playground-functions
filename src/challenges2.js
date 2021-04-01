// Desafio 10
let techs = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let techsEmpty = [];
function techList(array, name) {
  let newArray = [];
  if (array.length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      let objeto = {
        tech: array[index],
        name: `${name}`,
      };
      newArray.push(objeto);
    }
    return newArray.sort((a, b) => (a.tech > b.tech ? 1 : -1));
  }
  return 'Vazio!';
}

console.log(techList(techs, 'Henrique'));
console.log(techList(techsEmpty, 'Henrique'));
// Desafio 11

function verify(item, array) {
  let counter = 0;
  for (let j in array) {
    if (item === array[j]) {
      counter += 1;
    }
  }
  return counter;
}

function repeatNumber(array) {
  let repeated = false;

  for (let index in array) {
    if (verify(array[index], array) > 2) {
      repeated = true;
    }
  }
  return repeated;
}

function validation(array) {
  if (array.length !== 11) {
    return false;
  }
  return true;
}

function validDigit(array) {
  for (let index in array) {
    if (array[index] > 9 || array[index] < 0) {
      return false;
    }
  }
  return true;
}

function ddd(array) {
  let numbers = '';
  for (let index = 0; index < 2; index += 1) {
    numbers += array[index];
  }
  return numbers;
}

function firstPart(array) {
  let numbers = '';
  for (let index = 2; index < 7; index += 1) {
    numbers += array[index];
  }
  return numbers;
}

function secondPart(array) {
  let numbers = '';
  for (let index = 7; index < 11; index += 1) {
    numbers += array[index];
  }
  return numbers;
}

function generatePhoneNumber(array) {
  let isRepeated = repeatNumber(array);
  let isValidLength = validation(array);
  let isValidDigit = validDigit(array);
  let phoneNumber = `(${ddd(array)}) ${firstPart(array)}-${secondPart(array)}`;
  if (!isValidLength) {
    return 'Array com tamanho incorreto.';
  }
  if (isRepeated || !isValidDigit) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return phoneNumber;
}

console.log(generatePhoneNumber(teste));
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
