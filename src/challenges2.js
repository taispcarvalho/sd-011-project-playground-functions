// Desafio 10
function techList(techArray, nameStudent) {
  if (techArray === 0) {
    return 'Vazio!';
  }
  let techListArray = [];
  let sortList = techArray.sort();
  for (let techName of sortList) {
    techListArray.push({
      tech: techName,
      name: nameStudent,
    });
  }
  return techListArray;
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
