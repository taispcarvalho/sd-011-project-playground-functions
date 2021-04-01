// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  array = array.sort();
  let object = [];
  for (let index = 0; index < array.length; index += 1) {
    object.push({ tech: array[index], name });
  }
  return object;
}

// Desafio 11
function generatePhoneNumber(arrayOfNumber) {
  if (arrayOfNumber.length === 11) {
    let phoneNumber = '(';
    for (let index = 0; index < arrayOfNumber.length; index += 1) {
      let counter = 0;
      for (let key = 0; key < arrayOfNumber.length; key += 1) {
        if (arrayOfNumber[key] === arrayOfNumber[index]) {
          counter += 1;
        }
      }
      if (arrayOfNumber[index] < 0 || arrayOfNumber[index] > 9 || counter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      if (index === 2) {
        phoneNumber += ') ';
      } else if (index === 7) {
        phoneNumber += '-';
      }
      phoneNumber += arrayOfNumber[index];
    } return phoneNumber;
  }
  return 'Array com tamanho incorreto.';
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
