// Desafio 10
function techList(array, myName) {
  let techName = [];
  // Nessa parte, para resolver o problema do lint ('Guarding for-in (guard-for-in)') utilizei este material: https://eslint.org/docs/2.0.0/rules/guard-for-in
  for (let index in array.sort()) {
    if ({}.hasOwnProperty.call(array, index)) {
      techName[index] = {
        tech: array[index],
        name: myName,
      };
    }
  }
  if (techName.length === 0) {
    return 'Vazio!';
  }
  return techName;
}

console.log(techList([], 'Vitor'));

// Desafio 11
function countNum(array, num) {
  let repeatValue = 0;

  for (let countIndex = 0; countIndex < array.length; countIndex += 1) {
    if (num === array[countIndex]) {
      repeatValue += 1;
    }
  }
  return repeatValue;
}

function checkNum(checkArray) {
  for (let checkIndex = 0; checkIndex < checkArray.length; checkIndex += 1) {
    let check = checkArray[checkIndex];
    if (check < 0 || check > 9 || countNum(checkArray, check) > 2) {
      return 'não é possível gerar um número de telefone com esses valores.';
    }
  }
}

function generatePhoneNumber(array) {
  let regexNum = /(\d{2})(\d{5})(\d{4})/;
  let genNum = '';
  let check = checkNum(array);

  if (check) {
    return check;
  }

  for (let genIndex = 0; genIndex < array.length; genIndex += 1) {
    genNum += array[genIndex];
    genNum = genNum.replace(regexNum, '($1) $2-$3');
  }

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  return genNum;
}

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
