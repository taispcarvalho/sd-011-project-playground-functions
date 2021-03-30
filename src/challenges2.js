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
function triangleCheck() {
  // seu código aqui
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
