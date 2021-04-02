// Desafio 10
function createObject(techName, name) {
  let object = {
    tech: techName,
    name,
  };
  return object;
}

function techList(array, name) {
  let allTechs = [];
  for (let index = 0; index < array.length; index += 1) {
    allTechs.push(createObject(array[index], name));
  }

  allTechs.sort((a, b) => ((a.tech > b.tech) ? 1 : -1));
  if (array.length === 0) {
    return 'Vazio!';
  }
  return allTechs;
}

// Desafio 11
function checkNumb(numbers) {
  let arrayValues = true;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      arrayValues = false;
    }
  }
  return arrayValues;
}

function checkRep(numbers) {
  let repetitionCondition = true;
  for (let index = 0; index < numbers.length; index += 1) {
    let repetition = 0;
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index] === numbers[index2]) {
        repetition += 1;
      }
    }
    if (repetition >= 3) {
      repetitionCondition = false;
    }
  }
  return repetitionCondition;
}

function arraySize(numbers) {
  let numberSize = true;
  if (numbers.length !== 11) {
    numberSize = false;
  }
  return numberSize;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

function generatePhoneNumber(numbers) {
  if (arraySize(numbers) === false) {
    return 'Array com tamanho incorreto.';
  }
  if (checkRep(numbers) === false || checkNumb(numbers) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } 
  if (arraySize(numbers) === true && checkNumb(numbers) === true && checkRep(numbers) === true) {
    let phoneNumber = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    
    return phoneNumber.replace(/\,/g, '');
  }
}

// Desafio 12
function checkLineSum(lineA, lineB, lineC) {
  let checkSum = true;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    checkSum = true;
  } else {
    checkSum = false;
  }
  return checkSum;
}

function checkLineDiff(A, B, C) {
  let checkDiff = true;
  if (A > Math.abs(B - C) && B > Math.abs(A - C) && C > Math.abs(A - B)) {
    checkDiff = true;
  } else {
    checkDiff = false;
  }
  return checkDiff;
}
function triangleCheck(A, B, C) {
  let triangleRequirements = true;
  if (checkLineSum(A, B, C) === true && checkLineDiff(A, B, C) === true) {
    triangleRequirements = true;
  } else {
    triangleRequirements = false;
  }
  return triangleRequirements;
}

// Desafio 13
function hydrate(string) {
  let numberOfDrinks = string.replace(/[^0-9]/g, '');
  let numberOfWaters = 0;
  for (let index = 0; index < numberOfDrinks.length; index += 1) {
    numberOfWaters = numberOfWaters + parseInt(numberOfDrinks[index]);
  }

  if (numberOfWaters === 1) {
    return numberOfWaters + ' copo de água';
  } else {
    return numberOfWaters + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
