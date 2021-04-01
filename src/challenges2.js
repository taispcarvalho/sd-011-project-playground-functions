// Desafio 10
function techList(arrTechNames, name1) {
  let arrTechNames2 = [];
  arrTechNames.sort();

  let result = '';

  if (arrTechNames.length === 0) {
    result = 'Vazio!';
  }

  for (let index = 0; index < arrTechNames.length; index += 1) {
    arrTechNames2[index] = {

      tech: arrTechNames[index],
      name: name1,
      };
      result = arrTechNames2;
  }

  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  let result;

  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    result = true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    result = true;
  } else {
    result = false;
  }

  return result;
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
