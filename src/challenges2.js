function techList(techs, name) {
  let orderedTechList = [];
  if (techs.length === 0) {
    return ('Vazio!');
  }
  techs.sort();
  for (let index = 0; index < techs.length; index += 1) {
    console.log(techs[index]);
    orderedTechList.push({ tech: techs[index], name });
  }
  return (orderedTechList);
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
