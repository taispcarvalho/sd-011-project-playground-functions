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
function checkSide(l1, l2, l3) {
  const sumOfOtherSides = l2 + l3;
  const diffOfOtherSides = Math.abs(l2 - l3);
  if (l1 < sumOfOtherSides && l1 > diffOfOtherSides) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  const isValidA = checkSide(lineA, lineB, lineC);
  const isValidB = checkSide(lineB, lineA, lineC);
  const isValidC = checkSide(lineC, lineA, lineB);
  return isValidA && isValidB && isValidC;
}

// Desafio 13
function hydrate(string) {
  let count = 0;
  string.split('').forEach((element) => {
    const parsed = Number.parseInt(element, 10);
    if (!Number.isNaN(parsed)) {
      count += parsed;
    }
  });
  return count > 1 ? `${count} copos de água` : `${count} copo de água`;
}

console.log(hydrate('6 cachaça'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
