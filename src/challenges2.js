// Desafio 10
function techList(techNamesArr,nomeAluno) {
  if (techNamesArr.length === 0) {
    return 'Vazio!';
  }
  let techListArr = [];
  let sortedTechNamesArr = techNamesArr.sort();
  for (let techName of sortedTechNamesArr) {
    techListArr.push({
      tech: techName,
      name:nomeAluno
    });
  }
  return techListArr;
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
