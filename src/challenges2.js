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

// Desafio 11
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
function generatePhoneNumber(numbersArray) {
  let dddNumber = numbersArray.slice(0, 2).map(String).join('');
  let firsPartNumber = numbersArray.slice(2, 7).map(String).join('');
  let secondPartNumber = numbersArray.slice(7, 11).map(String).join('');

  if (numbersArray.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] < 0 || numbersArray[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (countNumberRepets(numbersArray) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return '(' + dddNumber + ') ' + firsPartNumber + '-' + secondPartNumber;
}

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
