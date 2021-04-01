// Desafio 10
function techList(array, name) {
  let retorno = [];
  let retorno1 = array.sort();
  if (retorno1.length !== 0) {
    for (let index in retorno1) {
      retorno[index] = {
      tech: array[index],
      name: name,
      } 
    }
    return retorno;
  } else {
    return 'Vazio!';
  }
  // seu código aqui
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Julio'));
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
