// Desafio 10
function techList(arrayD10, name) {
  if (arrayD10.length === 0) {
    return 'Vazio!';
  }
  let sortedTechNames = arrayD10.sort();
  let newArray = [];
  for (let i = 0; i < sortedTechNames.length; i += 1) {
    let objectD10 = {
      tech: '',
      name: '',
    };
    objectD10.name = name;
    objectD10.tech = sortedTechNames[i];
    newArray.push(objectD10);
  }
  return newArray;
}

// Desafio 11
function checkNumber(array11) {
  let wrongNumber = false;
  let biggest = Math.max(...array11);
  let lowest = Math.min(...array11);
  if (biggest > 9 || lowest < 0) {
    wrongNumber = true;
    return wrongNumber;
  }
}
function checkDuplicateNumber(array11) {
  let wrongNumber = false;
  for (let i = 0; i < array11.length; i += 1) {
    let sameNumberLoop = 0;
    for (let i2 = i; i2 < array11.length; i2 += 1) {
      if (array11[i] === array11[i2]) {
        sameNumberLoop += 1;
        if (sameNumberLoop >= 3) {
          wrongNumber = true;
          return wrongNumber;
        }
      }
    }
  }
}

function pushNumbers(array11) {
  let ddd = [];
  let numPart1 = [];
  let numPart2 = [];
  for (let i = 0; i <= 10; i += 1) {
    switch (true) {
    case i >= 0 && i < 2:
      ddd.push(array11[i]);
      break;
    case i >= 2 && i <= 6:
      numPart1.push(array11[i]);
      break;
    case i > 6 && i <= 10:
      numPart2.push(array11[i]);
      break;
    }
  }
  return `(${ddd.join('')}) ${numPart1.join('')}-${numPart2.join('')}`;
}

function generatePhoneNumber(array11) {
  let wrongNumber = false;
  switch (true) {
  case array11.length !== 11:
    return 'Array com tamanho incorreto.';
  case checkNumber(array11) || checkDuplicateNumber(array11):
    return 'não é possível gerar um número de telefone com esses valores';
  default:
    return pushNumbers(array11);
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let array12 = [lineA, lineB, lineC];
  let triangle = false;
  for (i = 0; i < array12.length; i+=1) {
    for (j = i + 1; i < array12.length; i+=1) {
      if (array12[i] + array12[j] > array12[2 - i] && Math.abs(array12[i] - array12[j]) < array12[2 - i]) {
        triangle = true;
      } else { return false }
    }
  }
  return triangle;
}

// Desafio 13
function hydrate(string13) {
  let stringCheck = /\d+/g;
  let drinkArray = string13.match(stringCheck);
  let sum = 0;
  let numOfCups = '';
  for (let i = 0; i < drinkArray.length; i += 1) {
    sum += parseInt(drinkArray[i]);
  }
  if (sum > 1) {
    numOfCups = 'copos';
  } else {
    numOfCups = 'copo';
  }
  return `${sum} ${numOfCups} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
