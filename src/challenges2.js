const { TestScheduler } = require("@jest/core");

// Desafio 10
function techList(techNames, name) {
if (techNames === 0) {
  return 'Vazio!'
}
const techList = techNames.sort().map((tech) => ({tech, name}));
  return techList
}

// Desafio 11
function generatePhoneNumber(arrayOfNumbers) {
  let telefone = [];
  let count = 0;
  telefone = ('(' + arrayOfNumbers[0] + arrayOfNumbers[1] + ') ' + arrayOfNumbers[2] + arrayOfNumbers[3] + arrayOfNumbers[4] + arrayOfNumbers[5] +  arrayOfNumbers[6] + '-' + arrayOfNumbers[7] + arrayOfNumbers[8] + arrayOfNumbers[9] + arrayOfNumbers[10]);
  let size = arrayOfNumbers.length;
   
  
  for (let index in arrayOfNumbers) {
    if (arrayOfNumbers[index] < 0 || arrayOfNumbers[index] > 9) {
      return 'Não é possível gerar um número de telefone com esses valores.'
    } 
  }

  for (index in arrayOfNumbers) {
    
    if (arrayOfNumbers[index] === size) {
      count += 1;
    }
    return count;
  }
  
  if (arrayOfNumbers.length === 11) {
    false
    return telefone;
  } 
  if (arrayOfNumbers.length !== 11) { 
    false
    return 'Array com tamanho incorreto.'
  }
  
}
  
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 11, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 5, 5, 5, 5, 5, 8, 9, 0, 1]));
    
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
