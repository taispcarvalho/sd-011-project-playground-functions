// Desafio 10
function techList(technology, name) {
  object = [];
  technology.sort()
  if (technology.length === 0) {
    object = 'Vazio!'
  } else {
    for (let index = 0; index < technology.length; index +=1) {     

    object.push({tech: technology[index], name})

  }
   return object;
  }
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
