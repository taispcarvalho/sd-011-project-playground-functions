// Desafio 10
function techList(tech, name) {
  let nomesOrdenados = tech.sort();
  let novaLista = [];
  if (tech.length === []) {
    tech = 'Vazio!';
  }
  for (let index = 0; index < nomesOrdenados.length; index += 1) {
    novaLista.push({
      tech: tech[index],
      name: name
    });
  }
  console.log(name);
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
