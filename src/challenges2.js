// Desafio 10
function techList(techs, name) {
  let result = [];

  techs = techs.sort();

  for (let tech of techs) {
    result.push({
      tech,
      name,
    });
  }

  return result;
}

// Desafio 11
function hasValidNumbers(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) return false;
  }

  return true;
}

function isValidPhoneNumber(numbers) {
  let status = hasValidNumbers(numbers);
  let count = 0;
  let previous;
  let sortedNumbers = numbers.slice(0).sort();

  for (let i = 0; i < sortedNumbers.length; i += 1) {
    count = previous && previous === sortedNumbers[i] ? count + 1 : 1;

    if (count === 3) {
      status = false;
      break;
    }

    previous = sortedNumbers[i];
  }

  return status;
}

function applyPhoneNumberMask(numbers) {
  let ddd = numbers.slice(0, 2).join('');
  let firsPart = numbers.slice(2, 7).join('');
  let secondPart = numbers.slice(7, 12).join('');

  return `(${ddd})${firsPart}-${secondPart}`;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';

  if (!isValidPhoneNumber(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return applyPhoneNumberMask(numbers);
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
