// Desafio 10
function techList(arrayTech, names) {
  let arrayTechName = [];
  let resultArray;
  if (arrayTech.length !== 0) {
    arrayTech.sort();
    for (let index = 0; index < arrayTech.length; index += 1) {
      arrayTechName[index] = {
        tech: arrayTech[index],
        name: names,
      };
    } resultArray = arrayTechName;
  } else {
    resultArray = 'Vazio!';
  }
  return resultArray;
}

// Desafio 11
function numbersZeroNine(numArray) {
  for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] < 0 || numArray[index] > 9) {
      return false;
    }
  }
  return true;
}
function numbersOccurrence(numArray) {
  let count = 0;
  for (let index = 0; index < numArray.length; index += 1) {
    for (let index2 = 0; index2 < numArray.length; index2 += 1) {
      if (numArray[index] === numArray[index2]) {
        count += 1;
      }
    }
    if (count < 3) {
      return false;
    }
  }
  return true;
}
function generatePhoneNumber(numArray) {
  if (numArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (numbersZeroNine(numArray) || numbersOccurrence(numArray)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (numArray.length === 11) {
    return `(${numArray[0]}${numArray[1]}) `
      + `${numArray[2]}${numArray[3]}${numArray[4]}${numArray[5]}${numArray[6]}-`
      + `${numArray[7]}${numArray[8]}${numArray[9]}${numArray[10]}`;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultTriangle = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  return resultTriangle;
}

// Desafio 13
function hydrate(drinkIt) {
  let drinkReg = drinkIt.replace(/[^0-9]/g, '').split('');
  let resultCupWater = 0;
  for (let index = 0; index < drinkReg.length; index += 1) {
    resultCupWater += parseInt(drinkReg[index], 9);
  }
  if (resultCupWater === 1) {
    return '1 copo de água';
  }
  return `${resultCupWater} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
