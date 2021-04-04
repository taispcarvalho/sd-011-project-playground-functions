// Desafio 10
function techList(tech, name) {
  tech = tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    tech[index] = {
      tech: tech[index],
      name,
    };
  }
  if (tech.length === 0) {
    tech = 'Vazio!';
  }
  return tech;
}

// Desafio 11
function lessThanThreeRepetitions(array) {
  let counterOfRep = 0;
  let lessTranThreeReps = true;
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 1; index2 < array.length; index += 1) {
      if (array[index] === array[index2]) {
        counterOfRep += 1;
      }
    }
    if (counterOfRep > 2) {
      lessThanThreeReps = false;
    }
    counterOfRep = 0;
  }
} 
function betweenZeroAndNine(array) {
  let betweenZeroAndNine = true;
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      counter += 1;
      betweenZeroAndNine = false;
    }
  }
  return betweenZeroAndNine;
}
function withElevenNumbers(array) {
  let phoneNumber = ['(', 0, 0, ') ', 0, 0, 0, 0, 0, '-', 0, 0, 0, 0];
  let difOfIndex = 1;
  for (let index = 0; index < array.length; index += 1) {
    if (index === 2 || index === 7) {
      difOfIndex += 1;
      phoneNumber[index + difOfIndex] = array[index];
    } else {
      phoneNumber[index + difOfIndex] = array[index];
    }
  }
  return phoneNumber.join('');
}
function generatePhoneNumber(array) {
  let phoneNumber = [];
  if (array.length !== 11 || betweenZeroAndNine(array) !== true || lessThanThreeRepetitions(array)) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else {
    phoneNumber = withElevenNumbers(array);
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
