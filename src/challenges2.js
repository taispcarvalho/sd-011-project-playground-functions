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
function length(array) {
  return (array.length === 11);
}

function check0to9(array) {
  let situation = true;
  for (let index = 0; index < 11; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      situation = false;
      break;
      // 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return situation;
}

function checkConsecutive(array) {
  const sorted = [...array].sort();
  let situation = true;
  for (let index = 0; index < 11; index += 1) {
    if (sorted[index] === sorted[index + 1] && (sorted[index] === sorted[index + 2])) {
      situation = false;
      // 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return situation;
}

function finalCheck(array) {
  if (length(array) === false) {
    return 'Array com tamanho incorreto.';
  } if (check0to9(array) === false || checkConsecutive(array) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}

function thePhoneNumber(array) {
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

function generatePhoneNumber(array) {
  if (finalCheck(array) === true) {
    return thePhoneNumber(array);
  }
  return finalCheck(array);
}

console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0]));

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
  let resultado = status;
  return resultado;
}
console.log(triangleCheck(10, 14, 8));

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
