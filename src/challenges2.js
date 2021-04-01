// Desafio 10
function techList(array, myName) {
  let techName = [];
  // Nessa parte, para resolver o problema do lint ('Guarding for-in (guard-for-in)') utilizei este material: https://eslint.org/docs/2.0.0/rules/guard-for-in
  for (let index in array.sort()) {
    if ({}.hasOwnProperty.call(array, index)) {
      techName[index] = {
        tech: array[index],
        name: myName,
      };
    }
  }
  if (techName.length === 0) {
    return 'Vazio!';
  }
  return techName;
}

console.log(techList([], 'Vitor'));

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
