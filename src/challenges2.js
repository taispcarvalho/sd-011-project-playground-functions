// Desafio 10
function techList(array, name) {
  let listaObjeto = {
    tech: '',
    name: '',
  };

}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triCondi = true;
  let checkA = lineA < (lineB + lineC);
  let difLineA = lineA > Math.abs(lineB - lineC);
  let checkB = lineB < (lineA + lineC);
  let difLineB = lineB > Math.abs(lineA - lineC);
  let checkC = lineC < (lineA + lineB);
  let difLineC = lineC > Math.abs(lineA - lineB);
  if (checkA && difLineA) {
    triCondi = true;
  } else if (checkB && difLineB) {
    triCondi = true;
  } else if (checkC && difLineC) {
    triCondi = true;
  } else {
    triCondi = false;
  }
  return triCondi;
}
console.log(triangleCheck(5, 10, 3));

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
