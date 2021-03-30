// Desafio 10
//  .sort() ordena os elementos, link sobre o metodo sort utilizado para este exercicio: https://www.w3schools.com/jsref/jsref_sort.asp
function techList(arr, nome) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
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
function generatePhoneNumber(arr) {}

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
function hydrate(a) {
  let replaced = a.replace(/\D/gim, '');
  let numbers = 0;
  for (let i = 0; i < replaced.length; i += 1) {
    numbers += Number(replaced[i]);
  }
  if (numbers === 1) {
    return `1 copo de água`;
  } else {
    return `${numbers} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
