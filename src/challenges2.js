// Desafio 10
function techList(array, name) {
  // seu código aqui
  let guardaValor;
  if (array.length === 0) {
    guardaValor = 'Vazio';
  } else {
    let guarda = [];
    array = array.sort();
    for (let index = 0; index <= array.length; index += 1) {
      guardaValor.push(
        { tech: array[index], name },
      );
    }
    guardaValor = guarda;
  }
  return array;
}
let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
techList(array);
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
