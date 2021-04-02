// Desafio 10
function techList(list, name) {
  if (list.length === 0) {
    return 'Vazio!';
  }

  let result = [];
  list = list.sort();
  for (let technology of list) {
    result.push({
      tech: technology,
      name: `${name}`,
    });
  }
  return result;
}

// Desafio 11
let message = 'OK';

function length(array) {
  if (array.length !== 11) {
    message = 'Array com tamanho incorreto.';
  }
}

function check0to9(array) {
  const sorted = [...array].sort();
  for (let index = 0; index < 11; index += 1) {
    if (sorted[index] < 0 || sorted[index] > 9) {
      message = 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function checkConsecutive(array) {
  const sorted = [...array].sort();
  for (let index = 0; index < 11; index += 1) {
    if (sorted[index] === sorted[index + 1] && (sorted[index] === sorted[index + 2])) {
      message = 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function phoneN(array) {
  if (message === 'OK') {
    let phoneNumber = `(${array[0]}${array[1]}) `;
    for (let index = 2; index < 7; index += 1) {
      phoneNumber += array[index];
    }
    phoneNumber += '-';
    for (let index = 7; index < 11; index += 1) {
      phoneNumber += array[index];
    }
    return phoneNumber;
  }
}

function generatePhoneNumber(array) {
  length(array);
  if (message !== 'OK') {
    return message;
  }
  check0to9(array);
  checkConsecutive(array);
  if (message === 'OK') {
    return phoneN(array);
  }
  return message;
}
console.log(generatePhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4]));

// Desafio 12
let status = true;
function sumSide(lineA, lineB, lineC) {
  if (lineA >= Math.abs(lineB + lineC) || lineB >= Math.abs(lineA + lineC)) {
    status = false;
  }
  if (lineC >= Math.abs(lineA + lineB)) {
    status = false;
  }
}
function triangleCheck(lineA, lineB, lineC) {
  if (lineA <= 0 || lineB <= 0 || lineC <= 0) {
    status = false;
  }
  sumSide(lineA, lineB, lineC);
  return status;
}

// Desafio 13
function hydrate(string) {
  let count = 0;
  let r = /\d+/g;
  while ((m = r.exec(string)) != null) {
    let number = parseInt(m[0]);
    count += number;
  }
  if (count == 1) {
    return '1 copo de água';
  }
  return count + ' copos de água';
}
console.log(hydrate("1 cerveja"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
