// Desafio 10
function techList(technologiesToLearn, nameOfPerson) {
  let newObject = [];
  if (technologiesToLearn.length === 0) return 'Vazio!';
  for (let index = 0; index < technologiesToLearn.length; index += 1) {
    newObject.push({
      tech: technologiesToLearn.sort()[index],
      name: nameOfPerson,
    });
  }
  return newObject;
}

// Desafio 11
function addSeparatorsPhoneNumber(numbers) {
  numbers.splice(0, 0, '(');
  numbers.splice(3, 0, ')');
  numbers.splice(9, 0, '-');
  return numbers.join('');
}

function countOcorrencies(num, numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === num) {
      count += 1;
    }
  }
  return count;
}

function validatePhoneNumber(numbers) {
  let isValid = true;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9
      || countOcorrencies(numbers[index], numbers) >= 3) {
      isValid = false;
    }
  }
  return isValid;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  if (!validatePhoneNumber(numbers)) {
    return 'Não é possível gerar um número de telefone com esses valores.';
  }
  return addSeparatorsPhoneNumber(numbers);
}
console.log(generatePhoneNumber([9, 8, 9, 9, 2, 0, 0, 2, 1, 5, 8]));

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
