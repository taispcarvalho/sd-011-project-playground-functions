// Desafio 10
function techList(tech, name) {
  let nomesOrdenados = tech.sort();
  let novaLista = [];
  if (tech.length === []) {
    tech = 'Vazio!';
  }
  for (let index in nomesOrdenados) {
    novaLista[index] = { tech: nomesOrdenados[index], name:name };
  }
  return novaLista;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Fernando'));

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
