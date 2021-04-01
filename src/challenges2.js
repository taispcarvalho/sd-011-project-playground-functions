// Desafio 10
function techList(array, myName) {
  let retorno = [];
  let retorno1 = array.sort();
  if (retorno1.length !== 0) {
    for (let index in retorno1) {
      retorno[index] = {
      tech: array[index],
      name: myName,
      };
    }
  } else {
    return 'Vazio!';
  }
  return retorno;
  // seu código aqui
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
