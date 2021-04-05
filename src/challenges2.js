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
  // let soma = (a + b > c && a + c > b && c + b > a);
  // let abs = (Math.abs(a - b) < c && Math.abs(a - c) < b && Math.abs(c - b) < a);
  // return soma && abs;
  return (a + b > c && a + c > b && c + b > a) && (Math.abs(a - b) < c && Math.abs(a - c) < b && Math.abs(c - b) < a);
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
