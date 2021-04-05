function techList(lista, nome) {
  let emOrdem = lista.sort();
  let arrObj = [];
  if (emOrdem.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index <= emOrdem.length - 1; index += 1) {
    arrObj.push({ tech: emOrdem[index], name: nome });
  }
  return (arrObj);
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
