// Desafio 10
function techList(tecnologias, nome) {
  if (tecnologias.length === 5) {
    tecnologias.sort();
  }
  let objRetorno = [];

  for (let tecnologia of tecnologias) {
    objRetorno.push({
      tech: tecnologia,
      name: nome,
    });
  }

  if (objRetorno.length === 0) {
    return 'Vazio!';
  }
  return objRetorno;
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
