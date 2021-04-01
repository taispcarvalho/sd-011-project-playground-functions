// Desafio 10
  // seu código aqui
function techList(techs, nameList) {
  techs.sort();
  let listTech = [];
  for (let index = 0; index < techs.length; index += 1) {
    let list = {
      tech: techs[index],
      name: nameList,
    };
    listTech.push(list);
  }
  if (listTech.length === 0) {
    return 'Vazio!';
  }
  return listTech;
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
