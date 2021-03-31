// Desafio 10
function techList(techs, name) {
  let arrayTechName = [];
  let orderedTechs = techs.sort();

  if (techs === '') {
    return 'Vazio!';
  }

  for (let index in orderedTechs) {
    let object = {};
    object['tech'] = orderedTechs[index];
    object['name'] = name;
    arrayTechName.push(object);    
  }
  return arrayTechName;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Felipe'));

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
