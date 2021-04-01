// Desafio 10
function createObject(array, name) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let objeto = {
      tech: array[index],
      name: `${name}`,
    };
    newArray.push(objeto);
  }
  return newArray;
}

function techList(array, name) {
  if (array.length > 0) {
    return createObject(array, name).sort((a, b) => (a.tech > b.tech ? 1 : -1));
  }
  return 'Vazio!';
}

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

// Desafio 12
function validationA(a, b, c) {
  if (c + b > a && a > Math.abs(c - b)) {
    return true;
  }
  return false;
}

function validationB(a, b, c) {
  if (a + c > b && b > Math.abs(a - c)) {
    return true;
  }
  return false;
}

function validationC(a, b, c) {
  if (a + b > c && c > Math.abs(a - c)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (
    validationA(lineA, lineB, lineC)
    && validationB(lineA, lineB, lineC)
    && validationC(lineA, lineB, lineC)
  ) {
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 14, 8));

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
