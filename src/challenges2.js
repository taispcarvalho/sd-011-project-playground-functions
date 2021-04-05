// Desafio 10
function techList(array, name) {
  let sortArray = array.sort();
  let nome = name;
  let resultado = [];

  if (array.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < sortArray.length; index += 1) {
    if (sortArray.length > 0) {
      resultado.push({
        tech: sortArray[index],
        name: nome,
      });
    }
  }
  return resultado;
}

// Desafio 11
function checkRequirements(array) {
  for (let index = 0; index < array.length; index += 1) {
    let contador = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        contador += 1;
      }
    }
    if (array[index] < 0 || array[index] > 9 || contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(array) {
  if (checkRequirements(array) !== undefined) {
    return checkRequirements(array);
  }

  let resultado = '';

  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      resultado += '(';
      resultado += array[index];
    } else if (index === 1) {
      resultado += array[index];
      resultado += ')';
    } else if (index === 2) {
      resultado += array[index];
      resultado += array[index + 1];
      resultado += array[index + 2];
      resultado += array[index + 3];
      resultado += array[index + 4];
      resultado += '-';
    } else if (index === 7) {
      resultado += array[index];
      resultado += array[index + 1];
      resultado += array[index + 2];
      resultado += array[index + 3];
    } else if (array.length !== 11) {
      resultado = 'Array com tamanho incorreto.';
    }
  }

  return resultado;
}

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
