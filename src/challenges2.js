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
function generatePhoneNumber(array) {
function isValidArrayLength(array) {
  if (array.length > 11) {
    return false;
  } return true;
}
function isValidArrayNumber(array) {
  for (let index of array) {
    if (index < 0 || index > 9) {
      return false;
    } return true;
  }
}
function NumberOfrepetition(array) {
  let counter = 0;
  for (let index2 of array) {
    for (let index3 = 1; index3 < array.length; index3 += 1) {
      if (index2 === index3) {
        counter += 1;
      }
    }
    if (counter >= 3) {
      return false;
    } counter = 0;
  } return true;
}
function createPhoneNumber(array) {
  array.splice(0, 0, '(');
  array.splice(3, 0, ')');
  array.splice(9, 0, '-');
  array.join('');
}

  if (!isValidArrayLength(array)) {
    return 'Array com tamanho incorreto.';
  } if (!isValidArrayNumber(array) || !NumberOfrepetition(array)) {
      return 'não é possível gerar um número de telefone com esses valores.';
    } return createPhoneNumber(array);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sum = lineA + lineB + lineC;
  let checkSumA = sum - lineA;
  let checkSumB = sum - lineB;
  let checkSumC = sum - lineC;
  let checkDifA = Math.abs(lineB - lineC);
  let checkDifB = Math.abs(lineA - lineC);
  let checkDifC = Math.abs(lineA - lineB);
  let differences = [difference1, difference2, difference3];

  for (let side in triangle) {
    if (sum - triangle[side] <= triangle[side] && differences[side] >= triangle[side]) {
      return false;
    } return true;
  }
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
