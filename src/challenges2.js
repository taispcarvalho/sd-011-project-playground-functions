// Desafio 10
function techList() {
  // seu código aqui
}
//console.logtechList(('React', 'Jest', 'HTML', 'CSS', 'JavaScript'));

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
  let sizeBC = lineB + lineC;
  let sizeAC = lineA + lineC;
  let sizeAB = lineA + lineB;
  if (lineA < sizeBC && lineA > sizeA && lineB < sizeAC && lineB > sizeB && lineC < sizeAB && lineC > sizeC) {
  return true;
} 
  else 
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
