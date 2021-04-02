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
  // seu código aqui
  let sizeA = Math.abs(lineB - lineC);
  let sizeB = Math.abs(lineA - lineC);
  let sizeC = Math.abs(lineA - lineB);
  if (lineA < (lineB + lineC) && lineA > sizeA && lineB < (lineA + lineC) && lineB > sizeB && lineC < (lineA + lineB) && lineC > sizeC) {
  return true;
} 
  else (lineA > (lineB + lineC) && lineA < sizeA && lineB > (lineA + lineC) && lineB < sizeB && lineC > (lineA + lineB) && lineC < sizeC) 
  return false;
}

//console.log(triangleCheck(10, 14, 8));

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
