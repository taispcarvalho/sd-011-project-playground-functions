// Desafio 10
function techList(tech, name) {
  let ordenedNames = tech.sort();
  let list = [];
  let listTec = {};
  
  if ( tech.length <= 0) {
    return 'Vazio';
  } else {
    for (let index = 0; index < tech.length; index += 1) {
      listTec = {
        tech: ordenedNames[index],
        name: `${name}`,
      }
      list.push(listTec)
    }
  }
  return list
}
/* console.table(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Antonio")); */
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
