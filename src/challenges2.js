// Desafio 10
function techList(tech, name) {
if (tech.length < 1) {
    return 'Vazio!';
  }
  
  let ordenedNames = tech.sort();
  let list = [];
  let listTec = {};
    for (index in tech) {
      listTec = {
        tech: ordenedNames[index],
        name: `${name}`,
      }
    
      list.push(listTec)

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
