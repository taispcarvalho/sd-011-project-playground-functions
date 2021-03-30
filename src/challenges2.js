// Desafio 10
function techList(value, name) {
  if (value.length === 0) {
    return 'Vazio!';
  } else {
    let ret = [];
    for (let index = 0; index < value.length; index += 1) {
      ret[index] = {
        tech: value[index],
        name: name
      }
    }
    return ret;
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
