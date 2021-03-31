// Desafio 10
function techList(arrayOfTechnologies, name) {
  let technologiesObjects = [];
  for (let key in arrayOfTechnologies) {
    if (key < arrayOfTechnologies.length) {
      technologiesObjects.push({
        tech: arrayOfTechnologies[key],
        name: name,
      });
      return technologiesObjects;
    }
    if (undefined) {
      return 'Vazio!';
    }
  }
}

// Desafio 11
function generatePhoneNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let verifyNum = arrayOfNumbers.map((number) => {
    if (number < 0 || number > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
    }
    return true;
  });
  let phoneNumber = '(';
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (index === 1) {
      phoneNumber += arrayOfNumbers[index].toString() + ') ';
    } else if (index === 6) {
      phoneNumber += arrayOfNumbers[index].toString() + '-';
    } else {
      phoneNumber += arrayOfNumbers[index].toString();
    }
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
