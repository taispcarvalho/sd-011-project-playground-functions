// Desafio 10
function techList(array, name) {
  array = array.sort()
  let arrayTech = []

  for(let index in array){
    arrayTech.push({
      tech: array[index],
      name: name
    })
  }

  return arrayTech
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
