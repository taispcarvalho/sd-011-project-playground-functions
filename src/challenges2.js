// Desafio 10
function techList(array, name) {
  let lista = array;
  let object;

  if (lista.length === 0) {
    object = 'Vazio!';
  } else {
    let objects = [];
    lista = lista.sort();

    for (let index = 0; index < lista.length; index += 1) {
      objects.push(
        { tech: lista[index], name },
      );
    }
    object = objects;
  }
  return object;
}

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck() {

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
