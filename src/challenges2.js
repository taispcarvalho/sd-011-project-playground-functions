// Desafio 10
function techList(arrayTec, name) {
  let arrayResult = [];
  let arrayOrdenado = arrayTec.sort();
  for (let index = 0; index < arrayOrdenado.length; index += 1) {
    let object = {
      tech: arrayOrdenado[index],
      name,
    };
    arrayResult.push(object);
  }

  if (arrayTec.length === 0) {
    return 'Vazio!';
  }
  return arrayResult;
}

// Desafio 11
function repetArray(array) {
  for (let firstIndex = 0; firstIndex < array.length; firstIndex += 1) {
    let cont = 0;
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
      if (array[firstIndex] === array[secondIndex]) {
        cont += 1;
      }
      if (cont >= 3) {
        return cont;
      }
    }
  }
  return 0;
}

function validationArray(array) {
  let repeticao = repetArray(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 || repeticao >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return array;
}

function generatePhoneNumber(array) {
  let telefone = [];
  let cont = 0;
  if (typeof validationArray(array) === 'string') {
    return validationArray(array);
  }
  telefone[0] = '(';
  telefone[3] = ')';
  telefone[4] = ' ';
  telefone[10] = '-';
  for (let index = 0; index < array.length; index += 1) {
    if (telefone[cont] !== undefined) {
      index -= 1;
    } else {
      telefone[cont] = array[index].toString();
    }
    cont += 1;
  }
  return telefone.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    check = true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    check = true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    check = true;
  } else {
    check = false;
  }
  return check;
}

// Desafio 13
function hydrate(string) {
  let value = string.match(/\d+/g);
  let contador = 0;
  for (let index = 0; index < value.length; index += 1) {
    contador += parseFloat(value[index]);
  }
  if (contador <= 1) {
    return `${contador} copo de água`;
  }
  return `${contador} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
