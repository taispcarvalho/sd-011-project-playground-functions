// Desafio 10
function createObject(techs, name) {
  let arrayObject = [];

  for (let index of techs) {
    let objectTech = {};

    objectTech.tech = index;
    objectTech.name = name;

    arrayObject.push(objectTech);
  }

  return arrayObject;
}

function techList(techs, name) {
  let arrayObject = [];

  if (arrayObject === []) {
    console.log('Vazio!');
  } else {
    arrayObject = createObject(techs, name);
  }

  return arrayObject;
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
