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

function verifyRepetition(arrayOfNum) {
  let repLimit = 2;
  let repArray = arrayOfNum.map((num) => arrayOfNum.filter((n) => n === num).length > repLimit);
  if (repArray.length === 0) {
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
function hydrate(string) {
  let cupOfWater = 0;
  let filter = /[1-9]/g;
  let stringArray = string.match(filter);
  let numArray = stringArray.map((num) => parseInt(num));
  
  for (let index = 0; index < numArray.length; index += 1) {
    cupOfWater += numArray[index];
  }

  return (cupOfWater + ' copos de água');
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
