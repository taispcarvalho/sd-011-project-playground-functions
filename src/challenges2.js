// Desafio 10
function techList(tecnologias, name) {
  // seu código aqui
  let retorno = [];
  let ordem = tecnologias.sort();
  if (ordem.length != 0){
    for (let index in ordem){
      retorno[index]={
        tech: ordem[index],
        name: name
      }
    }
    return retorno;
  }else{
    return 'Vazio!';
  }
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
