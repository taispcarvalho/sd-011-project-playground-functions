// Desafio 10
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
  newArray.sort(ordenadorTech);
  return;
}

function ordenadorTech(a, b) {
  if (a.tech > b.tech) {
    return 1;
  } else if (a.tech < b.tech) {
    return -1;
  }
  return 0;
}

// Desafio 11
function generatePhoneNumber(array) {
  console.log(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    let count = 0;
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
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
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
