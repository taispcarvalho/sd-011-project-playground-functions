// Desafio 10
function techList(arrayTech, nameDev) {
  let newTech = [];
  let newObj = [];

  for (let index = 0; index < arrayTech.length; index += 1) {
    newTech.push(arrayTech.sort()[index]);
  }
  for (let index = 0; index < nameDev.length; index += 1) {
    let object = {
      tech: newTech[index],
      name: nameDev,
    };
    newObj.push(object);
  }
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  return newObj;
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
