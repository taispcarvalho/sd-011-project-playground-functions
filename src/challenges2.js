// Desafio 10 - Tive Ajuda do  Maicon, Vitor, Julio e Vitor. Me explicaram e descutimos o cógido.

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

// Desafio 11 - Vitor Cardoso, Julio Filizzola, Maicon e Igor me ajudaram. Me explicaram e descutimos o cógido.

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
    let resolution = arrayNumber[index];
    if (resolution < 0 || resolution > 9 || numberCont(arrayNumber, resolution) > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(number1) {
  let regex = /(\d{2})(\d{5})(\d{4})/;
  let myNumbers = '';
  let verify = possibilities(number1);
  if (number1.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (verify) {
    return verify;
  }
  for (let index of number1) {
    myNumbers += index;
    myNumbers = myNumbers.replace(regex, '($1) $2-$3');
  }
  return myNumbers;
}

// Desafio 12- Tive Ajuda do Igor, Maicon e Julio. Me explicaram e descutimos o cógido.

function triangleCheck(lineA, lineB, lineC) {
  let sizeLineA = Math.abs(lineA + lineB);
  let sizeLineB = Math.abs(lineA - lineB);
  let response = false;
  if (lineC < sizeLineA && lineC > sizeLineB) {
    response = true;
  }
  return response;
}

// Desafio 13 - Tive ajuda do Julio Filizzola. Me explicaram e descutimos o cógido.

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
