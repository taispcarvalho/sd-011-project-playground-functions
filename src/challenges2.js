// Desafio 10
function techList(technology, name) {
  let orderedListObjects = [];
  let ordered = technology.sort();
  if (Object.keys(ordered).length !== 0 && ordered.constructor !== Object) {
    for (let index in ordered) {
      orderedListObjects[index] = {
        tech: ordered[index],
        name,
      };
    }
  } else {
    return 'Vazio!';
  }
  return orderedListObjects;
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
