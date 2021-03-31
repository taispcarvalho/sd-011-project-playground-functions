// Desafio 10
function techList(anyArray, anyName) {
  if (anyArray.length == 0) {
    return 'Vazio';
  } else {
    let sortedTechs = anyArray.sort();
    let techListArray = [];
    for (let techs of sortedTechs) {
      techListArray.push({tech: techs, name: anyName})
    }
    return techListArray;
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
