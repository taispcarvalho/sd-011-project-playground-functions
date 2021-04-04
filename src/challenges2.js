// Desafio 10
function techList(technologies, name) {
  let result = [];
  let objects = {}
  let ordenado = technologies.sort();
  for (let index = 0; index < ordenado.length; index += 1) {
    objects = {
      technologies: ordenado[index],
      name,
    };
    result.push(objects);
  }
  if (result.length === 0) {
    result = 'Vazio!';
  }
  return result;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Alan'))

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
