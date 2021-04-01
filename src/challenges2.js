// Desafio 10
function techList(technologiesToLearn, nameOfPerson) {
  let newObject = [];
  if (technologiesToLearn.length === 0) return 'Vazio!';
  for (let index = 0; index < technologiesToLearn.length; index += 1) {
    newObject.push({
      tech: technologiesToLearn.sort()[index],
      name: nameOfPerson,
    });
  }
  return newObject;
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
