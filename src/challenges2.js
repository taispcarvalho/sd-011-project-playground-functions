// Desafio 10
function techList(skills, name) {
  let packageSkills = [];

  if (skills.length <= 0) {
    return 'Vazio!';
  }
  skills.sort();
  for (let index = 0; index < skills.length; index += 1) {
    packageSkills.push({
      tech: skills[index],
      name: name
    });
  }
  return packageSkills;
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
