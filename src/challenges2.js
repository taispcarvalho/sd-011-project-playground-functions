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
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
// Desafio 11
function countElement(numbers, element) {
  let count = 0;
  for (let number of numbers) {
    if (number === element) {
      count += 1;
    }
  }
  if (count >= 3) return 'não é possível gerar um número de telefone com esses valores';
}

// function checkNumbers(number) {
//   if (number < 0 || number > 9) return 'não é possível gerar um número de telefone com esses valores';
// }
console.log(generatePhoneNumber([10, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 10]));

function generatePhoneNumber(array) {
  let phoneNumber = '()-';
  for (let number of array) {
  }
  return phoneNumber;
}

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
