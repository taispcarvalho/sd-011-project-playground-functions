// Desafio 10
function techList(array, name) {
  let newArray = [];
  array = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    newArray.push({
      tech: array[tech],
      name: name,
    });
  }
  return newArray;
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Felipe');

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
