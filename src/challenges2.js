// Desafio 10
function techList() {
}
// Desafio 11
function generatePhoneNumber() 
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineB + lineC > lineA && lineA + lineC > lineB) {
    return true;
  }
  if (Math.abs(lineB - lineC) < lineA && Math.abs(lineA - lineC) < lineB 
&& Math.abs(lineA - lineB) < lineC) {
    return true;
  }
  return false;
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
