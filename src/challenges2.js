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
console.log(techList([], 'rafael'));
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
