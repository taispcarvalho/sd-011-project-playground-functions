// Desafio 10
function techList(techArray, names) {
  if (techArray === 0) {
    return 'Vazio!';
  }

  let finalArray = [];
  let finalArraySort = techArray.sort();

  for (let listTech of finalArraySort) {
    finalArray.push({
      tech: listTech,
      name: names,
    });
  }
  return finalArray;
}
// Para o desenvolvimento do código do Desafio 10 utilizei o código do Inacio como inspiração

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
