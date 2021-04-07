// Desafio 10
function techList(techNames, name) {
  if (techNames.length <= 0) {
    return 'Vazio!';
  }
  let arrayAux = [];
  techNames = techNames.sort();
  for (let index = 0; index < techNames.length; index += 1) {
    arrayAux.push({
      tech: techNames[index],
      name,
    });
  }
  return arrayAux;
}
// Desafio 11
function checkArray(numbers) {
  if (numbers.lenght === 11) {
    return false;
  }
}
function checkNumbers(numbers) {
  let status = true;
  for (let index = 0; index < 11; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      status = false;
    }
  }
  return status;
}
function checkRepeatNumbers(numbers) {
  let status = true;
  let aux = [...numbers].sort();
  for (let index = 0; index < 11; index += 1) {
    if (aux[index] === aux[index + 1] && (aux[index] === aux[index + 2])) {
      status = false;
    }
  }
  return status;
}
function lastStep(numbers) {
  if (checkArray(numbers) === false) {
    return 'Array com tamanho incorreto';
  } if (checkNumbers(numbers) === false || checkRepeatNumbers(numbers) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}
function phone(numbers) {
  let phoneNumber = `(${numbers[0]}${numbers[1]}) `;
  for (let index = 2; index < 7; index += 1) {
    phoneNumber += numbers[index];
  }
  phoneNumber += '-';
  for (let index = 7; index < 11; index += 1) {
    phoneNumber += numbers[index];
  }
  return phoneNumber;
}
function generatePhoneNumber(numbers) {
  if (lastStep(numbers) === true) {
    return phone(numbers);
  }
  return lastStep(numbers);
}
// Desafio 12
function linesVerify (lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineC + lineA && lineC < lineB + lineA) {
    return true;
  }
  return false;
}
function absoluteValue (lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}
function triangleCheck(lineA, lineB, lineC) {
  if (linesVerify(lineA, lineB, lineC) === true && absoluteValue(lineA, lineB, lineC) === true) {
    return true;
  }
  return false;
}
// Desafio 13
function hydrate(string) {
  let reduction = /\d+/g;
  let quantity = string.match(reduction).map(Number);
  let count = 0;
  for (let index of quantity) {
    count += index;
  }
  if (count > 1) {
    return `${count} copos de água`;
  }
  return `${count} copo de água`;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
