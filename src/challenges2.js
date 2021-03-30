// Desafio 10
//  .sort() ordena os elementos, link sobre o metodo sort utilizado para este exercicio: https://www.w3schools.com/jsref/jsref_sort.asp
function techList(arr, nome) {
  let arrayOrdenada = arr.sort();
  let obj = [];
  for (let i = 0; i < arr.length; i += 1) {
    obj[i] = {
      tech: arrayOrdenada[i],
      name: nome,
    };
  }
  return obj;
}

// Desafio 11
function generatePhoneNumber() {}

// Desafio 12
function triangleCheck(a, b, c) {
  let param = [a, b, c];
  for (let i = 0; i < 3; i += 1) {
    if (
      param[i] < param[i + 1] + param[i + 2] &&
      param[i] > Math.abs(param[i + 1] - param[i + 2])
    ) {
      return true;
    } else {
      return false;
    }
  }
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
