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
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
  return false;
} else if (lineA < sizeA || lineB < sizeB || lineC < sizeC) {
  return false;
} else
  return true;
}
// console.log(triangleCheck(10, 14, 8));

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
