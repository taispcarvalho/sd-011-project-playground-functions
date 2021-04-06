// Desafio 10
function techList(array, name) {
  let objeto = [];
  if (array.length === 0) {
    return "Vazio!";
  } else {
    array = array.sort();
    for (let i in array) {
      objeto[i] = {
        tech: array[i],
        name: name,
      };
    }
    return objeto;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkLadoA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let checkLadoB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let checkLadoC = lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);

  if (checkLadoA === true && checkLadoB === true && checkLadoC === true) {
    return true;
  } else {
    return false;
  }
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
