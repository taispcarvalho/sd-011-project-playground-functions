// Desafio 10
function techList(arrayOfTechnologies, name) {
  let technologiesObjects = [];
  for (let key in arrayOfTechnologies.sort()) {
    if (key < arrayOfTechnologies.length) {
      technologiesObjects.push({
        tech: arrayOfTechnologies[key],
        name: name,
      });
    }
    if (arrayOfTechnologies === []) {
      return 'Vazio!';
    }
  }
  return technologiesObjects;
}

// Desafio 11

function phoneNumber(arrayOfNumbers) {
  let phoneNumberString = '(';
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (index === 1) {
      phoneNumberString += arrayOfNumbers[index].toString();
      phoneNumberString += ') ';
    } else if (index === 6) {
      phoneNumberString += arrayOfNumbers[index].toString();
      phoneNumberString += '-';
    } else {
      phoneNumberString += arrayOfNumbers[index].toString();
    }
  }
  return phoneNumberString;
}

function verifyDigit(arrayOfNumbers) {
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] < 0 || arrayOfNumbers[index] > 9) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (verifyDigit(arrayOfNumbers) === true) {
    return phoneNumber(arrayOfNumbers);
  }
  return 'não é possível gerar um número de telefone com esses valores';
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
