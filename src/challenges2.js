// Desafio 10
function techList(array, name) {
  let output = [];
  let object = {};
  let vetor = array.sort();
  for (let n in vetor){
    object = {
      tech: vetor[n],
      name: name
    }
    output.push (object);
  }
  if (output.length === 0){
    output = "Vazio!";
  }
  return output;
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
