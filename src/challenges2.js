// Desafio 10
function techList(techNames, name) {
  if (techNames.length === 0) return 'Vazio!';
  return techNames.sort().map((tech) => ({ tech, name }));
}

// Desafio 11
function checkInvalidDigits(numbers) {
  for (let n of numbers) {
    if (n > 9 || n < 0) {
      return true;
    }
  }
  return false;
}

function checkTooManyRepeats(numbers) {
  const count = {};
  for (let n of numbers) {
    if (count[n]) {
      count[n] += 1;
    } else {
      count[n] = 1;
    }
  }
  const maxCount = Object.values(count).reduce((a, b) => Math.max(a, b));
  return maxCount >= 3;
}

function isValid(numbers) {
  const hasInvalidDigits = checkInvalidDigits(numbers);
  const hasTooManyRepeats = checkTooManyRepeats(numbers);
  if (hasInvalidDigits || hasTooManyRepeats) {
    return false;
  }
  return true;
}

function formatPhoneNumber(numbers) {
  numbers.splice(0, 0, '(');
  numbers.splice(3, 0, ') ');
  numbers.splice(9, 0, '-');
  return numbers.join('');
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  if (!isValid(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return formatPhoneNumber(numbers);
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
