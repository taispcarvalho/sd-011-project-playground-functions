// Desafio 10
function techList(tech, name) {
  let result = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    result.push({ tech: tech[index], name });
  }
  return result;
}
// Desafio 11
let vetor = [9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1];

function checkSize (array) {
  if (array.length !== 11){
    return false;
  }
  return true;
}

function checkArray (array) {
  let number = 0;
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return false;
    }
    number = array[index];
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1){
      if (number === array[secondIndex]){
        count += 1;
      }
    }

  count = 0;
  if (count >= 3) {
    return false;
  }
  }
  return true;
}

function generatePhoneNumber (vetor){
  if (!checkSize(vetor)) {
    return 'Array com tamanho incorreto.';
  }
  if (!checkArray(vetor)) {
    return 'não é possível gerar um número de vetorefone com esses valores';
  }
  let ddd = `(${vetor[0]}${vetor[1]}) `;
  let firstFive = `${vetor[2]}${vetor[3]}${vetor[4]}${vetor[5]}${vetor[6]}`;
  let lastFour = `-${vetor[7]}${vetor[8]}${vetor[9]}${vetor[10]}`;
  return `${ddd}${firstFive}${lastFour}`;
}
console.log(generatePhoneNumber(vetor));

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
