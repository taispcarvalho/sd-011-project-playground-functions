// Desafio 10
function techList(array, name) {
  // seu código aqui
  array = array.sort();
  let objectsArray = [];
  let autor = name;
  for (let techCompany of array) {
    let object = {
      tech: techCompany,
      name: name,
    };
    objectsArray.push(object);
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
