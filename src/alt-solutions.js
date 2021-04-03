// Desafio 9 - Using Regex
// Source: https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
function encode(message) {
  let encoding = { a: '1', e: '2', i: '3', o: '4', u: '5' };

  return message.replace(/a|e|i|o|u/g, function (matched) {
    return encoding[matched];
  });
}

function decode(encodedMessage) {
  let encoding = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  return encodedMessage.replace(/1|2|3|4|5/g, function (matched) {
    return encoding[matched];
  });
}

// Auxiliary function for Desafio 11
function getBiggestNumber(numbers) {
  let index;
  let biggestNumber;

  if (numbers.length === 0) {
    return null;
  }

  for (index = 0; !numbers[index]; index += 1) ;
  biggestNumber = numbers[index];

  for (let number of numbers) {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }

  return biggestNumber;
}

// Auxiliary function for Desafio 11
function getBiggestRepetition(numbers) {
  let numberFrequencies = [];

  for (let number of numbers) {
    if (!numberFrequencies[number]) {
      numberFrequencies[number] = 1;
    } else {
      numberFrequencies[number] += 1;
    }
  }

  return getBiggestNumber(numberFrequencies);
}

// Auxiliary function for Desafio 11
function exceedMaxNumberRepetition(numbers, maxNumberRepetition) {
  if (getBiggestRepetition(numbers) > maxNumberRepetition) {
    return true;
  }

  return false;
}

// Auxiliary function for Desafio 11
function numberInValidRange(number, lowerBound, upperBound) {
  if (number >= lowerBound && number <= upperBound) {
    return true;
  }

  return false;
}

// Auxiliary function for Desafio 11
function allNumbersInValidRange(numbers, lowerBound, upperBound) {
  let answer = true;

  for (let index = 0; index < numbers.length && answer; index += 1) {
    answer = numberInValidRange(numbers[index], lowerBound, upperBound);
  }

  return answer;
}

// Auxiliary function for Desafio 11
function formatPhoneNumber(matched, offset) {
  if (offset === 0) {
    return `(${matched}) `;
  }
  if (offset === 6) {
    return `${matched[0]}-${matched[1]}`;
  }

  return matched;
}

// Desafio 11 - Using Regex
function generatePhoneNumber(numbers) {
  const LOWER_BOUND = 0;
  const UPPER_BOUND = 9;
  const MAX_NUMBER_REPETITION = 2;
  let phoneNumber = '';

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let allInValidRange = allNumbersInValidRange(numbers, LOWER_BOUND, UPPER_BOUND);
  if (!allInValidRange || exceedMaxNumberRepetition(numbers, MAX_NUMBER_REPETITION)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  for (let number of numbers) {
    phoneNumber += number;
  }

  return phoneNumber.replace(/\d{2}/g, formatPhoneNumber);
}

console.log(decode(encode('hi there!')));
console.log(generatePhoneNumber([1, 1, 9, 5, 9, 8, 5, 2, 7, 2, 3]));
