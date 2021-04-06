// Desafio 10
function techList(techNames, name) {
  if (techNames.length === 0) {
    return 'Vazio!';
  }
  const techs = techNames.sort().map((tech) => ({ tech, name }));
    return techs;
  }

// Desafio 11
function generatePhoneNumber () {
  // seu código aqui
}
    
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const checkSum = lineA < lineB + lineC;
  const checkDiff = lineA > Math.abs(lineB - lineC);
  if (checkSum && checkDiff){
    return true;
  }
  return false;
}
  
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(1, 1, 5));


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
