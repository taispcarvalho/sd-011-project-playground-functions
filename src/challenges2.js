// Desafio 10
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  else {
    for (let index in array) {
      array[index] = {
        tech: array[index],
        name: name,
      };}}

  array.sort(function (a, b) {
  let techA = a.tech.toLowerCase();
  let techB = b.tech.toLowerCase();
  if (techA < techB) return -1;
  if (techA > techB) return 1;
  return 0;
  });
  // Inspirado no código do site http://www.javascriptkit.com/javatutors/arraysort2.shtml
  return array;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let firstPart = ['('];
  let secondPart = [];
  let thirdPart = [];

  for (let index = 0; index < 2; index += 1) {
    firstPart.push(numbers[index]);
  }
  firstPart.push(')');
  
  for (let index = 2; index < 7; index += 1) {
    secondPart.push(numbers[index]);
  }

  for (let index = 7; index < 11; index += 1) {
    thirdPart.push(numbers[index]);
  }
  
  let completeNumber = firstPart.join('') + ' ' + secondPart.join('') + '-' + thirdPart.join('');
  
  return completeNumber;
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
