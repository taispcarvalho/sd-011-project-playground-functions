// Desafio 10
function techList(techList, name) {
  if ( techList.length === 0){
    return 'Vazio!';    
  }
  let techListOrder = techList.sort();
  let techListFinal = [];

  for (let techList of techListOrder){
    techListFinal.push({
      tech: techList,
      name: name,
    });
  }
  return techListFinal;
}
console.log(techList(['css', 'teste', 'teste', 'teste'], 'tulio'));
console.log(techList([], 'tulio'));

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
