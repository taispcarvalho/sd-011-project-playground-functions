// Desafio 10

function ordenadorTech(a, b) {
  if (a.tech > b.tech) {
    return 1;
  }
  if (a.tech < b.tech) {
    return -1;
  }
  return 0;
}

function techList(array, student) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push({
      tech: array[index],
      name: student,
    });
  }
  return newArray.sort(ordenadorTech);
}

// Desafio 11
let count;
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    for (let indexJ = 0; indexJ < array.length; indexJ += 1) {
      let avaliator = array[index];
      if (avaliator === array[indexJ]) {
        count += 1;
      }
      if (count > 2 || array[indexJ] < 0 || array[indexJ] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  let ddd = `(${array[0]}${array[1]})`;
  let num1 = ` ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  let num2 = `-${array[7]}${array[8]}${array[9]}${array[10]}`;
  return `${ddd}${num1}${num2}`;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
