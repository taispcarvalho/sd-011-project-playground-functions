// Desafio 10
function techList(list, name1) {
  if (list.length === 0) {
    return 'Vazio!';
  }

  let result = [];
  result = result.sort();
  for (let technology of list) {
    result.push({
      tech: technology,
      name: name1,
    });
  }
  return result;
}
console.log(techList(['A', 'B', 'C'], 'José'));

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
