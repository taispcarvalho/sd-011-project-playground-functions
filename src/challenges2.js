// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let list = {
    tech : '',
    name : name
  };
if (tech.length === 0) {
  'Vazio!'
}
for (const key of tech) {
  list.tech += key;
  console.log (list);
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
