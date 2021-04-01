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
let teste = [1, 2, -3, 4, 0, 6, 7, 8, 9, 9, 0];
function repeatNumber(array) {
  let repeated = false;

  for (let index = 0; index < array.length; index += 1) {
    let counter = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[index] === array[j]) {
        counter += 1;
      }
    }
    if (counter > 2) {
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

function henrique(array) {
  for (let index in array) {
    if (array[index] > 9 || array[index] < 0) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(array) {
  let isRepeated = repeatNumber(array);
  let isValidLength = validation(array);
  let isValidDigit = henrique(array);
  let phoneNumber =
    '(' +
    array[0] +
    array[1] +
    ')' +
    array[2] +
    array[3] +
    array[4] +
    array[5] +
    array[6] +
    '-' +
    array[7] +
    array[8] +
    array[9] +
    array[10];

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
