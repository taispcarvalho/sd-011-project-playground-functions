// Desafio 10
function techList(array, name) {
  let test = [];
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    test.push({
      tech: array[index],
      name,
    });
  }
  if (array.length === 0) {
    return 'Vazio!';
  }
  return test;
}

// Desafio 11
function numeroZeroNove(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] >= 10) {
      return false;
    }
  }
  return true;
}
function repeticaoNumero(array) {
  let contador = 0;
  let index = 0;
  for (let indexCont = 0; indexCont < array.length; indexCont += 1) {
    if (array[indexCont] === array[index]) {
      contador += 1;
    }
  }
  if (contador >= 3) {
    return true;
  }contador = 0;
  return false;
}
function generatePhoneNumber(array) {
  if (array.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  if (array.length === 11) {
    let primeiraParte = `(${array[0]}${array[1]}) ${array[2]}${array[3]}`;
    let segundaParte = `${array[4]}${array[5]}${array[6]} - ${array[7]}`;
    let ultimaParte = `${array[8]}${array[9]}${array[10]}`;
    return (primeiraParte + segundaParte + ultimaParte);
  }
  if (numeroZeroNove(array) || repeticaoNumero(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return generatePhoneNumber(array);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
console.log(generatePhoneNumber(arr));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triaA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let triaB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);

  return (triaA || triaB);
}

// Desafio 13
function hydrate(string) {
  let numeroCopos = string.match(/\d+/g).map(Number);
  let somaCopos = 0;
  for (let index = 0; index < numeroCopos.length; index += 1) {
    somaCopos += numeroCopos[index];
  }
  if (somaCopos > 1) {
    return (`${somaCopos} copos de água`);
  } if (somaCopos >= 0 || somaCopos < 1) {
    return (`${somaCopos} copo de água`);
  }
  return hydrate;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
