// Desafio 10
function techList(arr, nome) {
  arr = arr.sort();

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = { tech: arr, name: nome };
  }

  return arr.length === 0 ? 'Vazio!' : arr;
}

// Desafio 11
function isNumThree(arr, str) {
  for (const n of arr) {
    let re = new RegExp(n, 'g');
    if (str.match(re).length >= 3) {
      return true;
    }
  }
  return false;
}

function isNegative(str) {
  return str.match(/-\d/g) !== null;
}

function isGreater9(str) {
  return str.match(/\d/g).length > 11;
}

function generatePhoneNumber(arr) {
  if (arr.length > 11) {
    return 'Array com tamanho incorreto.';
  }

  let str = arr.join('');
  if (!isGreater9(str) && !isNegative(str) && !isNumThree(arr, str)) {
    str = str.replace(/^(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');
    return str;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12

function abs(x) {
  return Math.abs(x);
}

function triangleCheck(a, b, c) {
  return a < abs(b + c) && b < abs(a + c) && c < abs(a + b);
}

// Desafio 13

function int(str) {
  return parseInt(str, 10);
}

function hydrate(str) {
  let number = 0;
  let numbers = str.match(/\d/g);

  for (const num of numbers) {
    number += int(num);
  }
  if (number <= 1) {
    return `${number} copo de água`;
  }
  return `${number} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
