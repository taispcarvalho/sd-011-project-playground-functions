// Desafio 10
function sortObject(element, nome) {
  return { tech: element, name: nome };
}
function techList(array, name) {
  let newObject = [];
  if (array.length === 0) return 'Vazio!';
  for (let element of array.sort()) {
    newObject.push(sortObject(element, name));
  }
  return newObject;
}
// Desafio 11
function areNumbersRepeatedTooMuch(array) {
  for (let numbers of array) {
    let count = 0;
    for (let element of array) {
      if (numbers === element) {
        count += 1;
      }
    }
    if (count >= 3) return true;
  }
  return false;
}

function numbersOutOfRangeExist(array) {
  for (let numbers of array) {
    if (numbers < 0 || numbers > 9) return true;
  }
  return false;
}

function generatePhoneNumber(array) {
  if (areNumbersRepeatedTooMuch(array) || numbersOutOfRangeExist(array)) return 'não é possível gerar um número de telefone com esses valores';
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  return `(${array[0]}${array[1]})${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

let phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1];
console.log(generatePhoneNumber(phoneNumber));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineC < lineA + lineB && lineC > Math.abs(lineB - lineA)) return true;
  if (lineA < lineC + lineB && lineA > Math.abs(lineB - lineC)) return true;
  if (lineB < lineA + lineC && lineB > Math.abs(lineC - lineA)) return true;
  return false;
}
// Desafio 13
function transformStringToArray(string) {
  return string.split(' ');
}

function transformStringToNumber(array) {
  let newArray = [];
  for (let current of array) {
    newArray.push(parseFloat(current));
  }
  return newArray;
}

function sumNumbers(array) {
  let totalSum = 0;
  for (let number of array) {
    if (number % number === 0) {
      totalSum += number;
    }
  }
  return totalSum;
}

function hydrate(string) {
  let waterCups = sumNumbers(transformStringToNumber(transformStringToArray(string)));
  if (waterCups === 1) return waterCups + ' copo de água';
  return waterCups + ' copos de água';
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
