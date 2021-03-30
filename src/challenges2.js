// Desafio 10
function techList(techNames, name) {
  if (techNames.length === 0) return 'Vazio!';
  return techNames.sort().map((tech) => ({ tech, name }));
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
