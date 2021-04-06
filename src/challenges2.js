// Desafio 10
function techList(arrTech, lame) {
  let arr2 = [];
  if (arrTech.length === 0) return 'Vazio!';
  arrTech.sort().forEach((element) => { arr2.push({ tech: element, name: lame }); });
  return arr2;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC));
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
