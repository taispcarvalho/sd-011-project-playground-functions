// Desafio 10
function techList(tech, name) {
  tech = tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    tech[index] = {
      tech: tech[index],
      name,
    };
  }
  if (tech.length === 0) {
    tech = 'Vazio!';
  }
  return tech;
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
