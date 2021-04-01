// Desafio 10
function techList(arr, nm) {
  let newArr = [];

  if (arr.length > 0) {
    for (let index of arr.sort()) {
      newArr.push({ tech: index, name: nm });
    }
  } else return 'Vazio!';
  return newArr;
}

// Desafio 11 Regex Retirado https://gist.github.com/knoonrx/a180f0b7e3039e42c621
function Repeat(n) {
  let repeat = 1;
  for (let index = 0; index < n.length; index += 1) {
    if (n[index] === n[index + 1]) {
      repeat += 1;
    }
  }
  return repeat;
}

function checkNum(n) {
  for (let index of n) {
    if (index < 0 || index > 9 || Repeat(index) >= 3) {
      return false;
    }
  }
}
// Regex retiradohttps://gist.github.com/knoonrx/a180f0b7e3039e42c621
function generatePhoneNumber(nPhone) {
  let response = '';
  let nStrPhone = '';
  let RegExp = /(\d{2})(\d{5})(\d{4})/;

  if (nPhone.length !== 11) {
    response = 'Array com tamanho incorreto.';
  } else if (checkNum(nPhone) === false) {
    response = 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let index of nPhone) {
      nStrPhone = nStrPhone.concat(index);
    }
    response = nStrPhone.replace(RegExp, '($1) $2-$3');
  }
  return response;
}

console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

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
