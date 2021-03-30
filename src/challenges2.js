// Desafio 10
function techList(nameTech, nome) {
  let arrTechs = [];
  if (!nameTech) {
    return [];
  }
  for (let index = 0; index < nameTech.length; index += 1) {
    arrTechs.push({
      tech: nameTech[index], 
      name: nome
    })
  }
  return arrTechs
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
