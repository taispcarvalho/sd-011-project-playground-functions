// Desafio 10
function techList(techArray, name) {
  if (techArray === 0) return 'vazio';
  let techListArray = [];
  let sortTechList = techListArray.sort;
  for (let techName of sortTechList) {
    techListArray.push({
      tech: techName,
      name,
    });
  }
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
