// Desafio 10
function techList(techList, name) {
  let newTechList = [];

  if (techList.length > 0) {
    for (let index = 0; index < techList.length; index += 1) {
      newTechList[index] = {};
      newTechList[index].tech = techList[index];
      newTechList[index].name = name;
    }
    newTechList = newTechList.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
    return newTechList;
  } else {
    return 'Vazio!';
  }
}

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
