// Desafio 10
function techList(arrTec, name) {
  if (arrTec === null || arrTec.length === 0) {
    return 'Vazio!';
  }
  let arrObjectTech = [];
  arrTec.sort();
  for (let i = 0; i < arrTec.length; i += 1) {
    arrObjectTech[i] = {
      tech: arrTec[i],
      name,
    };
  }
  return arrObjectTech;
}

// Desafio 11
function countNumber(value1, numbersArr) {
  let count = 0;
  for (let num of numbersArr) {
    if (value1 === num) {
      count += 1;
    }
    if (count >= 3) {
      return count;
    }
  }
  return count;
}

function isValidArrLength(numbersArr) {
  if (numbersArr.length === 11) {
    return true;
  }
  return false;
}

function isValidPhoneNumber(numbersArr) {
  let isValid = true;
  for (let num of numbersArr) {
    if (num > 9 || num < 0 || countNumber(num, numbersArr) >= 3) {
      return !isValid;
    }
  }
  return isValid;
}

function formatPhoneNumber(numbers) {
  let format = '(xx) xxxxx-xxxx';
  for (let index = 0; index < numbers.length; index += 1) {
    format = format.replace('x', numbers[index]);
  }
  return format;
}

function generatePhoneNumber(phoneNumberArr) {
  if (!isValidArrLength(phoneNumberArr)) {
    return 'Array com tamanho incorreto.';
  }
  if (!isValidPhoneNumber(phoneNumberArr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return formatPhoneNumber(phoneNumberArr);
  //  número máximo de caracteres numa linha == 100
  //  return `(${phoneNumberArr.slice(0,2).join().replace(/,/g, '')}) ${phoneNumberArr.slice(2,7).join().replace(/,/g, '')}-${phoneNumberArr.slice(7,11).join().replace(/,/g, '')}`;
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
