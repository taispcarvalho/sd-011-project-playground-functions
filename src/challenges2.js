// Desafio 10
function techList(techno, name) {
  let techOrdeal = techno.sort();
  let resulTech = [];
  for (let index = 0; index < techOrdeal.length; index += 1) {
    resulTech.push({ tech: techOrdeal[index], name: name });
  }
  return resulTech;
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
