// Desafio 10
function techList(arrayTechList, name) {
  let arrayTechAndName = []
  arrayTechList.sort()

  if (arrayTechList.length > 0) {
    for (let index = 0; index < arrayTechList.length; index += 1) {
      arrayTechAndName[index] = {
        tech: arrayTechList[index],
        name: name,
      }
    }
    return arrayTechAndName

  } else {
    return ('Vazio!')
  }
}

console.log(techList([], "Lucas"))

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
