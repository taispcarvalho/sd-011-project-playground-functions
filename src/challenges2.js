// Desafio 10
function sortObject(element, name) {
  return {tech: element, name: name};
}
function techList(array, name) {
  let newObject = [];
  if (array.length === 0 ) return 'vazio';
  for (element of array.sort()) {
    newObject.push(sortObject(element, name));
  }
  return newObject;
}

let lista = ["React", "Jest", "HTML", "CSS", "JavaScript"];
console.log(techList(lista, 'Lucas'));
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
