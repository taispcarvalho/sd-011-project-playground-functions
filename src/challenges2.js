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
function Repeat(nIndx, n) {
  let repeat = 0;
  for (let index = 0; index < nIndx.length; index += 1) {
    if (nIndx[index] === n) {
      repeat += 1;
    }
  }
  return repeat;
}

function checkNum(n) {
  for (let index of n) {
    if (index < 0 || index > 9 || Repeat(n, index) > 2) {
      return true;
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
  } else if (checkNum(nPhone) === true) {
    response = 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let index of nPhone) {
      nStrPhone = nStrPhone.concat(index);
    }
    response = nStrPhone.replace(RegExp, '($1) $2-$3');
  }
  return response;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let Angle1 = Math.abs(lineA + lineB);
  let Angle2 = Math.abs(lineA - lineB);
  let value = false;

  if (lineC < Angle1 && lineC > Angle2) {
    value = true;
  } else if (Angle1 < lineC && Angle2 > lineC) {
    value = false;
  }
  return value;
}

console.log(triangleCheck(10, 14, 99));

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
