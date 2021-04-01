// part of Desafio 10
function objectBuilder(tech, name) {
  let object = {
    tech: `${tech}`,
    name: `${name}`,
  };
  return object;
}

// Desafio 10
function techList(techArray, name) {
  let newTechList = [];
  let sortedTechs = techArray.sort();

  if (techArray.length > 0) {
    for (let tech of sortedTechs) {
      newTechList.push(objectBuilder(tech, name));
    }
    return newTechList;
  }
  return 'Vazio!';
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
