// Desafio 10
function techList(techArray, name) {
  // seu código aqui
  techArray.sort();
  let objectArray = [];
  if (techArray.length > 0) {
    for (let i = 0; i < techArray.length; i += 1) {
      objectArray.push({ tech: techArray[i], name });
    }
    return objectArray;
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
