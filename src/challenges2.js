// Desafio 10
function techList(techArr, name) {
  let newArrTech = [];
  techArr = techArr.sort();
  if (techArr.length > 1) {
    for (let index = 0; index < techArr.length; index += 1) {
      let object = {
        tech: techArr[index],
        name,
      };
      newArrTech.push(object);
    }
  } else {
    return 'Vazio!';
  }
  return newArrTech;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function telephoneGenerator1(arrTel) {
  let newString = '';
  newString = `(${arrTel[0]}${arrTel[1]}) `;
  for (let index = 1; index < 7; index += 1) {
    if (index > 1 && index < 7) {
      newString += arrTel[index];
    }
  }
  return newString;
}

function telephoneGenerator2(arrTel) {
  let newString2 = '-';
  for (let index = 7; index < 11; index += 1) {
    if (index > 6) {
      newString2 += arrTel[index];
    }
  }
  return newString2;
}

function repeatedNumberCounter(arrNumbers2) {
  let count = 0;
  let currentCount = 0;
  for (let index = 0; index < arrNumbers2.length; index += 1) {
    count = 0;
    for (let index2 = 1; index2 < arrNumbers2.length; index2 += 1) {
      if (arrNumbers2[index] === arrNumbers2[index2]) {
        count += 1;
      }
    }
    if (currentCount < count) {
      currentCount = count;
    }
  }
  return currentCount;
}

function repeatedNumberFinder(arrNumbers2) {
  let numberDetected = repeatedNumberCounter(arrNumbers2);
  if (numberDetected >= 3) {
    return true;
  }
}
console.log(repeatedNumberFinder([5, 2, 2, 2, 5, 3, 7, 2, 8, 9, 0]));

function isValidTelephone(arrTelephone) {
  for (let index = 0; index < arrTelephone.length; index += 1) {
    if (arrTelephone[index] < 0 || arrTelephone[index] > 9) {
      return true;
    }
  }
}

function generatePhoneNumber(arrNumbers) {
  let repeatedNumber = repeatedNumberFinder(arrNumbers);
  let validNumber = isValidTelephone(arrNumbers);
  if (arrNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (repeatedNumber || validNumber) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telephoneGenerated = telephoneGenerator1(arrNumbers) + telephoneGenerator2(arrNumbers);

  return telephoneGenerated;
}

console.log(generatePhoneNumber([1, 2, 2, 2, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  return true;
}

console.log(triangleCheck(14, 8, 30));

// Desafio 13
function hydrate(str) {
  let waterGlasses = 0;
  for (let index = 0; index < str.length; index += 1) {
    if (parseInt(str[index], 10) >= 1 && parseInt(str[index], 10) <= 9) {
      waterGlasses += (parseInt(str[index], 10));
    }
  }
  if (waterGlasses === 1) {
    return '1 copo de água';
  }
  return (`${waterGlasses} copos de água`);
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

// Referencias
// 1 - https://eslint.org/docs/rules/radix = ajudou a entender o parametro radix do parseInt();
// 2 - https://www.w3schools.com/jsref/jsref_parseint.asp = me ajudou a entender como utilizar o parseInt().

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
