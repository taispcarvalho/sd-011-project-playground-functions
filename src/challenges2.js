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
function checkLength(array) {
  if (array.length !== 11) {
    message = 'Array com tamanho incorreto.';
  }
}

function check0to9(array) {
  const sorted = [...array].sort();
  for (let index = 0; index < 11; index += 1) {
    if ((sorted[index] < 0 || sorted[index] > 9)) {
      message 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function checkRepeat(array) {
  const sorted = [...array].sort();
  for (let index = 0; index < 11; index += 1) {
    if (sorted[index] === sorted[index + 1] && (sorted[index] === sorted[index + 2])) {
      message = 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function phoneNumber (array){
  let phoneNumber = `(${array[0]}${array[1]}) `;
  for (let index = 2; index < 7; index += 1) {
    phoneNumber += array[index];
  }
    phoneNumber += '-';
  for (let index = 7; index < 11; index += 1) {
    phoneNumber += array[index];
  }
}
let message = 'vazio'
function generatePhoneNumber(array) {
  checkLength(array);
  check0to9(array);
  checkRepeat(array);
  if (message === 'vazio') {
    phoneNumber(array);
  }
}
  
console.log((generatePhoneNumber([5, 8, 5, 3, 2, 2, 4, 1, 9, 7, 4])));

// Desafio 12
function noZeroSides(lineA, lineB, lineC) {
  if (lineA <= 0 || lineB <= 0 || lineC <= 0) {
    return false;
  }
}

function lengthSides(lineA, lineB, lineC) {
  if (lineA >= Math.abs(lineB + lineC) || lineB >= Math.abs(lineA + lineC)) {
    return false;
  }
  if ((lineC >= Math.abs(lineA + lineB))) {
    return false;
  }
}

function triangleCheck(lineA, lineB, lineC) {
  let condition1 = noZeroSides(lineA, lineB, lineC);
  let condition2 = lengthSides(lineA, lineB, lineC);
  if (condition1 === false || condition2 === false) {
    return false;
  }
  return true;
}
console.log(triangleCheck(9, 9, 2));

// Desafio 13
function hydrate(string) {
  let count = 0;
  let r = /\d+/g;
  while ((m = r.exec(string)) != null) {
    let number = parseInt(m[0]);
    count += number;
  }
  if (count === 1) {
    return '1 copo de água';
  }
  return count + ' copos de água';
}
console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
