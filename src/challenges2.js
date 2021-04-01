// Desafio 10
function techList(array, name) {
  let result = [];
  if (array.length === 0) {
    return 'Vazio!';
  }

  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    let objeto = {
      tech: array[i],
      name: name,
    };
    result.push(objeto);
  }
  return result;
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
