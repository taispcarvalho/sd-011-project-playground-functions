// Desafio 10
function techList(techNames, name) {
  if (techNames.length <= 0) {
    return 'Vazio!';
  }
  let arrayAux = [];
  techNames = techNames.sort();
  for (let index = 0; index < techNames.length; index += 1) {
    arrayAux.push({
      tech: techNames[index],
      name,
    });
  }
  return arrayAux;
}
// Desafio 11
function generatePhoneNumber() {
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC) {
    if (lineB + lineC > lineA) {
      if (lineA + lineC > lineB) {
        return true;
      }
    }
  }
  if (Math.abs(lineB - lineC) < lineA && Math.abs(lineA - lineC) < lineB
&& Math.abs(lineA - lineB) < lineC) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));
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
