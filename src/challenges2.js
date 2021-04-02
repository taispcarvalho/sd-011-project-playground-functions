// Desafio 10
function techList(tech, name) {
  let nomesOrdenados = tech.sort();
  let novaLista = [];
  for (let index = 0; index <= tech.length - 1; index += 1) {
    novaLista.push({
      tech: nomesOrdenados[index],
      name: name
    })
  }
  if (tech === []) {
    console.log('Vazio!');
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
