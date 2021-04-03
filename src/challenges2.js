// Desafio 10
/*
referencia para o uso do metodo sort > https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
Referencia sobre o uso do 'ternary operator': https://www.w3schools.com/jsref/jsref_operators.asp
*/
function techList(tech, name) {
  if (tech === []) {
    return ('Vazio!');
  }
  let technologies = [];
  for (let techno of tech) {
    let technology = { tech: '', name: '' };
    technology.tech = techno;
    technology.name = name;
    technologies.push(technology);
  }
  return (technologies.sort((a, b) => ((a.tech > b.tech) ? 1 : -1)));
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
