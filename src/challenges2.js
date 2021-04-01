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
function repeatedNumberFinder(arrNumbers2) {
  let count = 0;
  for (let index = 0; index < arrNumbers2.length; index += 1) {
    count = 0;
    for (let index2 = 1; index2 < arrNumbers2.length; index2 += 1) {
      if (arrNumbers2[index] === arrNumbers2[index2]) {
        count += 1;
        if (count >= 3) {
          return true;
        }
      }
    }
  }
}

function generatePhoneNumber(arrNumbers) {
  let newStr = '';
  let repeatedNumber = repeatedNumberFinder(arrNumbers);
  if (arrNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (arrNumbers[index] < 0 || arrNumbers[index] > 9 || repeatedNumber === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (index === 0) {
      newStr = `${newStr}(${arrNumbers[0]}`;
    } else if (index === 1) {
      newStr = `${newStr + arrNumbers[1]}) `;
    } else if (index < 6) {
      newStr += arrNumbers[index];
    } else if (index === 6) {
      newStr = `${newStr + arrNumbers[index]}-`;
    } else if (index < arrNumbers.length) {
      newStr += arrNumbers[index];
    }
  }
  return newStr;
}

console.log(generatePhoneNumber([]));

// Desafio 12
function checkA(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
}

function checkB(lineA, lineB, lineC) {
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
}

function checkC(lineA, lineB, lineC) {
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  let sideA = checkA(lineA, lineB, lineC);
  let sideB = checkB(lineA, lineB, lineC);
  let sideC = checkC(lineA, lineB, lineC);
  if (sideA === sideB === sideC) {
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 14, 8));

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
