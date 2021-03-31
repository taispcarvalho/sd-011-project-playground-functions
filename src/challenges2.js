// Desafio 10

function techList(techArray, name) {
  let sortedArray = techArray.sort();
  let arrayOfObjects = []
  if (techArray.length === 0) {
    return 'Vazio!'
  } 
  for (index = 0; index < sortedArray.length; index += 1) {
    let object = {
      tech: techArray[index],
      name: name,
    }
    arrayOfObjects.push(object)
  }
  return arrayOfObjects;
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
