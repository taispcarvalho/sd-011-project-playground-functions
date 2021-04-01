// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleCheck = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) &&  lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
  triangleCheck = true;
  }
  return triangleCheck;
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
