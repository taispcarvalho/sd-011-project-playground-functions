// Desafio 10
function techList(arrayOfTechnologies, name) {
  let technologiesObjects = [];
  for (let key in arrayOfTechnologies.sort()) {
    if (key < arrayOfTechnologies.length) {
      technologiesObjects.push({
        tech: arrayOfTechnologies[key],
        name,
      });
    }
  }
  if (arrayOfTechnologies.length === 0) {
    return 'Vazio!';
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

function verifyArrayOfBool(arrayOfBool) {
  for (let index = 0; index < (arrayOfBool.length - 1); index += 1) {
    if (arrayOfBool[index] === false) {
      return false;
    }
  }
  return true;
}

function verifyRepetition(arrayOfNumbers) {
  let limitRepetition = 2;
  let arrayOfBool = arrayOfNumbers.map((number, index) => {
    let countRepetition = 0;
    if (index <= (arrayOfNumbers.length - limitRepetition - 1)) {
      for (let indexFor = index; indexFor <= (arrayOfNumbers.length - 1); indexFor += 1) {
        if (number === arrayOfNumbers[indexFor]) {
          countRepetition += 1;
        }
      }
      if (countRepetition > limitRepetition) {
        return false;
      }
    }
    return true;
  });
  return verifyArrayOfBool(arrayOfBool);
}

function generatePhoneNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (verifyDigit(arrayOfNumbers) === true && verifyRepetition === true) {
    return phoneNumber(arrayOfNumbers);
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) {
    return true;
  }
  return false;
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
