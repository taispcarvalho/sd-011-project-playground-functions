// Desafio 10
function techList(techArray, techName) {
  if (techArray.lenght === 0) {
    return 'Vazio!';
  }
  techArray = techArray.sort();
  let techNewArray = [];

  for (let index = 0; index < techArray.lenght; index += 1) {
    techNewArray.push({
      tech: techArray[index],
      name: techName,
    });
  }
  return techNewArray;
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
