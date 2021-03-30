// Desafio 10
function techList(arrTec, name) {
  let arrObjectTech = [];
  arrTec.sort();
  for (let i = 0; i < arrTec.length; i += 1) {
    arrObjectTech[i] = {
      tech: arrTec[i],
      name: name,
    };
  }
  return arrObjectTech;
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
