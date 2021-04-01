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
      name,
    });
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  const sorted = [...array].sort();
  for (let index = 0; index < 11; index += 1) {
    if (sorted[index] < 0 || sorted[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (sorted[index] === sorted[index + 1] && (sorted[index] === sorted[index + 2])) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
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
console.log((generatePhoneNumber([5, 5, 5, 3, 2, 2, 1, 1, 9, 7, 8])));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA <= 0 || lineB <= 0 || lineC <= 0) {
    return false;
  }
  if (lineA >= Math.abs(lineB + lineC) || lineB >= Math.abs(lineA + lineC) || lineC >= Math.abs(lineA + lineB)) {
    return false;
  }
  return true;
}
console.log(triangleCheck(5, 5, 5));

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
