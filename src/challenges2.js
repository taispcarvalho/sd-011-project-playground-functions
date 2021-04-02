// Desafio 10

function techList(tech, name) {
  let objectTech = [];
  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    objectTech.push({
      tech: tech[index], name,
    });
  }
  if (objectTech.length === 0) {
    return 'Vazio!';
  }
  return objectTech;
}

console.log(techList(['React', 'Javascrit', 'CSS', 'HTML', 'C#'], 'Alexandre'))

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
