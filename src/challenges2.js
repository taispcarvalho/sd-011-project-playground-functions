// Desafio 10
function techList(techs, name) {
  let objecTemplate = {};
  let listOfObjects = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  techs.sort();
  for (let index = 0; index < techs.length; index += 1) {
    objecTemplate = {};
    objecTemplate.tech = techs[index];
    objecTemplate.name = name;
    listOfObjects.push(objecTemplate);
  }
  return listOfObjects;
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
