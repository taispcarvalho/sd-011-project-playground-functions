// Desafio 10 Vitor Cardoso //https://eslint.org/docs/2.0.0/rules/guard-for-in //Marlon Turma 11
function techList(techs, names) {
  let skills = [];
  if (techs.length > 0) {
    for (let index in techs.sort()) {
      if ({}.hasOwnProperty.call(techs, index)) {
        skills[index] = {
          tech: techs[index],
          name: names,
        };
      }
    }
  } else return 'Vazio!';
  return skills;
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
