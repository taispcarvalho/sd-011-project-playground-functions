// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let lista = [];
  let object = {};
  array.sort();
  for (let index of array) {
    object = { tech: index, name };
    lista.push(object);
  }
  return lista;
}

// Desafio 11
function isValidArrayLength(array) {
  return array.length === 11;
}
function isValidArrayNumber(array) {
  for (let number of array) {
    if (number < 0 || number > 9) {
      return false;
    }
  } return true;
}
function NumberOfrepetition(array) {
  let counter = 0;
  for (let number of array) {
    for (let index = 1; index < array.length; index += 1) {
      if (number === array[index]) {
        counter += 1;
      }
    }
    if (counter >= 3) {
      return false;
    } counter = 0;
  } return true;
}
// Consultei o repositório do Matheus Gaspar para resolver essa parte.
// Link: https://github.com/tryber/sd-011-project-playground-functions/pull/28/files
function createPhoneNumber(array) {
  array.splice(0, 0, '(');
  array.splice(3, 0, ') ');
  array.splice(9, 0, '-');
  return array.join('');
}
function generatePhoneNumber(array) {
  if (!isValidArrayLength(array)) {
    return 'Array com tamanho incorreto.';
  } if (!isValidArrayNumber(array) || !NumberOfrepetition(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  } return createPhoneNumber(array);
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let checkB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  return checkA && checkB;
}

// Desafio 13
function hydrate(string) {
  let parameter = /\d+/g;
  let list = string.match(parameter).map(Number);
  let soma = 0;
  for (let index of list) {
    soma += index;
  }
  return (soma > 1) ? `${soma} copos de água` : `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
