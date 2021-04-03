// Desafio 10
function techList(ArrayTechList, name) {
  let result = [];
  ArrayTechList.sort();
    if (ArrayTechList.length === 0) {
    return 'Vazio!';
  }
  if (ArrayTechList !== 0) {
    for (let index = 0; index < ArrayTechList.length; index += 1) {
      let obj = {
        tech: ArrayTechList[index],
        name: name,
      };
      result.push(obj);
  }
    return result;
  }
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
