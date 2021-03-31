// Desafio 10
function techList(techArray, name) {
  let sortedArray = techArray.sort();
  let arrayOfObjects = []
  if (techArray.length === 0) {
    return 'Vazio!'
  }
  for (let index = 0; index < sortedArray.length; index += 1) {
    let object = {
      tech: techArray[index],
      name: name,
    }
    arrayOfObjects.push(object)
  }
  return arrayOfObjects;
}

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
let testArrayString = testArray.map(String);


function countNumberRepets(numbersArray) {
  numbersArray.sort();
  var max = 0, result, freq = 0;
  for (var index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === numbersArray[index + 1]) {
      freq += 1;
    }
    else {
      freq = 0;
    }
    if (freq > max) {
      result = numbersArray[index];
      max = freq;
    }
  }
  return max;
}

function phoneFirstPart(numbersArray) {
  let firstNumberPart = '';
  for (let index = 2; index <= 6; index += 1) {
    firstNumberPart += numbersArray[index]
  }
  return firstNumberPart;
}

function phoneSecondPart(numbersArray) {
  let secondNumberPart = '';
  for (let index = 7; index <= 11; index += 1) {
    firstNumberPart += numbersArray[index]
  }
  return secondNumberPart;
}

// Desafio 11
function generatePhoneNumber(numbersArray) {
  let phoneStructure = {
    ddd: numbersArray[0] + numbersArray[1],
    numberFirstPart: phoneFirstPart(numbersArray),
    numberSecondPart: phoneFirstPart(numbersArray),
  };

  if (numbersArray.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  if (numbersArray[index] < 0 || numbersArray[index] > 9 || countNumberRepets(numbersArray) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return '(' + phoneStructure.ddd + ')' + phoneStructure.numberFirstPart + '-' + phoneStructure.secondPart;
}

console.log(generatePhoneNumber(testArray))

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
