// Desafio 10
function myFunction(objects, index, myName) {
  objects[index] = {
    tech: objects[index],
    name: myName,
  };
  index += 1;
  return objects;
}
function techList(objects, name) {
  if (objects != null) {
    let index = 0;
    for (let index = 0; index < objects.length; index += 1) {
      objects = myFunction(objects, index, name);
    }
    return objects;
  }
  return 'Vazio!';
}
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Marcelo'));

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
