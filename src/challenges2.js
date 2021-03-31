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
  let difference1 = Math.abs(lineB- lineC);
  let difference2 = Math.abs(lineA - lineC);
  let difference3 = Math.abs(lineA - lineB);
  let differences = [difference1, difference2, difference3];

  for (let side in triangle) {
    if (sum - triangle[side] <= triangle[side] && differences[side] >= triangle[side]) {
      return false;
    } return true;
  }
}
console.log(triangleCheck(15, 11, 8));

// Desafio 13
function hydrate(string) {
  let parameter = /\d+/g;
  let list = string.match(parameter).map(Number);
  let soma = 0;
  for (let index of list) {
    soma += index;
  }
  if (soma > 1) {
    return soma + ' copos de água.';
  } return soma + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
