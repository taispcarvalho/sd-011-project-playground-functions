// Desafio 10
function techList(array, name) {
  if (array.length <= 0) {
    return 'Vazio!';
  } let newarray = [];
  array = array.sort();
  // eslint-disable-next-line space-infix-ops
  for (let tech = 0; tech < array.length; tech =+1) {
    newarray.push({
      tech: array[tech],
      // eslint-disable-next-line object-shorthand
      name: name,
    });
  } return newarray;
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
