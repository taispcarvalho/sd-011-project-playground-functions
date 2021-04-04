// Desafio 10
function techList(techName, name) {
  let ordemName = techName.sort();
  let arrayObj = [];
  let techObj = {}; 
  if(techName.length <= 0){
    return 'Vazio!'
  }
  for (let index = 0; index < techName.length; index += 1){
    techObj = {
    tech: ordemName[index],
    name: name,
  }
  arrayObj.push(techObj)
  }

return (arrayObj)
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
