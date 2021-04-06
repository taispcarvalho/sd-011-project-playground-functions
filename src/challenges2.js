function techList(arrai, name) {
  if (arrai.length === 0) {
    return 'Vazio!';
  }
  arrai = arrai.sort();
  let listTech = [];
  for (let index = 0; index < arrai.length; index += 1) {
    listTech.push({
      tech: arrai[index],
      name
    });
  }
  return listTech;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
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
