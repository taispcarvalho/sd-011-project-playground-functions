// Desafio 10
function moveBiggest(arrayOfObjects, sizeOfRepet) {
  for (let position = 0; position < sizeOfRepet; position += 1) {
    let afterPosition = position + 1;
    if (arrayOfObjects[position].tech > arrayOfObjects[afterPosition].tech) {
      let objectCache = arrayOfObjects[position];
      arrayOfObjects[position] = arrayOfObjects[afterPosition];
      arrayOfObjects[afterPosition] = objectCache;
    }
  }
  return arrayOfObjects;
}

function orderList(arrayOfObjects) {
  for (let index = 1; index < arrayOfObjects.length; index += 1) {
    let sizeOfRepet = arrayOfObjects.length - index;
    arrayOfObjects = moveBiggest(arrayOfObjects, sizeOfRepet);
  }
  return arrayOfObjects;
}

function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let techObjects = [];
  for (let tech of array) {
    let newObject = { tech, name };
    techObjects.push(newObject);
  }
  return orderList(techObjects);
}

// Desafio 11
function isDifferentThan11(numbers) {
  return numbers.length !== 11;
}

function makeCountObject(numbers) {
  let countNumbers = {};
  for (let number of numbers) {
    countNumbers[number] = countNumbers[number] === undefined ? 1 : countNumbers[number] + 1;
  }
  return countNumbers;
}

function isMoreThanThreeTimes(numbers) {
  let countNumbers = makeCountObject(numbers);
  for (let key in countNumbers) {
    if (countNumbers[key] > 2) {
      return true;
    }
  }
  return false;
}

function isBiggerThanOrLessThan(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
  return false;
}

function validateNumbers(numbers) {
  if (isDifferentThan11(numbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (isMoreThanThreeTimes(numbers) || isBiggerThanOrLessThan(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return ' ';
}

function generateNumber(numbers) {
  let responseNumber = '(';
  let index = 0;
  for (; index < 2; index += 1) {
    responseNumber += numbers[index];
  }
  responseNumber += ') ';
  for (; index < 7; index += 1) {
    responseNumber += numbers[index];
  }
  responseNumber += '-';
  for (; index < 11; index += 1) {
    responseNumber += numbers[index];
  }
  return responseNumber;
}

function generatePhoneNumber(numbers) {
  return validateNumbers(numbers) === ' ' ? generateNumber(numbers) : validateNumbers(numbers);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);

  return lineA + lineB > lineC && lineC + lineB > lineA && lineC + lineA > lineB;
}

// Desafio 13
// Font: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
// Aprofundar: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  let glassOfWater = 0;
  for (let number of numbers) {
    glassOfWater += number;
  }
  return glassOfWater > 1 ? `${glassOfWater} copos de água` : `${glassOfWater} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
