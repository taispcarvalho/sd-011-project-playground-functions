// Desafio 10
function techList(tech, name2) {
  let list = [];
  let data = {};
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    tech = tech.sort();
    data = {
      tech: tech[index],
      name: name2,
    };
    list.push(data);
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) return false;
  }

  return true;
}

function validPhoneNumber(numbers) {
  let status = validNumbers(numbers);
  let count = 0;
  let previous = 0;
  let randomNumbers = numbers.slice(0).sort();

  randomNumbers.forEach((number) => {
    count = previous && previous === number ? count + 1 : 1;

    if (count === 3) status = false;

    previous = number;
  });

  return status;
}

function phoneNumber(numbers) {
  let firstPart= numbers.slice(0, 2).join('');
  let secondPart = numbers.slice(2, 7).join('');
  let thirddPart = numbers.slice(7, 12).join('');

  return (${firstPart}) ${secondPart}-${thirddPart};
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';

  if (!validPhoneNumber(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return phoneNumber(numbers);
}

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
