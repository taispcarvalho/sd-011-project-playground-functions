// Desafio 10
function techList(arrayTechToLearn, name) {
  let sortedArray = arrayTechToLearn.sort();
  let storeTechsName = [];

  if (sortedArray.length !== 0) {
    for (let index = 0; index < sortedArray.length; index += 1) {
      let listObjTechName = {
        tech: sortedArray[index],
        name: name,
      };
      storeTechsName[index] = listObjTechName;
    }
    return storeTechsName;
  }
  return 'Vazio!';
}

console.log(techList([], 'Raphael'));

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
