// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let objectList = [];
  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    objectList.push({ tech: tech[index], name });
  }
  return objectList;
}

// Desafio 11
function checkSize(array) {
  if (array.length !== 11) {
    return false;
  }
  return true;
}
function checkValidity(array) {
  let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      return false;
    }
    counter[array[index]] += 1;
    if (counter[array[index]] > 3) {
      return false;
    }
  }
  return true;
}
function generatePhoneNumber() {
  if (!checkSize) {
    return 'Array com tamanho incorreto.';
  }
  if (!checkValidity) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
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
