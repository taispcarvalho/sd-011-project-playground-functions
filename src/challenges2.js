// Auxiliary function for requirement 10
function maySwap(arr, index) {
  let arrElement1;

  if (arr[index] > arr[index + 1]) {
    arrElement1 = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = arrElement1;
  }
}

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
function exceedNumberRepetition(number) {
  maxRepetition = 2;
}

// Auxiliary function for Desafio 11
function numberInValidRange(number) {
  let lowerBound = 0;
  let upperBound = 9;

  if (number >= lowerBound && number <= upperBound) {
    return true;
  }

  return false;
}

// Auxiliary function for Desafio 11
function allNumbersInValidRange(numbers) {
  let foundInvalidNumber = false;

  for (let index = 0; index < numbers.length && !foundInvalidNumber; index += 1) {
    foundInvalidNumber = !numberInValidRange(numbers[index]);
  }

  return foundInvalidNumber;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (!allNumbersInValidRange(numbers) || exceedNumberRepetition(numbers)) {
    return "não é possível gerar um número de telefone com esses valores";
  }


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
