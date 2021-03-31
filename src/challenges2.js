// Desafio 10
function techList(ability, name) {
  let abilityList = [];
  if (Array.isArray(ability) && ability.length > 0) {
    for (let i = 0; i < ability.length; i += 1) {
      abilityList[i] = { tech: `${ability[i]}`, name };
    }
  } else {
    abilityList = 'Vazio!';
  }
  return abilityList;
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
