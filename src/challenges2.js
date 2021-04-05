// Desafio 10
// Neste desafio olhei códigos de colegas e procurei o que estava mais próximo com a minha lógica e encontrei o do Julio Filizzola.

function techList(techName, devName) {
  let technologies = [];
  for (let index in techName.sort()) {
    if ({}.hasOwnProperty.call(techName, index)) {
      technologies[index] = {
        tech: techName[index],
        name: devName,
      };
    }
  }
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  return technologies;
}

console.log(techList(['Java', 'Js'], ['Roge']));

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
