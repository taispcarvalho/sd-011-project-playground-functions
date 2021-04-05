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
  let obj = {
    'soma': function (a, b, c) {
      return (a + b > c && a + c > b && c + b > a);
    },
    'abs': function (a, b, c) {
      return Math.abs(a - b) < c && Math.abs(a - c) < b && Math.abs(c - b) < a;
    },
  };
  return obj['soma'](a, b, c) && obj['abs'](a, b, c);
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
