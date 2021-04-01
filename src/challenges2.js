// Auxiliary function for requirement 10
function maySwap(arr, index) {
  let arrElement1;

  if (arr[index] > arr[index + 1]) {
    arrElement1 = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = arrElement1;
  }
}

// Auxiliary function for requirement 10
function bubbleSort(arr) {
  let arrSize = arr.length;
  let indexA;
  let indexB;

  for (indexA = 1; indexA < arrSize - 1; indexA += 1) {
    for (indexB = 0; indexB < arrSize - indexA; indexB += 1) {
      maySwap(arr, indexB);
    }
  }

  return arr;
}

// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }

  let sortedTechs = bubbleSort(techs);
  let finalList = [];
  let finalListObject;

  for (let tech of sortedTechs) {
    finalListObject = {};
    finalListObject.tech = tech;
    finalListObject.name = name;
    finalList.push(finalListObject);
  }

  return finalList;
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
function formatPhoneNumber(numbers, index) {
  if (index === 1) {
    return `${numbers[index]}) `;
  }

  if (index === 6) {
    return `${numbers[index]}-`;
  }

  return numbers[index];
}

// Desafio 11
function generatePhoneNumber(numbers) {
  const lowerBound = 0;
  const upperBound = 9;
  const maxNumberRepetition = 2;
  let phoneNumber = '(';

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let allInValidRange = allNumbersInValidRange(numbers, lowerBound, upperBound);
  if (!allInValidRange || exceedMaxNumberRepetition(numbers, maxNumberRepetition)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  for (let index = 0; index < numbers.length; index += 1) {
    phoneNumber += formatPhoneNumber(numbers, index);
  }

  return phoneNumber;
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
