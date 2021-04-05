// Desafio 10
//let lista = ["React", "Jest", "HTML", "CSS", "JavaScript"];
//let nome = "Wilquer";
function techList(nome,lista) {
  let emOrdem = lista.sort();
  if (emOrdem.length === 0) {
    return ("'Vazio!'");
  } else {
    for (let index = 0; index <= emOrdem.length - 1; index += 1) {
      let arrObj = [Object = {
        tech: emOrdem[index],
        name: nome
        }]
        ///console.log(arrObj);
      return (arrObj);
    }
  }
}
//techList(nome,lista);
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
