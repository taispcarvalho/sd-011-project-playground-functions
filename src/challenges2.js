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
  let triangle = [lineA, lineB, lineC];
  let sum = lineA + lineB + lineC;
  let difference1 = Math.abs(lineB - lineC);
  let difference2 = Math.abs(lineA - lineC);
  let difference3 = Math.abs(lineA - lineB);
  let differences = [difference1, difference2, difference3];

  for (let side in triangle) {
    if (sum - triangle[side] <= triangle[side] && differences[side] >= triangle[side]) {
      return false;
    } return true;
  }
}

// Desafio 13
function hydrate(string) {
  let parameter = /\d+/g;
  let list = string.match(parameter).map(Number);
  let soma = 0;
  for (let index of list) {
    soma += index;
  }
  return soma;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
