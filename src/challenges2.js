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

function checkSizePhoneNumber(arraySize) {
  if (arraySize.length !== 11) {
    return true;
  }
}

// Desafio 11
function generatePhoneNumber(arrayPhone) {
  if (checkNegativeNineNumber(arrayPhone) 
  || checkNegativeNineNumber(arrayPhone) || checkRepeatedNumber(arrayPhone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (checkSizePhoneNumber(arrayPhone)) {
    return 'Array com tamanho incorreto.';
  }
  return `(${arrayPhone[0]}${arrayPhone[1]}) ${arrayPhone[2]}${arrayPhone[3]}${arrayPhone[4]}
  ${arrayPhone[5]}-${arrayPhone[6]}${arrayPhone[7]}${arrayPhone[8]}${arrayPhone[9]}${arrayPhone[10]}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

console.log(checkRepeatedNumber([1, 2, 1, 1, 5, 6, 7, 8, 9, 0, 1, 0]));
console.log(checkNegativeNineNumber([1, -2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 0]));
console.log(checkSizePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 0]));

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
