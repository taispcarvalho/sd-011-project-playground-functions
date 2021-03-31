// Desafio 10
function techList(arrayTechToLearn, name) {
  let sortedArray = arrayTechToLearn.sort();
  let storeTechsName = [];

  if (sortedArray.length !== 0) {
    for (let index = 0; index < sortedArray.length; index += 1) {
      let listObjTechName = {
        tech: sortedArray[index],
        name: name,
      };
      storeTechsName[index] = listObjTechName;
    }
    return storeTechsName;
  }
  return 'Vazio!';
}

function checkNegativeNineNumber(numbersArray) {
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] < 0 || numbersArray[index] > 9) {
      return true;
    }
  }
  return false;
}

function checkRepeatedNumber(numbersArray) {
  let countRepeatedNumber = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    for (let index2 = 0; index2 < numbersArray.length; index2 += 1) {
      if (numbersArray[index] === numbersArray[index2]) {
        countRepeatedNumber += 1;
      }
      if (countRepeatedNumber >= 3) {
        return true;
      }
    }
    countRepeatedNumber = 0;
  }
  return false;
}

function checkSizePhoneNumber(numbersArray) {
  if (numbersArray.length !== 11) {
    return true;
  }
  return false;
}

// Desafio 11
function generatePhoneNumber(arrayPhone) {
  let negOrBiggNine = checkNegativeNineNumber(arrayPhone);
  let repeatedNumber = checkRepeatedNumber(arrayPhone);
  let sizePhone = checkSizePhoneNumber(arrayPhone);
  if (sizePhone) {
    return 'Array com tamanho incorreto.';
  }
  if (negOrBiggNine || repeatedNumber ) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${arrayPhone[0]}${arrayPhone[1]}) ${arrayPhone[2]}${arrayPhone[3]}${arrayPhone[4]}${arrayPhone[5]}${arrayPhone[6]}-${arrayPhone[7]}${arrayPhone[8]}${arrayPhone[9]}${arrayPhone[10]}`;
}

function checkSumSides(sideA, sideB, sideC) {
  let countValues = 0;
  if (sideA < sideB + sideC) {
    countValues += 1;
  } 
  if (sideB < sideA + sideC) {
    countValues += 1;
  }
  if (sideC < sideA + sideB) {
    countValues += 1;
  }
  if (countValues === 3) return true;
  return false;
}

function checkAbsoluteDiff (sideA, sideB, sideC) {
  let countValues = 0;
  if (sideA > Math.abs(sideB - sideC)) {
    countValues += 1;
  } 
  if (sideB > Math.abs(sideA - sideC)) {
    countValues += 1;
  }
  if (sideC > Math.abs(sideA - sideB)) {
    countValues += 1;
  }
  if (countValues === 3) return true;
  return false;
}

console.log(checkAbsoluteDiff(10, 14, 8));

// Desafio 12
function triangleCheck(sideA, sideB, sideC) {
  let sumSides = checkSumSides(sideA, sideB, sideC);
  let absDiffSides = checkAbsoluteDiff (sideA, sideB, sideC);
  if (sumSides && absDiffSides) return true;
  return false;
}

console.log(triangleCheck(10, 14, 8));

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
