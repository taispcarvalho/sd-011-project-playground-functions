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
  if (c < a + b && c > Math.abs(b - a)) return true;
  if (a < c + b && a > Math.abs(b - c)) return true;
  if (b < a + c && b > Math.abs(c - a)) return true;
  return false
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
