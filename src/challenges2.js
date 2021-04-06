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
      name,
    });
  }
  return packageSkills;
}

// Desafio 11
function phone(fone) {
  let repeatCaracter = 0;
  for (let index in fone) {
    repeatCaracter = 0;
    for (let index2 in fone) {
      if (fone[index] === fone[index2]) {
        repeatCaracter += 1;
      }
    }
  }
  return repeatCaracter;
}
function repeatPhone(fone) {
  let repeatCaracter2 = phone(fone);
  if (repeatCaracter2 >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (repeatCaracter2 < 3) {
    return true;
  }
}
function validateSimple(fone) {
  if (fone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in fone) {
    if (fone[index] < 0 || fone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return true;
}

function generatePhoneNumber(fone) {
  if (repeatPhone(fone) === true && validateSimple(fone) === true) {
    return `(${fone[0]}${fone[1]}) `
      + `${fone[2]}${fone[3]}${fone[4]}${fone[5]}${fone[6]}-`
      + `${fone[7]}${fone[8]}${fone[9]}${fone[10]}`;
  } if (repeatPhone(fone) !== true) {
    return repeatPhone(fone);
  } if (validateSimple(fone) !== true) {
    return validateSimple(fone);
  }
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let partA = lineA < lineB + lineC;
  let partB = lineA > Math.abs(lineB - lineC);
  return partA && partB;
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
