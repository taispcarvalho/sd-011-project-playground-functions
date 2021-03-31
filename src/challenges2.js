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
function numbersNotAccept(arr) {
  let noAccept = false;

  for (let currNumber of arr) {
    if (currNumber < 0 || currNumber > 9) {
      noAccept = true;
    }
  }

  return noAccept;
}

function countRepeatNumber(arr) {
  let counts = {};
  let repeatNum = false;

  arr.forEach(function (index) {
    counts[index] = (counts[index] || 0) + 1;
  });

  for (let property in counts) {
    if (counts[property] >= 3) {
      repeatNum = true;
    }
  }
  return repeatNum;
}

function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (numbersNotAccept(arr) || countRepeatNumber(arr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let phoneNumber = `(${arr.slice(0, 2).join('')})${arr.slice(2, 7).join('')}-${arr.slice(7).join('')}`;

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
