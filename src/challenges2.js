// Desafio 10
function techList(arrayTechList, name) {
  let answerTechList;
  let arrayTechAndName = [];
  arrayTechList.sort();

  if (arrayTechList.length > 0) {
    for (let index = 0; index < arrayTechList.length; index += 1) {
      arrayTechAndName[index] = {
        tech: arrayTechList[index],
        firstName: name,
      }
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
  let amountNumber = 0;
  let checkNumbers = true;  

  for (let number of arrayPhoneNumber) {
    if (number < 0 || number > 9) { 
      checkNumbers = false;
      break;
    } else if ((countChar(arrayPhoneNumber, number)) >=3) {
      checkNumbers = false;
      break;
    }
  }

  return checkNumbers
}

function generatePhoneNumber(arrayPhoneNumber) {
  let answer;

  if (checkSizeArray(arrayPhoneNumber, 11) === false) {
    answer = 'Array com tamanho incorreto.'
  } else if (checkPhoneNumber(arrayPhoneNumber)  === false) {
    answer = 'não é possível gerar um número de telefone com esses valores'
  } else {
    answer = '(' + arrayPhoneNumber[0] + arrayPhoneNumber[1] + ') ' + arrayPhoneNumber[2] + arrayPhoneNumber[3] + arrayPhoneNumber[4] + arrayPhoneNumber[5] + arrayPhoneNumber[6] + '-' + arrayPhoneNumber[7] + arrayPhoneNumber[8] + arrayPhoneNumber[9] + arrayPhoneNumber[10];
  }

  return answer;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let comparingA = lineB + lineC > lineA && lineA > Math.abs(lineB - lineC);
  let comparingB = lineA + lineB > lineC && lineC > Math.abs(lineA - lineB);
  let comparingC = lineA + lineC > lineB && lineB > Math.abs(lineA - lineC);
  let answer = comparingA && comparingB && comparingC;

  return answer;
}

console.log(triangleCheck(10, 14, 8))

// Desafio 13
function hydrate(beverage) {
  let arrayBeverage = beverage.split(' ');
  let cupsWater = 0;

  for (let index = 0; index < arrayBeverage.length; index += 1) {
    arrayBeverage[index] = Number(arrayBeverage[index]);
    if (arrayBeverage[index] > 0) {
      cupsWater += arrayBeverage[index];
    }
  }

  let answerHydrate;

  if (cupsWater === 1) {
    answerHydrate = cupsWater + ' copo de água';
  } else {
    answerHydrate = cupsWater + ' copos de água';
  }

  return answerHydrate;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
