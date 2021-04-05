// Desafio 10
function techList(technologies, name) {
  let arrayOfTechonlogies = [];

  if (technologies.length === 0) {
    return 'Vazio!'
  }
  for (let index = 0; index < technologies.length; index += 1) {
    arrayOfTechonlogies.push({ 'tech': technologies[index], 'name': name })
  }
  return arrayOfTechonlogies;
}

// Desafio 11
function generatePhoneNumber(numbers) {

}
let arrayPhoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

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
