// Desafio 10
function techList(techArray, name) {
  techArray.sort();
  let technologyList = [];
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techArray.length; index += 1) {
    technologyList.push({
      tech: techArray[index],
      name,
    });
  }
  return technologyList;
}

// Desafio 11
function repeatedDigit(number, arrayPhone) {
  let repated = 0;
  for (let index = 0; index < arrayPhone.length; index += 1) {
    if (arrayPhone[index] === number) {
      repated += 1;
    }
  }
  return repated;
}

function validDigit(arrayPhone) {
  let valid = true;
  for (let index = 0; index < arrayPhone.length; index += 1) {
    let repated3 = repeatedDigit(arrayPhone[index], arrayPhone) >= 3;
    let smaller = arrayPhone[index] < 0;
    let bigger = arrayPhone[index] > 9;
    if (smaller || bigger || repated3) {
      valid = false;
    }
  }
  return valid;
}

function Phone(arrayPhone) {
  let phone = '(xx) xxxxx-xxxx';
  arrayPhone.forEach((item) => {
    phone = phone.replace('x', item);
  });
  return phone;
}

function generatePhoneNumber(arrayPhone) {
  let phone = Phone(arrayPhone);
  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  if (validDigit(arrayPhone) === false) {
    return 'não é possivel gerar um número de telefone com esses valores';
  }
  return phone;
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
