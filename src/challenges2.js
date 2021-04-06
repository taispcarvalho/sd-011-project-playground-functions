// Desafio 10
function techList(technologiesList, name) {
  if (technologiesList.length < 1) {
    return 'Vazio!';
  }
  technologiesList = technologiesList.sort();
  let newList = [];
  for (let technology of technologiesList) {
    newList.push({
      tech: technology,
      name: name,
    });
  }
  return newList;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Lucas'));
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
