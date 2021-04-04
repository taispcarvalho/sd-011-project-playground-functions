// Desafio 10
function techList(array, name) {
  let sortArray = array.sort();
  let nome = name;
  let resultado = [];

  for (let index = 0; index <= sortArray.length; index += 1) {
    if (sortArray.length > 0) {
      resultado.push({
        tech: sortArray[index],
        name: nome,
      });
    } else {
      resultado = 'Vazio!';
    }
  }
  return resultado;
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
