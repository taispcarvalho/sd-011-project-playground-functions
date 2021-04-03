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
  let biggest = Math.max(...array11);
  let lowest = Math.min(...array11);
  return biggest > 9 || lowest < 0;
}

function checkDuplicateNumber(array11) {
  let counts = {};
  for (let num of array11) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] === 3) return true;
  }
  return false;
}

function pushNumbers(array11) {
  let ddd = array11.slice(0, 2);
  let numPart1 = array11.slice(2, 7);
  let numPart2 = array11.slice(7);
  return `(${ddd.join('')}) ${numPart1.join('')}-${numPart2.join('')}`;
}

function generatePhoneNumber(array11) {
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
  let ar12 = [lineA, lineB, lineC];
  for (let i = 0; i < ar12.length; i += 1) {
    for (let j = i + 1; i < ar12.length; i += 1) {
      return ar12[i] + ar12[j] > ar12[2 - i] && Math.abs(ar12[i] - ar12[j]) < ar12[2 - i];
    }
  }
}

// Desafio 13
function hydrate(string13) {
  let stringCheck = /\d+/g;
  let drinkArray = string13.match(stringCheck);
  let sum = 0;
  let numOfCups = '';
  for (let i = 0; i < drinkArray.length; i += 1) {
    sum += parseInt(drinkArray[i], 10); // Add radix
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
