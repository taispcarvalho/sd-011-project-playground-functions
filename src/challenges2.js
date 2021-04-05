// Desafio 10
function techList(list, owner) {
  let orderedList = list.sort();
  let techListname = [];
  for (let index = 0; index < orderedList.length; index += 1) {
    techListname.push({ tech: orderedList[index], name: owner });
  }
  return techListname;
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
