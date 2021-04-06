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
  if (Math.abs(lineB - lineC) < lineA && Math.abs(lineA - lineC) < lineB
&& Math.abs(lineA - lineB) < lineC) {
    return true;
  }
  return false;
}
// Desafio 13
function hydrate(orderString) {
  let countArray = orderString.match(/\d+/g);
  countArray = countArray.map((count) => parseInt(count, 10));
  let totalCount = countArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (totalCount === 1) {
    return '1 copo de água';
  }
}
console.log(hydrate('1 cachaça'));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
