// Desafio 10
function techList(techArray, names) {
  let finalArray = [];
  let finalArraySort = techArray.sort();

  if (techArray.length === 0) {
    return 'Vazio!';
  }

  for (let listTech of finalArraySort) {
    finalArray.push({
      tech: listTech,
      name: names,
    });
  }

  return finalArray;
}
// Para o desenvolvimento do código do Desafio 10 utilizei o código do Inacio como inspiração

// Desafio 11
function makePhoneNumber(numberArray) {
  let phoneNumber = '';
  phoneNumber += '(';
  for (let index = 0; index < 2; index += 1) {
    phoneNumber += numberArray[index];
  }
  phoneNumber += ')';
  for (let index = 2; index < 7; index += 1) {
    phoneNumber += numberArray[index];
  }
  phoneNumber += '-';
  for (let index = 7; index < 11; index += 1) {
    phoneNumber += numberArray[index];
  }

  return phoneNumber;
}

function repeatNumberVerify(value) {
  for (let numberMaxMin of value) {
    if (numberMaxMin < 0 || numberMaxMin > 9) {
      return true;
    }
  }

  let phoneNumberArraySort = value.sort((a, b) => a - b);
  for (let index = 0; index < value.length - 1; index += 1) {
    if (phoneNumberArraySort[index - 1] === phoneNumberArraySort[index] && phoneNumberArraySort[index] === phoneNumberArraySort[index + 1]) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(phoneNumberArray) {
  let finalNumber = makePhoneNumber(phoneNumberArray);
  if (phoneNumberArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let repeatTest = repeatNumberVerify(phoneNumberArray);
  if (repeatTest === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return finalNumber;
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
