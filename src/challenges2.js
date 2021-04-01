// Desafio 10
function techList(techs, name) {
  let arrayTechName = [];
  let orderedTechs = techs.sort();

  if (techs == '') {
    return 'Vazio!';
  }

  for (let index in orderedTechs) {
    let object = {};
    object['tech'] = orderedTechs[index];
    object['name'] = name;
    arrayTechName.push(object);
  }
  return arrayTechName;
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Felipe'));
// console.log(techList([], 'Felipe'));

// Desafio 11
function sizeArray(list) {
  let size = false;

  if (list.length === 11) {
    size = true;
  }
  return size;
}
// console.log(sizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

function limitNumbers(list) {
  let limit = true;

  for (let index of list) {
    if (index < 0 || index > 9) {
      limit = false;
    }
  }
  return limit;
}
// console.log(limitNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// console.log(limitNumbers([1, 2, 3, 4, 11, 6, 7, 8, 9, 0, 1]));
// console.log(limitNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));

function repeatedNumber(list) {
  let repeated = false;

  for (let index of list) {
    let count = 0;
    for (let number of list) {
      if (list[index] === number) {
        count += 1;
      }
    }
    if (count === 3) {
      repeated = true;
    }
  }
  return repeated;
}
// console.log(repeatedNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));
// console.log(repeatedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// console.log(repeatedNumber([1, 2, 3, 4, 5, 5, 7, 8, 9, 0, 1]));
// console.log(repeatedNumber([1, 2, 3, 4, 4, 4, 7, 8, 9, 0, 1]));

function telephoneNumber(array) {
  let maskPhoneNumber = ['(', '', '', ')', '_', '', '', '', '', '', '-', '', '', '', ''];
  let position = 0;

  for (let index = 0; index < 15; index += 1) {
    if (maskPhoneNumber[index] === '_') {
      maskPhoneNumber[index] = ' ';
    } else if (maskPhoneNumber[index] === '') {
      maskPhoneNumber[index] = array[position];
      position += 1;
    }
  }
  return maskPhoneNumber.join('');
}
// console.log(telephoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

function generatePhoneNumber(array) {
  let sizeNumbers = sizeArray(array);
  let positiveNumberUnit = limitNumbers(array);
  let frequentNumbers = repeatedNumber(array);
  let phoneNumber;

  if (sizeNumbers === false) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if (positiveNumberUnit === false || frequentNumbers === true) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  } else {
    phoneNumber = telephoneNumber(array);
  }
  return phoneNumber;
}
// console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10]));
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 5, 5, 8, 9, 0, 1]));
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 19, 0, 1]));
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]));

// Desafio 12

function lessSum(aSide, bSide, cSide) {
  let itSmaller;

  if (aSide > bSide + cSide) {
    itSmaller = false;
  } else if (bSide > aSide + cSide) {
    itSmaller = false;
  } else if (cSide > aSide + bSide) {
    itSmaller = false;
  } else {
    itSmaller = true;
  }
  return itSmaller;
}
// console.log(lessSum(10, 14, 8));
// console.log(lessSum(10, 14, 50));

function checkAbs(aSide, bSide, cSide) {
  let isBiggerAbs;

  if (aSide < Math.abs(bSide - cSide)) {
    isBiggerAbs = false;
  } else if (bSide < Math.abs(aSide - cSide)) {
    isBiggerAbs = false;
  } else if (cSide < Math.abs(aSide - bSide)) {
    isBiggerAbs = false;
  } else {
    isBiggerAbs = true;
  }
  return isBiggerAbs;
}
// console.log(checkAbs(10, 14, 8));
// console.log(checkAbs(10, 14, 50));

function triangleCheck(lineA, lineB, lineC) {
  let sumLines = lessSum(lineA, lineB, lineC);
  let absLines = checkAbs(lineA, lineB, lineC);
  let isTriangle = false;

  if (sumLines === true && absLines === true) {
    isTriangle = true;
  }
  return isTriangle;
}
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(10, 14, 50));

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
