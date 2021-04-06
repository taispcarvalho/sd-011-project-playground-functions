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
  if (lineA <= 0 || lineB <= 0 || lineC <= 0) {
    return false;
  }
  let linesTriangle = [lineA, lineB, lineC];
  linesTriangle.sort((a, b) => b - a);
  if (linesTriangle[0] + linesTriangle[1] < linesTriangle[3]) {
    return false;
  }
  return true;
}
// Desafio 13
function hydrate(string) {
  let reduction = /\d+/g;
  let quantity = string.match(reduction).map(Number);
  let count = 0;
  for (let index of quantity) {
    count += index;
  }
  if (count > 1) {
    return `${count} copos de água`;
  }
  return `${count} copo de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
