// Desafio 10
function techList(array, name) {
  // seu código aqui
  let guardaValor;
  if (array.length === 0) {
    guardaValor = 'Vazio';
  } else {
    guardaValor = [];
    array = array.sort();
    for (let index = 0; index < array.length; index += 1) {
      guardaValor.push(
        { tech: array[index], name },
      );
    }
    return array;
  }
}
let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'lucas';
techList(array, name);
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
