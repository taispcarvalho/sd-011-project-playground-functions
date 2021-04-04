// Desafio 10
function techList(technology, name) {
  let orderedListObjects = [];
  let ordered = technology.sort();
  if (Object.keys(ordered).length !== 0 && ordered.constructor !== Object) {
    for (let index in ordered) {
      orderedListObjects[index] = {
        tech: ordered[index],
        name,
      };
    }
  } else {
    return 'Vazio!';
  }
  return orderedListObjects;
}

// Desafio 11
function checkRange(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return true;
  }
  return false;
}

function duplicateNumber(arrayNumbers) {
  let validate = false;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let count = 0;
    for (let indexSec = 0; indexSec < arrayNumbers.length; indexSec += 1) {
      if (arrayNumbers[index] === arrayNumbers[indexSec]) {
        count += 1;
        if (count === 3) {
          validate = true;
        }
      }
    }
  }
  return validate;
}

function validateNumbers(arrayNumbers) {
  let validNumber = false;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
      validNumber = true;
    }
  }
  return validNumber;
}

function generatePhoneNumber(arrayOfNumbers) {
  let checkRangeNumber = checkRange(arrayOfNumbers);
  let verifyDuplicateNumber = duplicateNumber(arrayOfNumbers);
  let validateArrayNumber = validateNumbers(arrayOfNumbers);
  let newArrayOfNumbers = '(xx) xxxxx-xxxx';
  if ((checkRangeNumber || verifyDuplicateNumber || validateArrayNumber) === false) {
    for (let index = 0; index < arrayOfNumbers.length; index += 1) {
      newArrayOfNumbers = newArrayOfNumbers.replace('x', arrayOfNumbers[index]);
    }
  } else if (checkRange === true && (verifyDuplicateNumber && validateArrayNumber) === false) {
    newArrayOfNumbers = 'Array com tamanho incorreto.';
  } else {
    newArrayOfNumbers = 'não é possível gerar um número de telefone com esses valores';
  }
  return newArrayOfNumbers;
}

// Desafio 12
function sum(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  if (lineA < sumBC && lineB < sumAC && lineC < sumAB) {
    return true;
  }
  return false;
}

function abs(lineA, lineB, lineC) {
  let absAB = Math.abs(lineA - lineB);
  let absAC = Math.abs(lineA - lineC);
  let absBC = Math.abs(lineB - lineC);
  if (lineA > absBC && lineB > absAC && lineC > absAB) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (sum(lineA, lineB, lineC) && abs(lineA, lineB, lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(stringDrink) {
  let amountDrink = stringDrink.match(/\d+/g).map(Number);
  let sumAmountDrink = 0;
  let amount = 0;
  for (let index = 0; index < amountDrink.length; index += 1) {
    sumAmountDrink += amountDrink[index];
  }
  if (sumAmountDrink === 1) {
    amount = `${sumAmountDrink} copo de água`;
  } else {
    amount = `${sumAmountDrink} copos de água`;
  }
  return amount;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
