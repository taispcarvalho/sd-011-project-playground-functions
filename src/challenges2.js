// Desafio 10
function techList(list, name) {
  if (list.length === 0) {
    return 'Vazio!';
  }

  let result = [];
  list = list.sort();
  for (let technology of list) {
    result.push({
      tech: technology,
      name,
    });
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  const sorted = [...array].sort();
  for (let index = 0; index < 11; index += 1) {
    if (sorted[index] < 0 || sorted[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (sorted[index] === sorted[index + 1] && (sorted[index] === sorted[index + 2])) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
}
console.log((generatePhoneNumber([3, 5, 5, 3, 2, 2, 1, 1, 9, 7, 8])));

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
