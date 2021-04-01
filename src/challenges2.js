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
  let repNumArray = arrayOfNumbers.map(numero => arrayOfNumbers.filter(n => n === numero).length >=3);
  if (repNumArray.length === 0) {
    return true;
  }
  return false;
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
function checkABS(lineA, lineB, lineC) {
  let checklineA = lineA > Math.abs(lineB - lineC);
  let checklineB = lineB > Math.abs(lineA - lineC);
  let checklineC = lineC > Math.abs(lineA - lineB);
  if (checklineA && checklineB && checklineC) {
    return true;
  }
  return false;
}

function checkLessThan(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (checkABS(lineA, lineB, lineC) && checkLessThan(lineA, lineB, lineC)) {
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
