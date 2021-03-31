// Desafio 10
function techList(techs, name) {
  let arrayTechName = [];

  if (techs == '') {
    return 'Vazio!'
  }

  for (let index in techs) {
    let object = {};
    object['tech'] = techs[index];
    object['name'] = name;
    arrayTechName.push(object);    
  }
  return arrayTechName;
}
console.log(techList([], 'Felipe'));

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
