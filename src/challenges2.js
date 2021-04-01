// Desafio 10
function techList(arrayTech, name) {
  let newList = [];
  for (let tech of arrayTech) {
    let techObjetc = {
      tech: arrayTech[tech],
      nome: name,
    };
    newList.push(techObjetc);
  }
  return newList;
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
