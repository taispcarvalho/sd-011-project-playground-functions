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
    if (counter[array[index]] >= 3) {
      return false;
    }
  }
  return true;
}
function generatePhoneNumber(tel) {
  if (!checkSize(tel)) {
    return 'Array com tamanho incorreto.';
  }
  if (!checkValidity(tel)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${tel[0]}${tel[1]}) ${tel[2]}${tel[3]}${tel[4]}${tel[5]}${tel[6]}-${tel[7]}${tel[8]}${tel[9]}${tel[10]}`;
}
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(`(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`);
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
