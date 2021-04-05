// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(x, y, z) {
  let obj = {
    soma: function (a, b, c) {
      return (a + b > c && a + c > b && c + b > a);
    },
    abs: function (a, b, c) {
      return Math.abs(a - b) < c && Math.abs(a - c) < b && Math.abs(c - b) < a;
    },
  };
  return obj.soma(x, y, z) && obj.abs(x, y, z);
}
console.log (triangleCheck(10, 14, 8));
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
