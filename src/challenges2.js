// Desafio 10
function techList(tech, name) {
  tech = tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    tech[index] = {
      tech: tech[index],
      name,
    };
  }
  if (tech.length === 0) {
    tech = 'Vazio!';
  }
  return tech;
}

// Desafio 11
function withElevenNumbers(array){
  let phoneNumber = ['(', 0, 0, ')', 0, 0, 0, 0, 0, '-', 0, 0, 0, 0], difOfIndex = 1;
  for (let index = 0; index < array.length; index += 1) {
    if (index === 2 || index === 8) {
      difOfIndex += 1;
      phoneNumber[index + difOfIndex] = array[index];
    } else {
      phoneNumber[index + difOfIndex] = array[index];
    }
  }
  return phoneNumber.join('');
}
function generatePhoneNumber(array) {
  if (array.length === 11) {
    return withElevenNumbers(array);
  } else {
    return 'Array com tamanho incorreto.';
  }
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
