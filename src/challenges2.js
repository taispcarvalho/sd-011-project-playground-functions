// Desafio 10
function techList(arrayTechList, firstName) {
  let answerTechList;
  let arrayTechAndName = [];
  arrayTechList.sort();

  if (arrayTechList.length > 0) {
    for (let index = 0; index < arrayTechList.length; index += 1) {
      arrayTechAndName[index] = { tech: arrayTechList[index], name: firstName };
    }
    answerTechList = arrayTechAndName;
  } else {
    answerTechList = 'Vazio!';
  }
  return answerTechList;
}

// Desafio 11
function checkSizeArray(array, size) {
  let checkSize = array.length === size;
  return checkSize;
}

function countChar(array, charX) {
  let amountChar = 0;
  for (let char of array) {
    if (char === charX) {
      amountChar += 1;
    }
  }
  return amountChar;
}

function checkPhoneNumber(arrayPhoneNumber) {
  let checkNumbers = true;

  for (let number of arrayPhoneNumber) {
    if (number < 0 || number > 9 || (countChar(arrayPhoneNumber, number)) >= 3) {
      checkNumbers = false;
      break;
    }
  }
  return checkNumbers;
}

function generatePhoneNumber(arrayPhoneNumber) {
  let answer;

  if (checkSizeArray(arrayPhoneNumber, 11) === false) {
    answer = 'Array com tamanho incorreto.';
  } else if (checkPhoneNumber(arrayPhoneNumber) === false) {
    answer = 'não é possível gerar um número de telefone com esses valores';
  } else {
    arrayPhoneNumber.splice(7, 0, '-');
    arrayPhoneNumber.splice(2, 0, ') ');
    arrayPhoneNumber.splice(0, 0, '(');
    answer = arrayPhoneNumber.join('');
  }

  return answer;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let comparingA = lineB + lineC > lineA && lineA > Math.abs(lineB - lineC);
  return comparingA;
}

// Desafio 13
function hydrate(beverage) {
  let arrayBeverage = beverage.split(' ');
  let cupsWater = 0;
  let answerHydrate;

  for (let index = 0; index < arrayBeverage.length; index += 1) {
    arrayBeverage[index] = Number(arrayBeverage[index]);
    if (arrayBeverage[index] > 0) {
      cupsWater += arrayBeverage[index];
    }
  }

  if (cupsWater === 1) {
    answerHydrate = `${cupsWater} copo de água`;
  } else {
    answerHydrate = `${cupsWater} copos de água`;
  }
  return answerHydrate;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
