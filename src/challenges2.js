// Desafio 10
function techList(tecnologias, nome) {
  let techs = [];
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  for (let index in tecnologias.sort()) {
    if ({}.hasOwnProperty.call(tecnologias, index)) { // da uma propriedade propria pro for in, pra nao ter resultados inesperados.
      techs[index] = {
        tech: tecnologias[index],
        name: nome,
      };
    }
  }
  return techs;
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
