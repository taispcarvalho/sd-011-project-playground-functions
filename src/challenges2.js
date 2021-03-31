// Desafio 10
function techList(techToLearn, myName) {
  if (techToLearn.length === 0) {
    return 'Vazio!';
  }
  let listOfTechToLearn = [];
  let techToLearnSorted = techToLearn.sort();
  for (let index = 0; index < techToLearn.length; index += 1) {
    let newObject = { tech: techToLearnSorted[index], name: myName };
    listOfTechToLearn.push(newObject);
  }
  return listOfTechToLearn;
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
