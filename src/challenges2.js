// Desafio 10
function techList(list, name) {
  let saida = [];
  let objeto = {};
  if (list.length <= 0) {
    return 'Vazio!'
  }else {
    for (let index = 0; index < list.length; index += 1) {
      objeto = {
        tech: list.sort()[index],
        name: name
      }
      saida.push(objeto)
    }
    return saida
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
