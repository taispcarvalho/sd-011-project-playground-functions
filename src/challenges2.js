// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  let techList = [];
  let sortedTechNamesArray = array.sort();

  for (let techName of sortedTechNamesArray) {
    techList.push({
      tech: techName,
      name: name,
    });
  }
  return techList;
}

console.log(techList([]));
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

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
