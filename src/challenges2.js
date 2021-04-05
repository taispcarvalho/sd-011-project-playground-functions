// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
  let ok, soma, abs = false;

  soma = a + b > c && a + c > b && c + b > a;
  abs = Math.abs(a - b) < c && Math.abs(a - c) < b && Math.abs(c - b) < a;

  return soma && abs;
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
