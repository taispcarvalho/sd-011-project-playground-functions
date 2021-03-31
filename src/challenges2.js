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
// function countElement(numbers, element) {
//   let count = 0;
//   for (let number of numbers) {
//     if (number === element) {
//       count += 1;
//     }
//   }
//   if (count >= 3) return 'não é possível gerar um número de telefone com esses valores';
// }

// function checkNumbers(number) {
//   if (number < 0 || number > 9) return 'não é possível gerar um número de telefone com esses valores';
// }
// console.log(generatePhoneNumber([10, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 10]));

function generatePhoneNumber() {
//   let phoneNumber = '()-';
//   for (let number of array) {
//   }
//   return phoneNumber;
}

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
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
