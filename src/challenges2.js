// Desafio 10

function techList(learningTechnology, name) {
  let outExit = [];
  if (learningTechnology.length === 0) {
    return 'Vazio!';
  }
  for (let key of learningTechnology.sort()) {
    outExit.push({ tech: key, name: name });
  }
  return outExit;
}

// Desafio 11 Obs: Vitor Cardoso, Julio Filizzola, Maicon me ajudaram.

function numberCont(numbers1, response) {
  let result = 0;
  for (let index = 0; index < numbers1.length; index += 1) {
    if (numbers1[index] === response) {
      result += 1;
    }
  }
  return result;
}

function possibilities(arrayNumber) {
  for (let index = 0; index < arrayNumber.length; index += 1) {
    let response = arrayNumber[index];
    if (response < 0 || response > 9 || numberCont(arrayNumber, response > 2)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(number1) {
  let regex = /(\d{2})(\d{5})(\d{4})/;
  let myNumbers = '';
  let verify = possibilities(number1);
  if (number1.length !== 11) return 'Array com tamanho incorreto.';
  if (verify) {
    return verify;
  }
  for (let index of number1) {
    myNumbers += index;
    myNumbers = myNumbers.replace(regex, '($1) $2-$3');
  }
  return myNumbers;
}

// Desafio 12-

function triangleCheck(lineA, lineB, lineC) {
  let sizeLineA = Math.abs(lineA + lineB);
  let sizeLineB = Math.abs(lineA - lineB);
  let response = false;
  if (lineC < sizeLineA && lineC > sizeLineB) {
    response = true;
  }
  return response;
}

// Desafio 13

function hydrate(newString) {
  newString = newString.replace(/\D/g, '');
  let myNumber = 0;
  for (let index = 0; index < newString.length; index += 1) {
    myNumber += Number(newString[index]);
  }
  if (myNumber === 1) {
    return `${myNumber} copo de água`;
  } return `${myNumber} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
