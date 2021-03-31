// Desafio 10
function techList(tech, name2) {
  let list = [];
  let data = {};
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    tech = tech.sort();
    data = {
      tech: tech[index],
      name: name2,
    };
    list.push(data);
  }
  return list;
}

// Desafio 11
function generatePhoneNumber() {
  
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
