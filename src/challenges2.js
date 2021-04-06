// Desafio 10
function techList(array, name) {
  let objeto = [];
  if (array.length === 0) {
    return "Vazio!";
  } else {
    array = array.sort();
    for (let i in array) {
      objeto[i] = {
        tech: array[i],
        name: name,
      };
    }
    return objeto;
  }
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
