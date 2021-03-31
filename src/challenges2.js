// Desafio 10
function techList(arrayTechList, name) {
  let arrayTechAndName = [];
  arrayTechList.sort();

  if (arrayTechList.length > 0) {
    for (let index = 0; index < arrayTechList.length; index += 1) {
      arrayTechAndName[index] = {
        tech: arrayTechList[index],
        name: name,
      }
    }
    return arrayTechAndName;

  } else {
    return ('Vazio!');
  }
}

// Desafio 11
function generatePhoneNumber(arrayPhoneNumber) {
  let amountNumber = 0;
  
  if (arrayPhoneNumber.length !== 11) {
    return ('Array com tamanho incorreto.');
  }

  for (let number of arrayPhoneNumber) {
    if (number < 0 || number > 9) { 
      return ('não é possível gerar um número de telefone com esses valores');
    } else {
      for (let index = 0; index < arrayPhoneNumber.length; index +=1) {
        if (number === arrayPhoneNumber[index]) { 
          amountNumber += 1;
        } 
      }
      if (amountNumber >= 3) { 
        return ('não é possível gerar um número de telefone com esses valores');
      } else { 
        amountNumber = 0;
      }
    }
  }

  let phoneNumber = '(' + arrayPhoneNumber[0] + arrayPhoneNumber[1] + ') ' + arrayPhoneNumber[2] + arrayPhoneNumber[3] + arrayPhoneNumber[4] + arrayPhoneNumber[5] + arrayPhoneNumber[6] + '-' + arrayPhoneNumber[7] + arrayPhoneNumber[8] + arrayPhoneNumber[9] + arrayPhoneNumber[10];

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumBC = lineB + lineC > lineA;
  let sumAB = lineA + lineB > lineC;
  let sumAC = lineA + lineC > lineB;
  let subAB = Math.abs(lineA - lineB) < lineC;
  let subAC = Math.abs(lineA - lineC) < lineB;
  let subBC = Math.abs(lineB - lineC) < lineA;

  let answer = sumAB && sumBC && sumAC && subAB && subAC && subBC;

  return answer;
}

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
    let answerHydrate = cupsWater + ' copo de água';
  } else {
    let answerHydrate = cupsWater + ' copos de água';
  }

  return answerHydrate;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
