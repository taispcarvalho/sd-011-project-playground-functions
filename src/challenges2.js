// Desafio 10
function techList(technology, name) {
  if (technology.length === 0) {
    return 'Vazio!';
  }

  let orderTech = technology.sort();
  let listTech = []

  for (let currTecnology of orderTech) {
    listTech.push({
      tech : currTecnology,
      name : name
    });
  }

  return listTech;
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
