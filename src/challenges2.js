// Desafio 10
function techList(array, name) {}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  let cont;
  for (let index = 0; index < array, length; index += 1) {
    for (let indexJ = 0; indexJ < array.length; indexJ += 1) {
      cont = array[index];
      if (cont === array[indexJ]) {
        cont += 1;
      }
      if (cont > 2 || array[indexJ] < 0 || array[indexJ] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}-${array[6]}${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
