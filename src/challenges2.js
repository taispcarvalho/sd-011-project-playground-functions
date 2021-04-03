// Desafio 10
function techList(array, name) {
  let output = [];
  let object = {};
  let vetor = array.sort();
  for (let n = 0; n < vetor.length; n += 1) {
    object = {
      tech: vetor[n],
      name,
    };
    output.push(object);
  }
  if (output.length === 0) {
    output = 'Vazio!';
  }
  return output;
}

// Desafio 11
function repeatNumber(number, array) {
  let counter = 0;
  for (let n = 0; n < array.length; n += 1) { // varre elementos e compara com o number
    if (array[n] === number) {
      counter += 1;
    }
  }
  return counter; // qtd de vezes que number foi encontrado no array
}

function testeCondicoes(array) {
  let ok = true;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9 || repeatNumber(array[i], array) >= 3) {
      ok = false;
    }
  }
  return ok;
}

function formatNumber(array) {
  let ddd = array.slice(0, 2);
  let part1 = array.slice(2, 7);
  let part2 = array.slice(7);
  return `(${ddd.join('')}) ${part1.join('')}-${part2.join('')}`;
}
console.log(formatNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

function generatePhoneNumber(array) {
  let output = '';
  if (array.length !== 11) {
    output = 'Array com tamanho incorreto.';
  } else if (testeCondicoes(array) === false) {
    output = 'não é possível gerar um número de telefone com esses valores';
  } else {
    output = formatNumber(array);
  }
  return output;
}

// Desafio 12
function testaLado(ladoTeste, lado1, lado2) {
  let ok = false;
  if (ladoTeste < lado1 + lado2 && ladoTeste > Math.abs(lado1 - lado2)) {
    ok = true;
  }
  return ok;
}

function triangleCheck(A, B, C) {
  let ok = false;
  if (testaLado(A, B, C) === true && testaLado(B, A, C) === true && testaLado(C, A, B) === true) {
    ok = true;
  }
  return ok;
}

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  let sum = 0;
  let text = '';
  for (let n = 0; n < numbers.length; n += 1) {
    sum += numbers[n];
  }
  if (sum === 1) {
    text = `${sum} copo de água`;
  } else {
    text = `${sum} copos de água`;
  }
  return text;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
