// Desafio 10
function techList(arrayTec, name) {
  let arrayResult = [];
  let arrayOrdenado = arrayTec.sort();
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    let object = {
      tech: arrayOrdenado[index],
      name: name
    };
    arrayResult.push(object);
  }

  if (arrayTec.length === 0) {
    return 'Vazio!';
  } else {
    return arrayResult;
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
