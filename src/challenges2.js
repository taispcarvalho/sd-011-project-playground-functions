// Desafio 10
function techList(array, name) {
  array.sort();
  let secondArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let objects = {
      tech: array[index],
      nome: name,
    };
    secondArray.push(objects);
  }
  if (array === []) {
    return 'Vazio!';
  } else {
    return secondArray;
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
