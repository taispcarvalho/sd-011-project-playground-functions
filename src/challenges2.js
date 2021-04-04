// Desafio 10
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  let object = [];
  array = array.sort();
  for (let tech of array) {
    object.push({
      tech,
      name,
    });
  }
  return object;
}

// Desafio 11
function repeatNumbers(number, array) {
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      counter += 1;
    }
  }
  return counter;
}

function numbersCondition(array) {
  let condition = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || repeatNumbers(array[index], array) >= 3) {
      condition = false;
    }
  }
  return condition;
}

function phoneNumber(array) {
  let phone = '(xx)xxxxx-xxxx';
  array.forEach((item) => {
    phone = phone.replace('x', item);
  });
  return phone;
}

function generatePhoneNumber(array) {
  let errorText = 'Array com tamanho incorreto.';
  let errorText2 = 'não é possível gerar um número de telefone com esses valores';
  let phone = phoneNumber(array);
  if (array.length !== 11) {
    return errorText;
  } if (numbersCondition(array) === false) {
    return errorText2;
  }
  return phone;
}
/* https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/ */

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
