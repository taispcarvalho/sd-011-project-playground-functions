// Desafio 10
function techList(arrTechNames, name1) {
  
  let arrTechNames2 = [];
  arrTechNames.sort();

  if (arrTechNames === []) {
    return 'Vazio!'
  }

  for (let index = 0; index < arrTechNames.length; index += 1) {
    
    arrTechNames2[index] = {
      
      tech: arrTechNames[index],
      name: name1,
      };
  }

  return arrTechNames2;
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
