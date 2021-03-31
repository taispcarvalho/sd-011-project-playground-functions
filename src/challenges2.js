// Desafio 10
function techList(technology, name) {
  if (technology.length === 0) {
    return 'Vazio!';
  }

  let orderTech = technology.sort();
  let listTech = [];

  for (let currTecnology of orderTech) {
    listTech.push({
      tech: currTecnology,
      name: name,
    });
  }

  return listTech;
}

// Desafio 11
function countRepeatNumber(arrayNumbers) {
  let counts = {};
  let repeatNum = false;

  arrayNumbers.forEach( function(index) {
    counts[index] = (counts[index] || 0) + 1;
  });

  for (let property in counts) {
    if (counts[property] >= 3) {
      repeatNum = true;
    }
  }
  return repeatNum;
}

function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let phoneNumber = '';

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9 || countRepeatNumber(arrayNumbers)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    phoneNumber = `(${arrayNumbers.slice(0, 2).join('')}) 
      ${arrayNumbers.slice(2, 7).join('')}
      -${arrayNumbers.slice(7).join('')}`;
  }
  return phoneNumber;
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
