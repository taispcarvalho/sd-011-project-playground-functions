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
      name: name,
    });
  }
  return packageSkills;
}

// Desafio 11
function validatorPhoneNumber(fone) {
  let repeatCaracter = 1;
  if (fone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in fone) {
    if (fone[index] === fone[index + 1]) {
      repeatCaracter += 1;
    }
  }
  if (repeatCaracter >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}

function generatePhoneNumber(fone) {
  for (let index in fone) {
    if (fone[index] < 0 || fone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (validatorPhoneNumber(fone) === true) {
    return `(${fone[0]}${fone[1]}) `
      + `${fone[2]}${fone[3]}${fone[4]}${fone[5]}${fone[6]}-`
      + `${fone[7]}${fone[8]}${fone[9]}${fone[10]}`;
  }
  return validatorPhoneNumber(fone);
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
