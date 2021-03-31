// Desafio 10
function techList(array, name) {
  let list = [];
  if (array.length === 0) return 'Vazio!';
  array.sort();
  for (let tech of array) {
    list.push({
      tech,
      name,
    });
  }
  return list;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
